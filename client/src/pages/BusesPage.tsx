import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BusBooking from "@/components/services/BusBooking";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function BusesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <img 
              src="https://images.unsplash.com/photo-1569254787280-28caddb28a97" 
              alt="Tourist bus" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
                Travel by <span className="text-[hsl(var(--primary))]">Bus</span>
              </h1>
              <p className="text-lg md:text-xl text-white mb-8">
                Affordable and comfortable bus transportation for your journey.
              </p>
            </div>
          </div>
        </section>
        
        {/* Bus Booking Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="-mt-24 relative z-20">
              <BusBooking />
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Our Bus Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">Standard Bus</h3>
                  <p className="text-neutral-dark">
                    Comfortable buses with standard amenities for cost-effective travel between major cities.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">Sleeper Bus</h3>
                  <p className="text-neutral-dark">
                    Overnight buses with comfortable sleeping berths for long-distance journeys.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">Luxury Bus</h3>
                  <p className="text-neutral-dark">
                    Premium buses with extra legroom, entertainment systems, and enhanced comfort.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">Express Bus</h3>
                  <p className="text-neutral-dark">
                    Fast, direct services with minimal stops for quicker journeys between cities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-xl overflow-hidden h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957" 
                  alt="Bus interior" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-bold mb-4">Why Choose Bus Travel?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Cost-Effective Travel</h4>
                      <p className="text-neutral-dark">Bus travel is often the most economical option, especially for group travel.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Extensive Network</h4>
                      <p className="text-neutral-dark">Our bus services reach even remote destinations not served by trains or planes.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Reduced Environmental Impact</h4>
                      <p className="text-neutral-dark">Bus travel produces fewer carbon emissions per passenger compared to cars or flights.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-16 bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-heading font-bold mb-4">Bus Travel Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Before Your Journey</h4>
                  <ul className="space-y-1 list-disc list-inside text-neutral-dark">
                    <li>Reserve seats in advance during peak travel seasons</li>
                    <li>Check luggage allowance and restrictions</li>
                    <li>Arrive at the bus station at least 30 minutes before departure</li>
                    <li>Download entertainment or bring reading material for the journey</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">During Your Journey</h4>
                  <ul className="space-y-1 list-disc list-inside text-neutral-dark">
                    <li>Keep your ticket and ID accessible for inspections</li>
                    <li>Bring a small pillow and blanket for comfort on longer journeys</li>
                    <li>Keep valuables secure and with you at all times</li>
                    <li>Stay hydrated but avoid excessive liquids to minimize rest stops</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
