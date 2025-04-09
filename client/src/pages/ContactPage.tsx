import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Please enter a subject"),
  message: z.string().min(10, "Please enter a message of at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Contact form data:', data);
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <img 
              src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d" 
              alt="Contact us header" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
                Get in <span className="text-[hsl(var(--primary))]">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-white mb-8">
                We're here to help with your travel questions and booking needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form & Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto -mt-24 relative z-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-heading font-bold mb-6">Contact Information</h2>
                      
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Address</h3>
                            <p className="text-neutral-dark">
                              123 Travel Street<br />
                              Global City, 10001<br />
                              United States
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Phone</h3>
                            <p className="text-neutral-dark">
                              Customer Service: +1 (555) 123-4567<br />
                              Bookings: +1 (555) 765-4321
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Email</h3>
                            <p className="text-neutral-dark">
                              info@travelease.com<br />
                              support@travelease.com
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Business Hours</h3>
                            <p className="text-neutral-dark">
                              Monday-Friday: 9am - 8pm<br />
                              Saturday: 10am - 6pm<br />
                              Sunday: Closed
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <h3 className="font-bold mb-3">Connect With Us</h3>
                        <div className="flex space-x-4">
                          <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-neutral-dark transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                          </a>
                          <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-neutral-dark transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                          </a>
                          <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-neutral-dark transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                            </svg>
                          </a>
                          <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-neutral-dark transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="md:col-span-2">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-heading font-bold mb-6">Send Us a Message</h2>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Your Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email Address</FormLabel>
                                  <FormControl>
                                    <Input type="email" placeholder="your@email.com" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="phone"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Phone Number (Optional)</FormLabel>
                                  <FormControl>
                                    <Input placeholder="+1 (555) 123-4567" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <FormField
                              control={form.control}
                              name="subject"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Subject</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Booking Inquiry" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                          
                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Your Message</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Please let us know how we can help you..." 
                                    rows={6}
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <Button 
                            type="submit" 
                            className="w-full bg-[hsl(var(--primary))] text-primary hover:bg-[hsl(var(--accent))]"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></div>
                                Sending...
                              </>
                            ) : "Send Message"}
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-heading font-bold mb-2">How do I change or cancel my booking?</h3>
                  <p className="text-neutral-dark">
                    You can manage your bookings through your account dashboard or contact our customer service team directly for assistance with changes or cancellations.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-heading font-bold mb-2">What is your refund policy?</h3>
                  <p className="text-neutral-dark">
                    Refund policies vary by service. Generally, cancellations made 48 hours before the scheduled service are eligible for a full refund. Please check the specific terms for each booking.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-heading font-bold mb-2">How does the AI assistant work?</h3>
                  <p className="text-neutral-dark">
                    Our AI assistant uses machine learning to understand your preferences and provide personalized travel recommendations based on your past bookings and stated preferences.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-heading font-bold mb-2">Do you offer corporate travel services?</h3>
                  <p className="text-neutral-dark">
                    Yes, we offer specialized corporate travel management services with dedicated account managers, customized reporting, and negotiated rates for businesses.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="bg-primary text-white p-8 rounded-xl text-center">
                <h3 className="text-xl font-heading font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-gray-300 mb-6">
                  Our customer support team is available 24/7 to help with urgent travel needs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="tel:+15551234567" className="bg-[hsl(var(--primary))] text-primary px-6 py-3 rounded-full font-bold hover:bg-[hsl(var(--accent))] transition-colors inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Emergency Support
                  </a>
                  <a href="#chat" className="bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    Chat with AI Assistant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
