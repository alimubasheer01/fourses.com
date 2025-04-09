import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const logisticsSchema = z.object({
  pickupAddress: z.string().min(5, "Please enter pickup address"),
  deliveryAddress: z.string().min(5, "Please enter delivery address"),
  packageType: z.enum(["document", "parcel", "large", "fragile"]),
  weight: z.string().min(1, "Please enter weight"),
  dimensions: z.string().optional(),
  shipmentDate: z.string().min(1, "Please select shipment date"),
  priority: z.enum(["standard", "express", "priority"]),
  specialInstructions: z.string().optional(),
  contactName: z.string().min(2, "Please enter contact name"),
  contactPhone: z.string().min(10, "Please enter a valid phone number"),
});

type LogisticsValues = z.infer<typeof logisticsSchema>;

export default function LogisticsService() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<LogisticsValues>({
    resolver: zodResolver(logisticsSchema),
    defaultValues: {
      pickupAddress: "",
      deliveryAddress: "",
      packageType: "parcel",
      weight: "",
      dimensions: "",
      shipmentDate: "",
      priority: "standard",
      specialInstructions: "",
      contactName: "",
      contactPhone: "",
    },
  });
  
  const onSubmit = async (data: LogisticsValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate user ID (in a real app, this would come from authentication)
      const userId = 1;
      
      await apiRequest('POST', '/api/bookings', {
        userId: userId,
        serviceType: 'logistics',
        status: 'pending',
        details: data,
        totalPrice: calculatePrice(data),
      });
      
      toast({
        title: "Success!",
        description: "Your logistics request has been received. We'll contact you shortly to confirm details.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit logistics request. Please try again.",
        variant: "destructive",
      });
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const calculatePrice = (data: LogisticsValues) => {
    // This is a simplified pricing model for demonstration
    const basePrice = 15;
    const weightValue = parseFloat(data.weight) || 1;
    
    let packageTypeMultiplier = 1;
    switch (data.packageType) {
      case "document":
        packageTypeMultiplier = 0.8;
        break;
      case "parcel":
        packageTypeMultiplier = 1.2;
        break;
      case "large":
        packageTypeMultiplier = 2;
        break;
      case "fragile":
        packageTypeMultiplier = 1.8;
        break;
    }
    
    let priorityMultiplier = 1;
    switch (data.priority) {
      case "express":
        priorityMultiplier = 1.5;
        break;
      case "priority":
        priorityMultiplier = 2.2;
        break;
    }
    
    return Math.round(basePrice * packageTypeMultiplier * priorityMultiplier * Math.max(1, weightValue * 0.5));
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Logistics & Package Delivery</CardTitle>
        <CardDescription>Send packages and documents reliably to any destination</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="pickupAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pickup Address</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter full pickup address" 
                          className="resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="packageType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Package Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select package type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="document">Document</SelectItem>
                          <SelectItem value="parcel">Parcel</SelectItem>
                          <SelectItem value="large">Large Package</SelectItem>
                          <SelectItem value="fragile">Fragile Items</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Weight (kg)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.1" min="0.1" placeholder="e.g., 2.5" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="dimensions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Dimensions (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 30x20x10 cm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="shipmentDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Shipment Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="deliveryAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Delivery Address</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter full delivery address" 
                          className="resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Delivery Priority</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="standard" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Standard (3-5 business days)
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="express" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Express (1-2 business days)
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="priority" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Priority (Same day / Next day)
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contactPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="specialInstructions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Special Instructions (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any special handling instructions or notes" 
                          className="resize-none"
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription>
                        Include any delivery instructions or package handling requirements
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
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
                ) : "Submit Request"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
