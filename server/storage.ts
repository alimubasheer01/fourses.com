import { 
  users, type User, type InsertUser,
  bookings, type Booking, type InsertBooking,
  destinations, type Destination, type InsertDestination,
  chatMessages, type ChatMessage, type InsertChatMessage
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Booking operations
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookingById(id: number): Promise<Booking | undefined>;
  getUserBookings(userId: number): Promise<Booking[]>;
  updateBookingStatus(id: number, status: string): Promise<Booking | undefined>;
  
  // Destination operations
  createDestination(destination: InsertDestination): Promise<Destination>;
  getAllDestinations(): Promise<Destination[]>;
  getFeaturedDestinations(): Promise<Destination[]>;
  getDestinationById(id: number): Promise<Destination | undefined>;
  
  // Chat operations
  saveChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getUserChatHistory(userId: number): Promise<ChatMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private bookings: Map<number, Booking>;
  private destinations: Map<number, Destination>;
  private chatMessages: Map<number, ChatMessage>;
  private userIdCounter: number;
  private bookingIdCounter: number;
  private destinationIdCounter: number;
  private chatMessageIdCounter: number;

  constructor() {
    this.users = new Map();
    this.bookings = new Map();
    this.destinations = new Map();
    this.chatMessages = new Map();
    
    this.userIdCounter = 1;
    this.bookingIdCounter = 1;
    this.destinationIdCounter = 1;
    this.chatMessageIdCounter = 1;
    
    // Initialize with sample destinations
    this.initSampleDestinations();
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  
  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Booking operations
  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.bookingIdCounter++;
    const createdAt = new Date();
    const booking: Booking = { ...insertBooking, id, createdAt };
    this.bookings.set(id, booking);
    return booking;
  }
  
  async getBookingById(id: number): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }
  
  async getUserBookings(userId: number): Promise<Booking[]> {
    return Array.from(this.bookings.values()).filter(
      (booking) => booking.userId === userId
    );
  }
  
  async updateBookingStatus(id: number, status: string): Promise<Booking | undefined> {
    const booking = this.bookings.get(id);
    if (booking) {
      const updatedBooking = { ...booking, status };
      this.bookings.set(id, updatedBooking);
      return updatedBooking;
    }
    return undefined;
  }
  
  // Destination operations
  async createDestination(insertDestination: InsertDestination): Promise<Destination> {
    const id = this.destinationIdCounter++;
    const destination: Destination = { ...insertDestination, id };
    this.destinations.set(id, destination);
    return destination;
  }
  
  async getAllDestinations(): Promise<Destination[]> {
    return Array.from(this.destinations.values());
  }
  
  async getFeaturedDestinations(): Promise<Destination[]> {
    return Array.from(this.destinations.values()).filter(
      (destination) => destination.featured
    );
  }
  
  async getDestinationById(id: number): Promise<Destination | undefined> {
    return this.destinations.get(id);
  }
  
  // Chat operations
  async saveChatMessage(insertChatMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = this.chatMessageIdCounter++;
    const timestamp = new Date();
    const chatMessage: ChatMessage = { ...insertChatMessage, id, timestamp };
    this.chatMessages.set(id, chatMessage);
    return chatMessage;
  }
  
  async getUserChatHistory(userId: number): Promise<ChatMessage[]> {
    return Array.from(this.chatMessages.values())
      .filter((message) => message.userId === userId)
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  }
  
  // Initialize sample data
  private initSampleDestinations() {
    const sampleDestinations: InsertDestination[] = [
      {
        name: "Bali",
        country: "Indonesia",
        description: "Tropical paradise with beautiful beaches and rich cultural heritage.",
        rating: 48,
        imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
        popularTag: "Tropical Paradise",
        recommendedDays: "5-7 days",
        priceFrom: 899,
        featured: true
      },
      {
        name: "Santorini",
        country: "Greece",
        description: "Stunning island with white-washed buildings and breathtaking sea views.",
        rating: 49,
        imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
        popularTag: "Breathtaking Views",
        recommendedDays: "4-6 days",
        priceFrom: 1099,
        featured: true
      },
      {
        name: "Tokyo",
        country: "Japan",
        description: "Vibrant metropolis blending ultramodern with traditional.",
        rating: 47,
        imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
        popularTag: "Urban Adventure",
        recommendedDays: "7-10 days",
        priceFrom: 1299,
        featured: true
      },
      {
        name: "Paris",
        country: "France",
        description: "City of light known for its art, fashion, and cuisine.",
        rating: 48,
        imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
        popularTag: "Romantic Getaway",
        recommendedDays: "5-7 days",
        priceFrom: 999,
        featured: true
      },
      {
        name: "New York",
        country: "USA",
        description: "The city that never sleeps with iconic landmarks and cultural diversity.",
        rating: 46,
        imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
        popularTag: "City Explorer",
        recommendedDays: "6-8 days",
        priceFrom: 1199,
        featured: true
      },
      {
        name: "Maldives",
        country: "Maldives",
        description: "Tropical paradise with pristine beaches and crystal-clear waters.",
        rating: 49,
        imageUrl: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
        popularTag: "Luxury Retreat",
        recommendedDays: "7-10 days",
        priceFrom: 1899,
        featured: true
      }
    ];
    
    sampleDestinations.forEach(destination => {
      this.createDestination(destination);
    });
  }
}

export const storage = new MemStorage();
