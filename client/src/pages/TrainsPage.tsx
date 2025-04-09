import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TrainBooking from "@/components/services/TrainBooking";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function TrainsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <img 
              src="https://images.unsplash.com/photo-1474487548417-781cb71495f3" 
              alt="Train cabin" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
                Explore by <span className="text-[hsl(var(--primary))]">Train</span>
              </h1>
              <p className="text-lg md:text-xl text-white mb-8">
                Book train tickets for comfortable and scenic journeys between major cities.
              </p>
            </div>
          </div>
        </section>
        
        {/* Train Booking Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="-mt-24 relative z-20">
              <TrainBooking />
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Why Travel by Train?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">Speed & Efficiency</h3>
                  <p className="text-neutral-dark">
                    Avoid traffic and enjoy direct connections between city centers, often faster than driving.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">Scenic Routes</h3>
                  <p className="text-neutral-dark">
                    Enjoy breathtaking landscapes and views that aren't accessible by other modes of transport.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">Cost-Effective</h3>
                  <p className="text-neutral-dark">
                    Train travel is often more economical than flying or driving, especially for shorter distances.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-heading font-bold mb-4">Train Travel Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Before Your Journey</h4>
                  <ul className="space-y-1 list-disc list-inside text-neutral-dark">
                    <li>Book tickets in advance for better prices</li>
                    <li>Check luggage allowance and restrictions</li>
                    <li>Arrive at the station at least 30 minutes before departure</li>
                    <li>Download entertainment in advance if WiFi is unavailable</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">During Your Journey</h4>
                  <ul className="space-y-1 list-disc list-inside text-neutral-dark">
                    <li>Keep your ticket accessible for inspections</li>
                    <li>Respect quiet zones for a peaceful journey</li>
                    <li>Secure your belongings, especially when leaving your seat</li>
                    <li>Check the estimated arrival time for potential delays</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <img 
                  src="https://images.unsplash.com/photo-1527201937630-1ba35f5d607f" 
                  alt="Modern train interior" 
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-heading font-bold mb-4">Experience Modern Train Travel</h3>
                  <p className="text-neutral-dark mb-6">
                    Today's trains offer comfort and convenience with features like:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[hsl(var(--primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Spacious seating with extra legroom</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[hsl(var(--primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Power outlets for charging devices</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[hsl(var(--primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>WiFi connectivity on most routes</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[hsl(var(--primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Dining cars or food service</span>
                    </li>
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
