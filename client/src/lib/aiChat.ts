import { apiRequest } from "./queryClient";

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
  id?: number;
}

export interface ChatRequest {
  message: string;
  userId?: number | null;
}

export interface ChatResponse {
  message: string;
}

/**
 * Function to send a message to the AI chatbot
 * @param message - User message text
 * @param userId - Optional user ID for personalized responses (if logged in)
 * @returns Promise with the AI response
 */
export async function sendChatMessage(message: string, userId?: number): Promise<ChatResponse> {
  try {
    const response = await apiRequest('POST', '/api/chat', {
      message,
      userId: userId || null
    });
    
    if (!response.ok) {
      throw new Error('Failed to get response from AI chatbot');
    }
    
    return response.json();
  } catch (error) {
    console.error('Chat error:', error);
    throw new Error('Failed to communicate with the AI assistant');
  }
}

/**
 * Function to get chat history for a user
 * @param userId - User ID to fetch history for
 * @returns Promise with array of chat messages
 */
export async function getChatHistory(userId: number): Promise<ChatMessage[]> {
  try {
    const response = await apiRequest('GET', `/api/users/${userId}/chat-history`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch chat history');
    }
    
    return response.json();
  } catch (error) {
    console.error('Failed to fetch chat history:', error);
    throw new Error('Could not load chat history');
  }
}

/**
 * Helper function to format suggestions for common travel queries
 * Returns a list of predefined suggestions to help users get started
 */
export function getChatSuggestions(): string[] {
  return [
    "What are the best destinations for a family vacation?",
    "How can I find the cheapest flights to Europe?",
    "What documents do I need for international travel?",
    "Can you recommend hotels in New York City?",
    "What's the best time to visit Bali?",
    "How do I book a package deal with flight and hotel?"
  ];
}

/**
 * Function to analyze user query and provide category information
 * @param query - The user's message to categorize
 * @returns The likely service category the query relates to
 */
export function analyzeQueryType(query: string): string {
  const query_lower = query.toLowerCase();
  
  if (query_lower.includes('flight') || query_lower.includes('plane') || query_lower.includes('airport')) {
    return 'flight';
  } else if (query_lower.includes('hotel') || query_lower.includes('room') || query_lower.includes('stay') || query_lower.includes('accommodation')) {
    return 'hotel';
  } else if (query_lower.includes('train') || query_lower.includes('rail')) {
    return 'train';
  } else if (query_lower.includes('cab') || query_lower.includes('taxi') || query_lower.includes('ride')) {
    return 'cab';
  } else if (query_lower.includes('bus') || query_lower.includes('coach')) {
    return 'bus';
  } else if (query_lower.includes('package') || query_lower.includes('ship') || query_lower.includes('deliver')) {
    return 'logistics';
  } else {
    return 'general';
  }
}

/**
 * Get a welcome message for a new chat session
 */
export function getWelcomeMessage(): ChatMessage {
  return {
    role: 'assistant',
    content: "Hi there! I'm your TravelEase AI assistant. How can I help with your travel plans today?"
  };
}
