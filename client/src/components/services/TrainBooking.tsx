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
import { Switch } from "@/components/ui/switch";

const trainBookingSchema = z.object({
  from: z.string().min(2, "Please enter origin station"),
  to: z.string().min(2, "Please enter destination station"),
  departDate: z.string().min(1, "Please select departure date"),
  passengers: z.string().min(1, "Please select number of passengers"),
  class: z.enum(["standard", "premium", "business", "sleeper"]),
  flexible: z.boolean().default(false),
  meal: z.boolean().default(false),
});

type TrainBookingValues = z.infer<typeof trainBookingSchema>;

export default function TrainBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<TrainBookingValues>({
    resolver: zodResolver(trainBookingSchema),
    defaultValues: {
      from: "",
      to: "",
      departDate: "",
      passengers: "1",
      class: "standard",
      flexible: false,
      meal: false,
    },
  });
  
  const onSubmit = async (data: TrainBookingValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate user ID (in a real app, this would come from authentication)
      const userId = 1;
      
      await apiRequest('POST', '/api/bookings', {
        userId: userId,
        serviceType: 'train',
        status: 'pending',
        details: data,
        totalPrice: calculatePrice(data),
      });
      
      toast({
        title: "Success!",
        description: "Your train booking request has been received.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit train booking. Please try again.",
        variant: "destructive",
      });
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const calculatePrice = (data: TrainBookingValues) => {
    // This is a simplified pricing model for demonstration
    const basePrice = 50;
    const passengerCount = parseInt(data.passengers);
    
    let classMultiplier = 1;
    switch (data.class) {
      case "premium":
        classMultiplier = 1.3;
        break;
      case "business":
        classMultiplier = 1.8;
        break;
      case "sleeper":
        classMultiplier = 2.2;
        break;
    }
    
    let flexibleAddon = data.flexible ? 20 : 0;
    let mealAddon = data.meal ? 15 * passengerCount : 0;
    
    return Math.round((basePrice * passengerCount * classMultiplier) + flexibleAddon + mealAddon);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Book Your Train Journey</CardTitle>
        <CardDescription>Search for train tickets and make reservations</CardDescription>
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
                    <FormLabel>From Station</FormLabel>
                    <FormControl>
                      <Input placeholder="Origin station" {...field} />
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
                    <FormLabel>To Station</FormLabel>
                    <FormControl>
                      <Input placeholder="Destination station" {...field} />
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
                    <FormLabel>Journey Date</FormLabel>
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
              name="class"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Travel Class</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select travel class" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="sleeper">Sleeper</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex flex-col md:flex-row gap-8">
              <FormField
                control={form.control}
                name="flexible"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Flexible Ticket</FormLabel>
                      <FormDescription>
                        Change your journey date for a small fee
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="meal"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">Include Meal</FormLabel>
                      <FormDescription>
                        Add meal service to your journey
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
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
                ) : "Search Trains"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
