import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <img 
              src="https://images.unsplash.com/photo-1513553404607-988bf2703777" 
              alt="Travel agency team" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
          <div className="container mx-auto px-4 h-full flex items-center relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-4">
                About <span className="text-[hsl(var(--primary))]">TravelEase</span>
              </h1>
              <p className="text-lg md:text-xl text-white mb-8">
                Your AI-powered travel companion for seamless journey planning.
              </p>
            </div>
          </div>
        </section>
        
        {/* About Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Story</h2>
                <div className="w-16 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
                <p className="text-lg text-neutral-dark">
                  Founded in 2020, TravelEase was born out of a simple vision: to make travel planning smarter, simpler, and more personalized through the power of AI and technology.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
                  <p className="text-neutral-dark mb-4">
                    At TravelEase, we're on a mission to revolutionize the way people plan and book travel. We believe that technology should simplify the travel experience, not complicate it.
                  </p>
                  <p className="text-neutral-dark mb-4">
                    By integrating artificial intelligence with human expertise, we've created a platform that learns from your preferences, anticipates your needs, and delivers personalized travel solutions that evolve with you.
                  </p>
                  <p className="text-neutral-dark">
                    Whether you're a frequent business traveler, a family planning a vacation, or an adventurer exploring new destinations, our goal is to be your trusted travel companion every step of the way.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                    alt="TravelEase team" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="mb-16">
                <h3 className="text-2xl font-heading font-bold mb-6 text-center">What Sets Us Apart</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-heading font-bold mb-2">AI-Powered Solutions</h4>
                    <p className="text-neutral-dark">
                      Our intelligent AI assistant learns your preferences and provides tailored recommendations that improve with each interaction.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-heading font-bold mb-2">All-in-One Platform</h4>
                    <p className="text-neutral-dark">
                      From flights and hotels to trains and logistics, manage all your travel needs through a single, unified platform.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-heading font-bold mb-2">Human Expertise</h4>
                    <p className="text-neutral-dark">
                      Our AI is backed by a team of travel experts who ensure you receive the best service and support when you need it.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-16">
                <h3 className="text-2xl font-heading font-bold mb-6 text-center">Our Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h4 className="ml-3 text-xl font-heading font-bold">Trust & Transparency</h4>
                    </div>
                    <p className="text-neutral-dark">
                      We believe in transparent pricing, clear communication, and building long-term relationships with our customers based on trust.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="ml-3 text-xl font-heading font-bold">Innovation</h4>
                    </div>
                    <p className="text-neutral-dark">
                      We continuously push the boundaries of what's possible in travel technology to provide our users with cutting-edge solutions.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="ml-3 text-xl font-heading font-bold">Customer-Centricity</h4>
                    </div>
                    <p className="text-neutral-dark">
                      Our customers are at the heart of everything we do. We design all our services with your needs and satisfaction as our top priority.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))] flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="ml-3 text-xl font-heading font-bold">Sustainability</h4>
                    </div>
                    <p className="text-neutral-dark">
                      We're committed to promoting responsible travel and minimizing the environmental impact of our operations and the journeys we help arrange.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-heading font-bold mb-6">Meet Our Leadership Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src="https://randomuser.me/api/portraits/men/32.jpg" 
                        alt="CEO portrait" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-heading font-bold mb-1">Robert Chen</h4>
                    <p className="text-neutral-dark mb-3">CEO & Co-Founder</p>
                    <p className="text-sm text-neutral-dark">
                      With 15+ years of experience in the travel industry, Robert leads our vision to transform travel planning with AI.
                    </p>
                  </div>
                  
                  <div>
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src="https://randomuser.me/api/portraits/women/44.jpg" 
                        alt="CTO portrait" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-heading font-bold mb-1">Sarah Johnson</h4>
                    <p className="text-neutral-dark mb-3">CTO & Co-Founder</p>
                    <p className="text-sm text-neutral-dark">
                      A pioneer in AI technology, Sarah oversees our tech development and leads innovation in our travel solutions.
                    </p>
                  </div>
                  
                  <div>
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src="https://randomuser.me/api/portraits/men/68.jpg" 
                        alt="COO portrait" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-heading font-bold mb-1">Michael Rodriguez</h4>
                    <p className="text-neutral-dark mb-3">Chief Operations Officer</p>
                    <p className="text-sm text-neutral-dark">
                      Michael ensures our global operations run smoothly and our partners deliver exceptional service to our customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">TravelEase by the Numbers</h2>
              <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
                Our impact and growth since launching in 2020
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">1M+</div>
                <p className="text-neutral-dark">Happy Travelers</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">150+</div>
                <p className="text-neutral-dark">Countries Served</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">4.8/5</div>
                <p className="text-neutral-dark">Customer Satisfaction</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow text-center">
                <div className="text-4xl font-heading font-bold text-primary mb-2">24/7</div>
                <p className="text-neutral-dark">Support Available</p>
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
