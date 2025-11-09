import { MapPin, Phone, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-600 via-indigo-500 to-indigo-400 text-white">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 600">
          <defs>
            <linearGradient id="grad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g fill="url(#grad)">
            <circle cx="100" cy="120" r="80" />
            <circle cx="700" cy="60" r="100" />
            <circle cx="650" cy="500" r="120" />
            <circle cx="200" cy="480" r="90" />
          </g>
        </svg>
      </div>
      <div className="container mx-auto px-6 pt-20 pb-28">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <MapPin className="h-4 w-4" />
            Tirupati & Tirumala Specialist
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Discover Holy Hills and Hidden Gems around Tirupati
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-indigo-50">
            From darshan-ready standard packages to comfortable car and van rentals for group trips—
            we make your Tirupati & Tirumala journey seamless, spiritual, and scenic.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#packages" className="rounded-lg bg-white px-6 py-3 font-medium text-indigo-700 shadow hover:bg-indigo-50">
              View Packages
            </a>
            <a href="#rentals" className="rounded-lg border border-white/70 px-6 py-3 font-medium text-white hover:bg-white/10">
              Rent Cars & Vans
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-indigo-100">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-300" />
              4.9 Rated Service
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              24x7 Assistance
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
