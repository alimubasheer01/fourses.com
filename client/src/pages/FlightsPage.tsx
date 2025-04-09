import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FlightBooking from "@/components/services/FlightBooking";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function FlightsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <img 
              src="https://images.unsplash.com/photo-1503146234398-d71f6a914cd4" 
              alt="Flight booking" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
                Book Your <span className="text-[hsl(var(--primary))]">Flights</span> with Ease
              </h1>
              <p className="text-lg md:text-xl text-white mb-8">
                Find the best deals on domestic and international flights with our easy booking system.
              </p>
            </div>
          </div>
        </section>
        
        {/* Flight Booking Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="-mt-24 relative z-20">
              <FlightBooking />
            </div>
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Why Book Flights with TravelEase?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">Best Price Guarantee</h3>
                  <p className="text-neutral-dark">
                    We compare prices from hundreds of airlines to find you the best deals on flights.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">No Hidden Fees</h3>
                  <p className="text-neutral-dark">
                    Transparent pricing with no hidden charges or surprise fees during booking.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2">Flexible Changes</h3>
                  <p className="text-neutral-dark">
                    Need to make changes? Many of our flight tickets come with flexible change options.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-heading font-bold mb-4">Travel Tips for Flyers</h3>
              <ul className="space-y-2 list-disc list-inside text-neutral-dark">
                <li>Book your flights 2-3 months in advance for the best prices</li>
                <li>Consider flexible dates to find cheaper flights</li>
                <li>Tuesday and Wednesday are often the cheapest days to fly</li>
                <li>Check baggage allowances before you book to avoid extra fees</li>
                <li>Sign up for price alerts to get notified when prices drop</li>
              </ul>
            </div>
          </div>
        </section>
        
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
