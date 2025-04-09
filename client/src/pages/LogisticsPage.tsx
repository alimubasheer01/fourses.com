import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LogisticsService from "@/components/services/LogisticsService";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function LogisticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d" 
              alt="Logistics service" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
                <span className="text-[hsl(var(--primary))]">Logistics</span> Solutions
              </h1>
              <p className="text-lg md:text-xl text-white mb-8">
                Reliable package and document delivery services for all your needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Logistics Service Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="-mt-24 relative z-20">
              <LogisticsService />
            </div>
            
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">Our Logistics Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1580674285054-bed31e145f59" 
                      alt="Document delivery" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-3">Document Delivery</h3>
                    <p className="text-neutral-dark mb-4">
                      Fast and secure delivery of important documents, contracts, certificates, and legal papers with tracking.
                    </p>
                    <div className="flex items-center text-sm text-neutral-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-[hsl(var(--primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Delivery in 1-2 business days</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1605745341112-85968b19335b" 
                      alt="Parcel delivery" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-3">Parcel Shipping</h3>
                    <p className="text-neutral-dark mb-4">
                      Reliable shipping for packages of all sizes with flexible delivery options and real-time tracking.
                    </p>
                    <div className="flex items-center text-sm text-neutral-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-[hsl(var(--primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Delivery in 3-5 business days</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1517242810446-cc8951b2be40" 
                      alt="Special cargo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-3">Specialized Logistics</h3>
                    <p className="text-neutral-dark mb-4">
                      Custom solutions for fragile items, large packages, and specialized shipping requirements.
                    </p>
                    <div className="flex items-center text-sm text-neutral-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-[hsl(var(--primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Custom delivery timeframes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-heading font-bold mb-6 text-center">Our Logistics Process</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">1</span>
                  </div>
                  <h4 className="font-bold mb-2">Request Pickup</h4>
                  <p className="text-neutral-dark text-sm">
                    Fill out our online form with your shipping details and schedule a pickup.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">2</span>
                  </div>
                  <h4 className="font-bold mb-2">Package Collection</h4>
                  <p className="text-neutral-dark text-sm">
                    Our courier will collect your package from the specified location.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">3</span>
                  </div>
                  <h4 className="font-bold mb-2">Shipping & Tracking</h4>
                  <p className="text-neutral-dark text-sm">
                    Your package is shipped and you can track its progress in real-time.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">4</span>
                  </div>
                  <h4 className="font-bold mb-2">Delivery & Confirmation</h4>
                  <p className="text-neutral-dark text-sm">
                    The package is delivered to the recipient and you receive delivery confirmation.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-heading font-bold mb-4">Why Choose Our Logistics Service?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Secure Handling</h4>
                      <p className="text-neutral-dark">Your packages are handled with utmost care and security throughout the journey.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Transparent Tracking</h4>
                      <p className="text-neutral-dark">Real-time tracking for both senders and recipients to monitor package status.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Global Coverage</h4>
                      <p className="text-neutral-dark">Extensive network of partners for reliable deliveries both domestically and internationally.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-xl overflow-hidden h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c" 
                  alt="Logistics operations" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-16 bg-primary text-white p-8 rounded-xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2">Need Business Logistics Solutions?</h3>
                  <p className="text-gray-300">
                    We offer custom logistics solutions for businesses with regular shipping needs.
                  </p>
                </div>
                <a href="#" className="mt-4 md:mt-0 bg-[hsl(var(--primary))] text-primary px-6 py-3 rounded-full font-bold hover:bg-[hsl(var(--accent))] transition-colors inline-block">
                  Contact Our Business Team
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
