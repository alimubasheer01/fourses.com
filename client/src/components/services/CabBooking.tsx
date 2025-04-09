import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const cabBookingSchema = z.object({
  pickup: z.string().min(2, "Please enter pickup location"),
  dropoff: z.string().min(2, "Please enter drop-off location"),
  date: z.string().min(1, "Please select date"),
  time: z.string().min(1, "Please select time"),
  cabType: z.enum(["economy", "standard", "executive", "suv"]),
  passengers: z.string().min(1, "Please select number of passengers"),
  requirement: z.enum(["asap", "schedule"]),
  notes: z.string().optional(),
});

type CabBookingValues = z.infer<typeof cabBookingSchema>;

export default function CabBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<CabBookingValues>({
    resolver: zodResolver(cabBookingSchema),
    defaultValues: {
      pickup: "",
      dropoff: "",
      date: "",
      time: "",
      cabType: "standard",
      passengers: "1",
      requirement: "asap",
      notes: "",
    },
  });
  
  const onSubmit = async (data: CabBookingValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate user ID (in a real app, this would come from authentication)
      const userId = 1;
      
      await apiRequest('POST', '/api/bookings', {
        userId: userId,
        serviceType: 'cab',
        status: 'pending',
        details: data,
        totalPrice: calculatePrice(data),
      });
      
      toast({
        title: "Success!",
        description: "Your cab booking request has been received.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit cab booking. Please try again.",
        variant: "destructive",
      });
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const calculatePrice = (data: CabBookingValues) => {
    // This is a simplified pricing model for demonstration
    const basePrice = 25;
    
    let typeMultiplier = 1;
    switch (data.cabType) {
      case "standard":
        typeMultiplier = 1.3;
        break;
      case "executive":
        typeMultiplier = 2;
        break;
      case "suv":
        typeMultiplier = 2.5;
        break;
    }
    
    // Additional cost for more passengers
    const passengerCount = parseInt(data.passengers);
    const passengerMultiplier = passengerCount > 2 ? 1 + ((passengerCount - 2) * 0.1) : 1;
    
    // Additional cost for immediate pickup
    const urgencyFactor = data.requirement === "asap" ? 1.2 : 1;
    
    return Math.round(basePrice * typeMultiplier * passengerMultiplier * urgencyFactor);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Book a Cab</CardTitle>
        <CardDescription>Get reliable transportation for your travel needs</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="requirement"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>When do you need the cab?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="asap" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          As soon as possible
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="schedule" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Schedule for later
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                control={form.control}
                name="pickup"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Pickup Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter address or location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="dropoff"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Drop-off Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter address or location" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {form.watch("requirement") === "schedule" && (
              <div className="flex flex-col md:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            
            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                control={form.control}
                name="cabType"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Cab Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select cab type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="economy">Economy</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="executive">Executive</SelectItem>
                        <SelectItem value="suv">SUV/Minivan</SelectItem>
                      </SelectContent>
                    </Select>
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
            
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Instructions (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Any special requirements or notes for the driver" {...field} />
                  </FormControl>
                  <FormDescription>
                    Let us know if you need child seats, luggage assistance, etc.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
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
                ) : "Book Cab"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
