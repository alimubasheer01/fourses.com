import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CabBooking from "@/components/services/CabBooking";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function CabsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2" 
              alt="Taxi service" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
                Reliable <span className="text-[hsl(var(--primary))]">Cab</span> Services
              </h1>
              <p className="text-lg md:text-xl text-white mb-8">
                Book safe and comfortable rides with our trusted cab partners.
              </p>
            </div>
          </div>
        </section>
        
        {/* Cab Booking Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="-mt-24 relative z-20">
              <CabBooking />
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Our Cab Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">Economy</h3>
                  <p className="text-neutral-dark text-sm">
                    Affordable rides for everyday travel needs. Compact cars for 1-3 passengers.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">Standard</h3>
                  <p className="text-neutral-dark text-sm">
                    Comfortable sedans for up to 4 passengers with extra luggage space.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">Executive</h3>
                  <p className="text-neutral-dark text-sm">
                    Premium vehicles with professional drivers for business travel.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-heading font-bold mb-2">SUV/Minivan</h3>
                  <p className="text-neutral-dark text-sm">
                    Spacious vehicles for groups up to 7 passengers or extra luggage.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-heading font-bold mb-4">Why Choose Our Cab Service?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Safety First</h4>
                      <p className="text-neutral-dark">All drivers undergo thorough background checks and vehicles are regularly inspected for safety.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V9a2 2 0 00-2-2m2 4v4a2 2 0 104 0v-1m-4-3H9m2 0h4m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Transparent Pricing</h4>
                      <p className="text-neutral-dark">No hidden fees or surge pricing. Get a fair and accurate quote before you book.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Reliable Service</h4>
                      <p className="text-neutral-dark">Punctual pickups and professional drivers ensure you reach your destination on time.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-xl overflow-hidden h-64 md:h-80">
                <img 
                  src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e" 
                  alt="Professional cab service" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-16 bg-primary text-white p-8 rounded-xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">Need Special Transportation?</h3>
                  <p className="text-gray-300">
                    We offer customized cab services for special events, airport transfers, and corporate travel.
                  </p>
                </div>
                <a href="#" className="mt-4 md:mt-0 bg-[hsl(var(--primary))] text-primary px-6 py-3 rounded-full font-bold hover:bg-[hsl(var(--accent))] transition-colors inline-block">
                  Contact for Custom Quote
                </a>
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
