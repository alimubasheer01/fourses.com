import { useState, useRef, useEffect } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIChatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi there! I'm your TravelEase AI assistant. How can I help with your travel plans today?"
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;
    
    const userMessage: Message = {
      role: 'user',
      content: inputMessage,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    
    try {
      const response = await apiRequest('POST', '/api/chat', {
        message: userMessage.content,
        userId: null, // In a real app, replace with actual userId if logged in
      });
      
      const data = await response.json();
      
      const aiMessage: Message = {
        role: 'assistant',
        content: data.message,
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to get response from AI assistant. Please try again.",
        variant: "destructive",
      });
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="chat" className="fixed bottom-0 right-0 z-40 mb-4 mr-4 md:mb-8 md:mr-8">
      {/* Chat Button */}
      <button 
        onClick={toggleChat}
        className="bg-[hsl(var(--primary))] text-primary w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[hsl(var(--accent))] transition-colors"
        aria-label="Toggle AI Chat Assistant"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </button>
      
      {/* Chat Window */}
      {isChatOpen && (
        <div className="chatbot-container bg-white rounded-xl shadow-xl w-80 md:w-96 absolute bottom-16 right-0 overflow-hidden">
          <div className="bg-primary text-white p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="ml-3 font-heading font-bold">Travel AI Assistant</h3>
            </div>
            <button 
              onClick={toggleChat}
              className="text-white hover:text-[hsl(var(--primary))]"
              aria-label="Close chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex items-start ${message.role === 'user' ? 'justify-end' : ''}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))] flex-shrink-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                
                <div className={`${message.role === 'assistant' ? 'ml-3 bg-gray-100' : 'mr-3 bg-primary text-white'} p-3 rounded-lg chat-bubble`}>
                  <p className="text-sm">{message.content}</p>
                </div>
                
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--primary))] flex-shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3 bg-gray-100 p-3 rounded-lg chat-bubble">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef}></div>
          </div>
          
          <div className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex items-center">
              <input 
                type="text" 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..." 
                className="flex-1 py-2 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--primary))] focus:border-[hsl(var(--primary))]"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className="ml-2 bg-[hsl(var(--primary))] text-primary w-10 h-10 rounded-full flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-colors"
                disabled={isLoading}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
