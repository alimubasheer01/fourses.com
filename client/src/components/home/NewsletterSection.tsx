import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Get Travel Deals & Updates</h2>
          <p className="text-lg text-neutral-dark mb-8">
            Subscribe to our newsletter and be the first to receive exclusive deals and travel inspiration.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 py-6 px-4"
            />
            <Button 
              type="submit" 
              className="bg-[hsl(var(--primary))] text-primary px-6 py-6 rounded-lg font-bold hover:bg-[hsl(var(--accent))] transition-colors whitespace-nowrap"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></div>
                  Subscribing...
                </>
              ) : "Subscribe Now"}
            </Button>
          </form>
          <p className="text-sm text-neutral-dark mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
