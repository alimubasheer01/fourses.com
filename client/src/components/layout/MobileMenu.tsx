import { Link } from "wouter";

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden bg-primary">
      <div className="px-2 pt-2 pb-4 space-y-3">
        <Link href="/" className="block px-3 py-2 text-white font-medium hover:bg-neutral-dark rounded-md">Home</Link>
        <Link href="/flights" className="block px-3 py-2 text-white font-medium hover:bg-neutral-dark rounded-md">Flights</Link>
        <Link href="/hotels" className="block px-3 py-2 text-white font-medium hover:bg-neutral-dark rounded-md">Hotels</Link>
        <Link href="/trains" className="block px-3 py-2 text-white font-medium hover:bg-neutral-dark rounded-md">Trains</Link>
        <Link href="/cabs" className="block px-3 py-2 text-white font-medium hover:bg-neutral-dark rounded-md">Cabs</Link>
        <Link href="/buses" className="block px-3 py-2 text-white font-medium hover:bg-neutral-dark rounded-md">Buses</Link>
        <Link href="/logistics" className="block px-3 py-2 text-white font-medium hover:bg-neutral-dark rounded-md">Logistics</Link>
        <Link href="/about" className="block px-3 py-2 text-white font-medium hover:bg-neutral-dark rounded-md">About</Link>
        <Link href="/contact" className="block px-3 py-2 text-white font-medium hover:bg-neutral-dark rounded-md">Contact</Link>
        <Link href="/login" className="block px-3 py-2 bg-[hsl(var(--primary))] text-primary font-medium text-center rounded-md">Login</Link>
        <Link href="/signup" className="block px-3 py-2 border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] font-medium text-center rounded-md mt-2">Sign Up</Link>
      </div>
    </div>
  );
}
