import Hero from "./components/Hero";
import Packages from "./components/Packages";
import Rentals from "./components/Rentals";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple header */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-bold text-indigo-700">Tirupati Trips</a>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <a href="#packages" className="text-gray-700 hover:text-indigo-700">Packages</a>
            <a href="#rentals" className="text-gray-700 hover:text-indigo-700">Rentals</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-700">Contact</a>
          </nav>
          <a href="#contact" className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700">Enquire Now</a>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Packages />
        <Rentals />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="container mx-auto px-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Tirupati Trips. All rights reserved. Crafted with care in Tirupati.
        </div>
      </footer>
    </div>
  );
}

export default App;
