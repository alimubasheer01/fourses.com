import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  actionText: string;
  linkTo: string;
}

function ServiceCard({ title, description, icon, image, actionText, linkTo }: ServiceCardProps) {
  return (
    <div className="service-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {icon === "plane" && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              )}
              {icon === "hotel" && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              )}
              {icon === "train" && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              )}
              {icon === "taxi" && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 5h8m-4-9v1m-4 0v1m-6 6v3a2 2 0 002 2h12a2 2 0 002-2v-3M3 7l3-3 3 3M21 7l-3-3-3 3" />
              )}
              {icon === "bus" && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              )}
              {icon === "box" && (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
              )}
            </svg>
          </div>
          <h3 className="ml-3 text-xl font-heading font-bold">{title}</h3>
        </div>
        <p className="text-neutral-dark mb-4">
          {description}
        </p>
        <Link href={linkTo} className="inline-flex items-center font-medium text-primary">
          {actionText}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      title: "Flights",
      description: "Book domestic and international flights at competitive prices with flexible booking options.",
      icon: "plane",
      image: "https://images.unsplash.com/photo-1503146234398-d71f6a914cd4",
      actionText: "Book Now",
      linkTo: "/flights",
    },
    {
      title: "Hotels",
      description: "Find accommodations ranging from luxury resorts to budget-friendly options worldwide.",
      icon: "hotel",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      actionText: "Find Rooms",
      linkTo: "/hotels",
    },
    {
      title: "Trains",
      description: "Book train tickets for scenic routes and efficient travel between major cities.",
      icon: "train",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
      actionText: "Reserve Seats",
      linkTo: "/trains",
    },
    {
      title: "Cabs",
      description: "Get reliable airport transfers and city transportation with our vetted cab partners.",
      icon: "taxi",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
      actionText: "Book Ride",
      linkTo: "/cabs",
    },
    {
      title: "Buses",
      description: "Travel comfortably by bus with options ranging from luxury coaches to economic carriers.",
      icon: "bus",
      image: "https://images.unsplash.com/photo-1569254787280-28caddb28a97",
      actionText: "Find Routes",
      linkTo: "/buses",
    },
    {
      title: "Logistics",
      description: "Send packages and documents with our reliable logistics partners domestically and internationally.",
      icon: "box",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
      actionText: "Ship Now",
      linkTo: "/logistics",
    },
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Travel Services</h2>
          <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
            Experience seamless travel planning with our comprehensive suite of services all in one place.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              actionText={service.actionText}
              linkTo={service.linkTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
