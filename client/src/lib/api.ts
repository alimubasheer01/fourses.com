import { apiRequest } from "./queryClient";

/**
 * API functions for handling travel service bookings
 */

export interface BookingRequest {
  userId: number;
  serviceType: 'flight' | 'hotel' | 'train' | 'cab' | 'bus' | 'logistics';
  details: Record<string, any>;
  totalPrice: number;
}

export interface BookingResponse {
  id: number;
  userId: number;
  serviceType: string;
  status: string;
  details: Record<string, any>;
  totalPrice: number;
  createdAt: string;
}

/**
 * Create a new booking
 */
export async function createBooking(bookingData: BookingRequest): Promise<BookingResponse> {
  const response = await apiRequest('POST', '/api/bookings', {
    ...bookingData,
    status: 'pending',
  });
  
  return response.json();
}

/**
 * Get a booking by ID
 */
export async function getBooking(id: number): Promise<BookingResponse> {
  const response = await apiRequest('GET', `/api/bookings/${id}`);
  return response.json();
}

/**
 * Get all bookings for a user
 */
export async function getUserBookings(userId: number): Promise<BookingResponse[]> {
  const response = await apiRequest('GET', `/api/users/${userId}/bookings`);
  return response.json();
}

/**
 * Update a booking status
 */
export async function updateBookingStatus(
  id: number, 
  status: 'pending' | 'confirmed' | 'canceled'
): Promise<BookingResponse> {
  const response = await apiRequest('PATCH', `/api/bookings/${id}/status`, { status });
  return response.json();
}

/**
 * Get all featured destinations
 */
export async function getFeaturedDestinations() {
  const response = await apiRequest('GET', '/api/destinations/featured');
  return response.json();
}

/**
 * Get all destinations
 */
export async function getAllDestinations() {
  const response = await apiRequest('GET', '/api/destinations');
  return response.json();
}

/**
 * Get destination by ID
 */
export async function getDestinationById(id: number) {
  const response = await apiRequest('GET', `/api/destinations/${id}`);
  return response.json();
}

/**
 * User registration
 */
export interface UserRegistrationData {
  username: string;
  password: string;
  email: string;
  fullName?: string;
  phone?: string;
}

export async function registerUser(userData: UserRegistrationData) {
  const response = await apiRequest('POST', '/api/users/register', userData);
  return response.json();
}

/**
 * User login
 */
export interface LoginCredentials {
  username: string;
  password: string;
}

export async function loginUser(credentials: LoginCredentials) {
  const response = await apiRequest('POST', '/api/login', credentials);
  return response.json();
}
