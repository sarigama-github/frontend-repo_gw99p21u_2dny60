import { Calendar, CheckCircle2, MapPinned } from "lucide-react";

const packages = [
  {
    title: "Tirumala Darshan Express",
    duration: "1 Day",
    highlights: ["Special Entry Darshan", "Sri Padmavathi Ammavari Temple", "Local Sightseeing"],
    price: "₹2,999/person",
  },
  {
    title: "Sacred Hills Getaway",
    duration: "2 Days / 1 Night",
    highlights: ["Tirumala Darshan", "Akasa Ganga & Papavinasanam", "Srikalahasti"],
    price: "₹5,999/person",
  },
  {
    title: "Heritage & Temples Trail",
    duration: "3 Days / 2 Nights",
    highlights: ["Tirumala + Tirupati", "Kanipakam & Golden Temple", "Srikalahasti & Talakona"],
    price: "₹8,499/person",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-700">
            <Calendar className="h-4 w-4" /> Popular Packages
          </div>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Standard Packages for Every Pilgrim</h2>
          <p className="mt-2 text-gray-600">Thoughtfully planned itineraries covering holy sites and scenic spots around Tirupati & Tirumala.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.title} className="rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">{pkg.title}</h3>
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">{pkg.duration}</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-lg font-semibold text-indigo-700">{pkg.price}</span>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                  <MapPinned className="h-4 w-4" /> Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
