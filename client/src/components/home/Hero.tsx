import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1" 
          alt="Travel destination hero image" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
      <div className="container mx-auto px-4 h-full flex items-center relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4">
            Travel Smarter with <span className="text-[hsl(var(--primary))]">AI-Powered</span> Assistance
          </h1>
          <p className="text-lg md:text-xl text-white mb-8">
            Book flights, hotels, trains, and more with our intelligent booking platform that learns your preferences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#services" className="bg-[hsl(var(--primary))] text-primary font-bold px-8 py-3 rounded-full text-center hover:bg-[hsl(var(--accent))] transition-colors">
              Explore Services
            </Link>
            <Link href="#chat" className="bg-white text-primary font-bold px-8 py-3 rounded-full text-center hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.498 12.25a.75.75 0 01.752-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5zM7.5 5.25a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-4.5z" clipRule="evenodd" />
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-15a7 7 0 110 14 7 7 0 010-14z" />
              </svg>
              Ask Travel AI
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
