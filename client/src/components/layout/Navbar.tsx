import { useState } from "react";
import { Link } from "wouter";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-[hsl(var(--primary))] font-heading font-bold text-2xl">fourses<span className="text-white">.com</span></span>
          </Link>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              type="button" 
              className="text-white hover:text-[hsl(var(--primary))]"
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[hsl(var(--primary))] font-medium">Home</Link>
            <Link href="/flights" className="text-white hover:text-[hsl(var(--primary))] font-medium">Flights</Link>
            <Link href="/hotels" className="text-white hover:text-[hsl(var(--primary))] font-medium">Hotels</Link>
            <Link href="/trains" className="text-white hover:text-[hsl(var(--primary))] font-medium">Trains</Link>
            <Link href="/cabs" className="text-white hover:text-[hsl(var(--primary))] font-medium">Cabs</Link>
            <Link href="/buses" className="text-white hover:text-[hsl(var(--primary))] font-medium">Buses</Link>
            <Link href="/logistics" className="text-white hover:text-[hsl(var(--primary))] font-medium">Logistics</Link>
            <Link href="/about" className="text-white hover:text-[hsl(var(--primary))] font-medium">About</Link>
            <Link href="/contact" className="text-white hover:text-[hsl(var(--primary))] font-medium">Contact</Link>
          </div>
          
          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-[hsl(var(--primary))]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link href="/login" className="bg-[hsl(var(--primary))] text-primary px-4 py-2 rounded-full font-medium hover:bg-[hsl(var(--accent))] transition-colors">
              Login
            </Link>
            <Link href="/signup" className="border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] px-4 py-1.5 rounded-full font-medium hover:bg-[hsl(var(--primary))] hover:text-primary transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} />
    </nav>
  );
}
