import { Landmark, Mountain, Trees } from "lucide-react";

const spots = [
  {
    name: "Tirumala Temple",
    desc: "World-renowned shrine of Lord Venkateswara with special darshan assistance.",
    icon: Landmark,
  },
  {
    name: "Talakona Waterfalls",
    desc: "Pristine forest trek and the tallest waterfall in Andhra Pradesh.",
    icon: Trees,
  },
  {
    name: "Srikalahasti",
    desc: "The sacred Vayu Linga temple known for Rahu-Ketu puja.",
    icon: Landmark,
  },
  {
    name: "Silathoranam & Akasa Ganga",
    desc: "Natural arch and holy streams amidst the Tirumala hills.",
    icon: Mountain,
  },
];

export default function Highlights() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Famous Places Around Tirupati</h2>
          <p className="mt-2 text-gray-600">Curated must-visit spots near Tirupati & Tirumala for a soulful and scenic experience.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {spots.map((s) => (
            <div key={s.name} className="rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <s.icon className="h-6 w-6 text-indigo-600" />
                <h3 className="text-lg font-semibold">{s.name}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
