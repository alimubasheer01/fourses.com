import { useQuery } from "@tanstack/react-query";

interface Destination {
  id: number;
  name: string;
  country: string;
  description: string;
  rating: number;
  imageUrl: string;
  popularTag: string;
  recommendedDays: string;
  priceFrom: number;
  featured: boolean;
}

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={destination.imageUrl} 
          alt={`${destination.name}, ${destination.country}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-white text-2xl font-heading font-bold">{destination.name}, {destination.country}</h3>
          <div className="flex items-center text-white/90 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[hsl(var(--primary))]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="ml-1">{(destination.rating / 10).toFixed(1)}</span>
            <span className="mx-2">•</span>
            <span>{destination.popularTag}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm text-neutral-dark">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{destination.recommendedDays} recommended</span>
          </div>
          <div className="text-sm font-medium text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span>From ${destination.priceFrom}</span>
          </div>
        </div>
        <a href="#" className="block w-full bg-primary text-white text-center py-3 rounded-lg hover:bg-neutral-dark transition-colors">
          View Packages
        </a>
      </div>
    </div>
  );
}

export default function DestinationsSection() {
  const { data: destinations, isLoading, error } = useQuery<Destination[]>({
    queryKey: ['/api/destinations/featured'],
  });

  return (
    <section id="destinations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Popular Destinations</h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Explore trending destinations loved by travelers around the world.
          </p>
        </div>
        
        {isLoading ? (
          <div className="text-center py-8">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
            <p className="mt-2 text-neutral-dark">Loading destinations...</p>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">
            <p>Error loading destinations. Please try again later.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations?.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
            
            <div className="text-center mt-10">
              <a href="#" className="inline-flex items-center bg-[hsl(var(--primary))] text-primary px-8 py-3 rounded-full font-bold hover:bg-[hsl(var(--accent))] transition-colors">
                Explore All Destinations
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
