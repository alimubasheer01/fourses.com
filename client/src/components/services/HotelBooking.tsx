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

const hotelBookingSchema = z.object({
  location: z.string().min(2, "Please enter a location"),
  checkIn: z.string().min(1, "Please select check-in date"),
  checkOut: z.string().min(1, "Please select check-out date"),
  rooms: z.string().min(1, "Please select number of rooms"),
  adults: z.string().min(1, "Please select number of adults"),
  children: z.string().min(1, "Please select number of children"),
  roomType: z.enum(["standard", "deluxe", "suite", "executive"]),
  amenities: z.array(z.string()).optional(),
});

type HotelBookingValues = z.infer<typeof hotelBookingSchema>;

export default function HotelBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<HotelBookingValues>({
    resolver: zodResolver(hotelBookingSchema),
    defaultValues: {
      location: "",
      checkIn: "",
      checkOut: "",
      rooms: "1",
      adults: "2",
      children: "0",
      roomType: "standard",
      amenities: [],
    },
  });
  
  const onSubmit = async (data: HotelBookingValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate user ID (in a real app, this would come from authentication)
      const userId = 1;
      
      await apiRequest('POST', '/api/bookings', {
        userId: userId,
        serviceType: 'hotel',
        status: 'pending',
        details: data,
        totalPrice: calculatePrice(data),
      });
      
      toast({
        title: "Success!",
        description: "Your hotel booking request has been received.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit hotel booking. Please try again.",
        variant: "destructive",
      });
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const calculatePrice = (data: HotelBookingValues) => {
    // This is a simplified pricing model for demonstration
    const basePrice = 150;
    const roomCount = parseInt(data.rooms);
    
    let roomMultiplier = 1;
    switch (data.roomType) {
      case "deluxe":
        roomMultiplier = 1.5;
        break;
      case "suite":
        roomMultiplier = 2.5;
        break;
      case "executive":
        roomMultiplier = 3;
        break;
    }
    
    // Calculate number of nights
    const checkIn = new Date(data.checkIn);
    const checkOut = new Date(data.checkOut);
    const nights = Math.max(1, Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)));
    
    return Math.round(basePrice * roomCount * roomMultiplier * nights);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Book Your Hotel</CardTitle>
        <CardDescription>Find the perfect accommodation for your trip</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination</FormLabel>
                  <FormControl>
                    <Input placeholder="City, region, or hotel name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                control={form.control}
                name="checkIn"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Check-in Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="checkOut"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Check-out Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <FormField
                control={form.control}
                name="rooms"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Rooms</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Number of rooms" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Room" : "Rooms"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="adults"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Adults</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Number of adults" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Adult" : "Adults"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="children"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Children</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Number of children" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[0, 1, 2, 3, 4].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Child" : "Children"}
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
              name="roomType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="standard">Standard Room</SelectItem>
                      <SelectItem value="deluxe">Deluxe Room</SelectItem>
                      <SelectItem value="suite">Suite</SelectItem>
                      <SelectItem value="executive">Executive Suite</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="amenities"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel>Amenities</FormLabel>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {["wifi", "breakfast", "pool", "gym", "parking", "spa"].map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <Checkbox
                          id={`amenity-${amenity}`}
                          onCheckedChange={(checked) => {
                            const currentValues = form.getValues("amenities") || [];
                            const newValues = checked
                              ? [...currentValues, amenity]
                              : currentValues.filter((value) => value !== amenity);
                            form.setValue("amenities", newValues, { shouldValidate: true });
                          }}
                        />
                        <label
                          htmlFor={`amenity-${amenity}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                        </label>
                      </div>
                    ))}
                  </div>
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
                ) : "Search Hotels"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
