import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertBookingSchema, insertChatMessageSchema } from "@shared/schema";
import { OpenAI } from "openai";
import { z } from "zod";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "sk-dummy-key"
});

export async function registerRoutes(app: Express): Promise<Server> {
  const httpServer = createServer(app);

  // API routes prefix
  app.use("/api", (req, res, next) => {
    console.log(`API Request: ${req.method} ${req.path}`);
    next();
  });

  // User Routes
  app.post("/api/users/register", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      
      // Check if user already exists
      const existingUserByUsername = await storage.getUserByUsername(userData.username);
      if (existingUserByUsername) {
        return res.status(400).json({ message: "Username already exists" });
      }
      
      const existingUserByEmail = await storage.getUserByEmail(userData.email);
      if (existingUserByEmail) {
        return res.status(400).json({ message: "Email already exists" });
      }
      
      const newUser = await storage.createUser(userData);
      
      // Don't return password in response
      const { password, ...userWithoutPassword } = newUser;
      res.status(201).json(userWithoutPassword);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid user data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Error creating user" });
      }
    }
  });

  app.post("/api/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
      }
      
      const user = await storage.getUserByUsername(username);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      // Don't return password in response
      const { password: _, ...userWithoutPassword } = user;
      res.json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: "Error during login" });
    }
  });

  // Destinations Routes
  app.get("/api/destinations", async (req, res) => {
    try {
      const destinations = await storage.getAllDestinations();
      res.json(destinations);
    } catch (error) {
      res.status(500).json({ message: "Error fetching destinations" });
    }
  });

  app.get("/api/destinations/featured", async (req, res) => {
    try {
      const featuredDestinations = await storage.getFeaturedDestinations();
      res.json(featuredDestinations);
    } catch (error) {
      res.status(500).json({ message: "Error fetching featured destinations" });
    }
  });

  app.get("/api/destinations/:id", async (req, res) => {
    try {
      const destinationId = parseInt(req.params.id);
      
      if (isNaN(destinationId)) {
        return res.status(400).json({ message: "Invalid destination ID" });
      }
      
      const destination = await storage.getDestinationById(destinationId);
      
      if (!destination) {
        return res.status(404).json({ message: "Destination not found" });
      }
      
      res.json(destination);
    } catch (error) {
      res.status(500).json({ message: "Error fetching destination" });
    }
  });

  // Booking Routes
  app.post("/api/bookings", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const newBooking = await storage.createBooking(bookingData);
      res.status(201).json(newBooking);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid booking data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Error creating booking" });
      }
    }
  });

  app.get("/api/bookings/:id", async (req, res) => {
    try {
      const bookingId = parseInt(req.params.id);
      
      if (isNaN(bookingId)) {
        return res.status(400).json({ message: "Invalid booking ID" });
      }
      
      const booking = await storage.getBookingById(bookingId);
      
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      
      res.json(booking);
    } catch (error) {
      res.status(500).json({ message: "Error fetching booking" });
    }
  });

  app.get("/api/users/:userId/bookings", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      const userBookings = await storage.getUserBookings(userId);
      res.json(userBookings);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user bookings" });
    }
  });

  app.patch("/api/bookings/:id/status", async (req, res) => {
    try {
      const bookingId = parseInt(req.params.id);
      const { status } = req.body;
      
      if (isNaN(bookingId)) {
        return res.status(400).json({ message: "Invalid booking ID" });
      }
      
      if (!status || !["pending", "confirmed", "canceled"].includes(status)) {
        return res.status(400).json({ message: "Invalid status value" });
      }
      
      const updatedBooking = await storage.updateBookingStatus(bookingId, status);
      
      if (!updatedBooking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      
      res.json(updatedBooking);
    } catch (error) {
      res.status(500).json({ message: "Error updating booking status" });
    }
  });

  // Chat Routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, userId } = req.body;
      
      if (!message) {
        return res.status(400).json({ message: "Message content is required" });
      }
      
      // Save user message
      const userMessageData = {
        userId: userId || null,
        role: "user",
        content: message,
      };
      
      await storage.saveChatMessage(userMessageData);
      
      // Call OpenAI API
      // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
      const aiResponse = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are a helpful travel assistant named TravelEase AI. You help users plan their trips, recommend destinations, and provide travel advice. Keep your responses concise and focused on travel-related questions."
          },
          {
            role: "user",
            content: message
          }
        ],
        max_tokens: 150
      });
      
      const aiResponseContent = aiResponse.choices[0].message.content;
      
      // Save AI response
      const aiMessageData = {
        userId: userId || null,
        role: "assistant",
        content: aiResponseContent,
      };
      
      await storage.saveChatMessage(aiMessageData);
      
      res.json({ 
        message: aiResponseContent
      });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ message: "Error processing chat message" });
    }
  });

  app.get("/api/users/:userId/chat-history", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      
      if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      
      const chatHistory = await storage.getUserChatHistory(userId);
      res.json(chatHistory);
    } catch (error) {
      res.status(500).json({ message: "Error fetching chat history" });
    }
  });

  return httpServer;
}
