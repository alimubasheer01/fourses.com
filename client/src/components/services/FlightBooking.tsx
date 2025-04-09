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

const flightBookingSchema = z.object({
  from: z.string().min(2, "Please enter origin"),
  to: z.string().min(2, "Please enter destination"),
  departDate: z.string().min(1, "Please select departure date"),
  returnDate: z.string().optional(),
  passengers: z.string().min(1, "Please select number of passengers"),
  tripType: z.enum(["oneway", "roundtrip"]),
  cabinClass: z.enum(["economy", "premium_economy", "business", "first"]),
});

type FlightBookingValues = z.infer<typeof flightBookingSchema>;

export default function FlightBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FlightBookingValues>({
    resolver: zodResolver(flightBookingSchema),
    defaultValues: {
      from: "",
      to: "",
      departDate: "",
      returnDate: "",
      passengers: "1",
      tripType: "roundtrip",
      cabinClass: "economy",
    },
  });
  
  const onSubmit = async (data: FlightBookingValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate user ID (in a real app, this would come from authentication)
      const userId = 1;
      
      await apiRequest('POST', '/api/bookings', {
        userId: userId,
        serviceType: 'flight',
        status: 'pending',
        details: data,
        totalPrice: calculatePrice(data),
      });
      
      toast({
        title: "Success!",
        description: "Your flight booking request has been received.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit flight booking. Please try again.",
        variant: "destructive",
      });
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const calculatePrice = (data: FlightBookingValues) => {
    // This is a simplified pricing model for demonstration
    const basePrice = 300;
    const passengerCount = parseInt(data.passengers);
    
    let classMultiplier = 1;
    switch (data.cabinClass) {
      case "premium_economy":
        classMultiplier = 1.5;
        break;
      case "business":
        classMultiplier = 2.5;
        break;
      case "first":
        classMultiplier = 4;
        break;
    }
    
    let tripMultiplier = data.tripType === "roundtrip" ? 1.8 : 1;
    
    return Math.round(basePrice * passengerCount * classMultiplier * tripMultiplier);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Book Your Flight</CardTitle>
        <CardDescription>Fill in the details to search for available flights</CardDescription>
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
                      <Input placeholder="City or Airport" {...field} />
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
                      <Input placeholder="City or Airport" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                control={form.control}
                name="tripType"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Trip Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select trip type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="oneway">One Way</SelectItem>
                        <SelectItem value="roundtrip">Round Trip</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="cabinClass"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Cabin Class</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select cabin class" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="economy">Economy</SelectItem>
                        <SelectItem value="premium_economy">Premium Economy</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="first">First Class</SelectItem>
                      </SelectContent>
                    </Select>
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
              
              {form.watch("tripType") === "roundtrip" && (
                <FormField
                  control={form.control}
                  name="returnDate"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Return Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              
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
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
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
                ) : "Search Flights"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
