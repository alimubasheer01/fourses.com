import { pgTable, text, serial, integer, boolean, timestamp, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  fullName: text("full_name"),
  phone: text("phone"),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  fullName: true,
  phone: true,
});

// Bookings table (generic for all service types)
export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  serviceType: text("service_type").notNull(), // 'flight', 'hotel', 'train', 'cab', 'bus', 'logistics'
  status: text("status").notNull(), // 'pending', 'confirmed', 'canceled'
  details: json("details").notNull(), // Service-specific booking details
  totalPrice: integer("total_price").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertBookingSchema = createInsertSchema(bookings).pick({
  userId: true,
  serviceType: true,
  status: true, 
  details: true,
  totalPrice: true,
});

// Destinations table
export const destinations = pgTable("destinations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  country: text("country").notNull(),
  description: text("description").notNull(),
  rating: integer("rating").notNull(),
  imageUrl: text("image_url").notNull(),
  popularTag: text("popular_tag"),
  recommendedDays: text("recommended_days"),
  priceFrom: integer("price_from"),
  featured: boolean("featured").default(false),
});

export const insertDestinationSchema = createInsertSchema(destinations).pick({
  name: true,
  country: true,
  description: true,
  rating: true,
  imageUrl: true,
  popularTag: true,
  recommendedDays: true,
  priceFrom: true,
  featured: true,
});

// ChatMessages table to store user conversations
export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  userId: integer("user_id"),
  role: text("role").notNull(), // 'user' or 'assistant'
  content: text("content").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).pick({
  userId: true,
  role: true,
  content: true,
});

// Export types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;

export type Destination = typeof destinations.$inferSelect;
export type InsertDestination = z.infer<typeof insertDestinationSchema>;

export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;
