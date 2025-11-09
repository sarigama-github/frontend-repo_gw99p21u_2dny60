import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Plan Your Trip to Tirupati</h2>
            <p className="mt-2 text-gray-600">
              Tell us your dates and group size. We’ll recommend the best package or vehicle in minutes.
            </p>
            <div className="mt-6 space-y-4 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-indigo-600" /> +91 90000 00000
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-600" /> bookings@tirupatitrips.com
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-indigo-600" /> Tirupati, Andhra Pradesh
              </div>
            </div>
          </div>

          <form className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500" placeholder="Mobile number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Group Size</label>
                <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500" placeholder="e.g. 8" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Dates</label>
                <input className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500" placeholder="Trip dates" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows="3" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-indigo-500" placeholder="Anything specific you need?"></textarea>
              </div>
            </div>
            <button type="button" className="mt-6 w-full rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">Get Callback</button>
            <p className="mt-3 text-center text-xs text-gray-500">We respond within 15 minutes between 6am–11pm IST.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
