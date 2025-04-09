import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";

const busBookingSchema = z.object({
  from: z.string().min(2, "Please enter origin"),
  to: z.string().min(2, "Please enter destination"),
  departDate: z.string().min(1, "Please select departure date"),
  passengers: z.string().min(1, "Please select number of passengers"),
  busType: z.enum(["standard", "sleeper", "luxury", "express"]),
  returnTicket: z.boolean().default(false),
  returnDate: z.string().optional(),
});

type BusBookingValues = z.infer<typeof busBookingSchema>;

export default function BusBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<BusBookingValues>({
    resolver: zodResolver(busBookingSchema),
    defaultValues: {
      from: "",
      to: "",
      departDate: "",
      passengers: "1",
      busType: "standard",
      returnTicket: false,
      returnDate: "",
    },
  });
  
  const onSubmit = async (data: BusBookingValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate user ID (in a real app, this would come from authentication)
      const userId = 1;
      
      await apiRequest('POST', '/api/bookings', {
        userId: userId,
        serviceType: 'bus',
        status: 'pending',
        details: data,
        totalPrice: calculatePrice(data),
      });
      
      toast({
        title: "Success!",
        description: "Your bus booking request has been received.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit bus booking. Please try again.",
        variant: "destructive",
      });
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const calculatePrice = (data: BusBookingValues) => {
    // This is a simplified pricing model for demonstration
    const basePrice = 20;
    const passengerCount = parseInt(data.passengers);
    
    let busTypeMultiplier = 1;
    switch (data.busType) {
      case "sleeper":
        busTypeMultiplier = 1.5;
        break;
      case "luxury":
        busTypeMultiplier = 2;
        break;
      case "express":
        busTypeMultiplier = 1.3;
        break;
    }
    
    let totalPrice = basePrice * passengerCount * busTypeMultiplier;
    
    // Add return ticket price if selected
    if (data.returnTicket) {
      totalPrice *= 1.8; // 10% discount on return journey
    }
    
    return Math.round(totalPrice);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Book Your Bus Journey</CardTitle>
        <CardDescription>Find and book comfortable bus travel options</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                control={form.control}
                name="from"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>From</FormLabel>
                    <FormControl>
                      <Input placeholder="City or bus station" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="to"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>To</FormLabel>
                    <FormControl>
                      <Input placeholder="City or bus station" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                control={form.control}
                name="departDate"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Departure Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="passengers"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Passengers</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Number of passengers" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Passenger" : "Passengers"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="busType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bus Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select bus type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="sleeper">Sleeper</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                      <SelectItem value="express">Express</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex items-center space-x-2">
              <FormField
                control={form.control}
                name="returnTicket"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        Book return ticket
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            
            {form.watch("returnTicket") && (
              <FormField
                control={form.control}
                name="returnDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Return Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            
            <div className="flex justify-between items-center pt-4">
              <div className="text-lg font-semibold">
                Estimated Price: ${calculatePrice(form.getValues())}
              </div>
              <Button 
                type="submit" 
                className="bg-[hsl(var(--primary))] text-primary hover:bg-[hsl(var(--accent))]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent"></div>
                    Processing...
                  </>
                ) : "Search Buses"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
