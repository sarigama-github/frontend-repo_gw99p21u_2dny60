import { Bus, Car, Users } from "lucide-react";

const vehicles = [
  {
    type: "Sedan",
    seats: 4,
    icon: Car,
    features: ["AC", "Bottled Water", "Music System"],
    price: "From ₹12/km",
  },
  {
    type: "SUV",
    seats: 7,
    icon: Car,
    features: ["AC", "Ample Luggage", "Hill-ready"],
    price: "From ₹15/km",
  },
  {
    type: "Traveller Van",
    seats: 12,
    icon: Bus,
    features: ["AC", "Pushback Seats", "Ideal for Groups"],
    price: "From ₹22/km",
  },
  {
    type: "Mini Bus",
    seats: 20,
    icon: Bus,
    features: ["AC", "Spacious", "Tour Manager on Request"],
    price: "From ₹35/km",
  },
];

export default function Rentals() {
  return (
    <section id="rentals" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700">
            <Users className="h-4 w-4" /> Cars & Vans for Group Trips
          </div>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Comfortable Rentals for Every Group Size</h2>
          <p className="mt-2 text-gray-600">Well-maintained vehicles with courteous drivers who know Tirupati & Tirumala routes by heart.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((v) => (
            <div key={v.type} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <v.icon className="h-6 w-6 text-emerald-600" />
                <h3 className="text-lg font-semibold">{v.type}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">Seats: {v.seats}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {v.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-emerald-700">{v.price}</span>
                <a href="#contact" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Enquire</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
