import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const searchFormSchema = z.object({
  from: z.string().min(2, "Please enter origin"),
  to: z.string().min(2, "Please enter destination"),
  depart: z.string().min(1, "Please select departure date"),
  return: z.string().optional(),
  passengers: z.string().min(1, "Please select number of passengers"),
});

type SearchFormValues = z.infer<typeof searchFormSchema>;

export default function SearchSection() {
  const [activeTab, setActiveTab] = useState("flights");
  
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      from: "",
      to: "",
      depart: "",
      return: "",
      passengers: "1 Adult",
    },
  });
  
  const onSubmit = (data: SearchFormValues) => {
    console.log("Search form submitted:", data);
    // Here we would typically navigate to search results or call API
  };
  
  const tabs = [
    { id: "flights", label: "Flights", icon: "plane-departure" },
    { id: "hotels", label: "Hotels", icon: "hotel" },
    { id: "trains", label: "Trains", icon: "train" },
    { id: "cabs", label: "Cabs", icon: "taxi" },
    { id: "buses", label: "Buses", icon: "bus" },
    { id: "logistics", label: "Logistics", icon: "box" },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 -mt-24 relative z-20 max-w-5xl mx-auto">
          <div className="flex flex-wrap mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-2 px-5 rounded-t-lg font-medium ${
                  activeTab === tab.id
                    ? "text-primary border-b-2 border-[hsl(var(--primary))] bg-[hsl(var(--secondary))]"
                    : "text-neutral-dark hover:text-primary"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {tab.icon === "plane-departure" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  )}
                  {tab.icon === "hotel" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  )}
                  {tab.icon === "train" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  )}
                  {tab.icon === "taxi" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 5h8m-4-9v1m-4 0v1m-6 6v3a2 2 0 002 2h12a2 2 0 002-2v-3M3 7l3-3 3 3M21 7l-3-3-3 3" />
                  )}
                  {tab.icon === "bus" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  )}
                  {tab.icon === "box" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
                  )}
                </svg>
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Flight Search Form */}
          {activeTab === "flights" && (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <FormField
                    control={form.control}
                    name="from"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>From</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                              </svg>
                            </span>
                            <Input
                              {...field}
                              placeholder="City or Airport"
                              className="pl-10 py-6"
                            />
                          </div>
                        </FormControl>
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
                          <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                              </svg>
                            </span>
                            <Input
                              {...field}
                              placeholder="City or Airport"
                              className="pl-10 py-6"
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <FormField
                    control={form.control}
                    name="depart"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Depart</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </span>
                            <Input
                              {...field}
                              type="date"
                              className="pl-10 py-6"
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="return"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Return</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-3 flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </span>
                            <Input
                              {...field}
                              type="date"
                              className="pl-10 py-6"
                            />
                          </div>
                        </FormControl>
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
                            <div className="relative">
                              <span className="absolute inset-y-0 left-3 flex items-center z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </span>
                              <SelectTrigger className="pl-10 py-6">
                                <SelectValue placeholder="Select passengers" />
                              </SelectTrigger>
                            </div>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1 Adult">1 Adult</SelectItem>
                            <SelectItem value="2 Adults">2 Adults</SelectItem>
                            <SelectItem value="2 Adults, 1 Child">2 Adults, 1 Child</SelectItem>
                            <SelectItem value="2 Adults, 2 Children">2 Adults, 2 Children</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="text-center pt-2">
                  <Button
                    type="submit"
                    className="bg-[hsl(var(--primary))] text-primary px-8 py-6 rounded-lg font-bold hover:bg-[hsl(var(--accent))] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search Flights
                  </Button>
                </div>
              </form>
            </Form>
          )}
          
          {/* Placeholder for other service forms */}
          {activeTab !== "flights" && (
            <div className="py-4 text-center">
              <p className="text-neutral-dark">
                Please select your {activeTab} search criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
