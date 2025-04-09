interface Testimonial {
  content: string;
  author: string;
  package: string;
  avatar: string;
  rating: number;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(testimonial.rating);
    const hasHalfStar = testimonial.rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`star-${i}`} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    
    if (hasHalfStar) {
      stars.push(
        <svg key="half-star" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <div className="flex items-center mb-4">
        <div className="text-[hsl(var(--primary))]">
          {renderStars()}
        </div>
      </div>
      <p className="text-neutral-dark mb-6">
        "{testimonial.content}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
          <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
        </div>
        <div className="ml-4">
          <h4 className="font-heading font-bold">{testimonial.author}</h4>
          <p className="text-sm text-neutral-dark">{testimonial.package}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      content: "The AI assistant made planning our honeymoon so easy! It suggested the perfect hotels based on our preferences and even found activities we wouldn't have discovered otherwise.",
      author: "Sarah M.",
      package: "Bali Honeymoon Package",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      content: "I needed to book a last-minute business trip with complicated logistics. TravelEase handled everything from flights to airport transfers with just a few clicks. Impressed!",
      author: "Robert J.",
      package: "Business Travel Package",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      content: "Coordinating a family trip with three kids is usually a nightmare, but TravelEase made it simple. The logistics tracking feature was particularly helpful for keeping everyone on schedule.",
      author: "Jennifer L.",
      package: "Family Vacation Package",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4.5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Travelers Say</h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Real experiences from travelers who have explored the world with TravelEase.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
