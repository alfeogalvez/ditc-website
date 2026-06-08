"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans scroll-smooth">
      
      {/* 1. PROFESSIONAL HEADER / NAVIGATION (1.5x SIZE & FIXED ALIGNMENT) */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/95">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo & Stylized Name Container */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 overflow-hidden rounded-full border border-gray-100 shadow-sm bg-gray-50 flex items-center justify-center">
              <Image 
                src="/logo.jpg" 
                alt="DITC Davao International Transport Cooperative Logo" 
                fill
                sizes="80px"
                className="object-cover"
                priority
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#166534] to-[#1d4ed8] tracking-tighter drop-shadow-sm leading-none">
                DITC
              </span>
              <span className="text-[9px] sm:text-[11px] lg:text-xs font-bold text-gray-500 uppercase tracking-widest mt-1 max-w-[180px] sm:max-w-[250px] leading-tight">
                Davao International Transport Cooperative
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8 text-sm xl:text-base font-semibold text-gray-600">
            <a href="#fleet" className="hover:text-[#166534] transition-colors">Our Fleet</a>
            <a href="#drivers" className="hover:text-[#166534] transition-colors">Our Drivers</a>
            <a href="#services" className="hover:text-[#166534] transition-colors">Why DITC?</a>
            <a href="#requirements" className="hover:text-[#166534] transition-colors">Requirements</a>
            <a href="#contact" className="hover:text-[#166534] transition-colors">Contact Us</a>
          </div>

          {/* Call to Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 shrink-0">
            <div className="hidden md:flex flex-col items-end gap-0.5">
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Hotline:</span>
                <a href="tel:09123456789" className="text-sm xl:text-base font-bold text-gray-800 hover:text-[#166534] transition-colors leading-none">
                  0912 345 6789
                </a>
            </div>
            <button className="bg-gradient-to-r from-[#166534] to-[#14532d] text-white px-5 py-2.5 sm:px-7 sm:py-3 rounded-full text-sm font-bold hover:shadow-lg hover:scale-105 transition-all duration-200">
              Book Now
            </button>
            
            {/* Hamburger Button (Visible only on mobile/tablet) */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-2xl text-gray-800 p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? '✖' : '☰'}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg py-4 px-6 flex flex-col gap-4 text-base font-bold text-gray-800">
            <a href="#fleet" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#166534]">Our Fleet</a>
            <a href="#drivers" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#166534]">Our Drivers</a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#166534]">Why DITC?</a>
            <a href="#requirements" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#166534]">Requirements</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#166534]">Contact Us</a>
            <hr className="border-gray-100" />
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase tracking-wider">Hotline</span>
              <a href="tel:09123456789" className="text-lg text-[#166534]">0912 345 6789</a>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28 px-6 border-b">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 border border-blue-100">
              DOTr & LTO Accredited Cooperative
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-950 leading-tight tracking-tighter mb-6">
              Premium Car & Van Rentals in Davao City
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Serving tourists, local businesses, and corporate partners across Mindanao. Drive yourself or hire our certified Route Specialists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#fleet" className="bg-[#166534] text-white text-center px-10 py-4 rounded-xl text-lg font-bold shadow-lg hover:bg-[#14532d] transition transform hover:-translate-y-0.5">
                Rent a Vehicle
              </a>
              <a href="#drivers" className="bg-white border-2 border-gray-300 text-gray-900 text-center px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition">
                Hire a Chauffeur
              </a>
            </div>
          </div>

          {/* REAL HERO IMAGE */}
          <div className="relative h-96 md:h-[450px] rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
            <Image 
              src="/hero-image.jpg" 
              alt="DITC Passenger Van Fleet in Davao City" 
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 3. VEHICLE FLEET */}
      <section id="fleet" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-950 tracking-tight">Our Diverse Vehicle Fleet</h2>
            <a href="#" className="text-[#166534] font-semibold flex items-center gap-1.5 hover:underline">
              View Full Fleet →
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Vehicle Card 1 */}
            <div className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group">
              <div className="relative h-56 bg-gray-100 flex items-center justify-center border-b border-gray-100 overflow-hidden">
                <Image src="/fleet-van.jpg" alt="12-Seater Grandia Tourer" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-950 tracking-tight">Grandia Tourer</h4>
                <p className="text-sm text-gray-500 mb-5">Fits 12 Guests + 4 Bags</p>
                <div className="flex justify-between items-end gap-3">
                  <span className="text-2xl font-bold text-[#166534]">₱5,XXX / day</span>
                  <button className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-700 transition">View Details</button>
                </div>
              </div>
            </div>

            {/* Vehicle Card 2 */}
            <div className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group">
              <div className="relative h-56 bg-gray-100 flex items-center justify-center border-b border-gray-100 overflow-hidden">
                <Image src="/fleet-suv.jpg" alt="Toyota Fortuner Premium SUV" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-950 tracking-tight">Toyota Fortuner</h4>
                <p className="text-sm text-gray-500 mb-5">Fits 7 Guests + 2 Bags</p>
                <div className="flex justify-between items-end gap-3">
                  <span className="text-2xl font-bold text-[#166534]">₱4,XXX / day</span>
                  <button className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-700 transition">View Details</button>
                </div>
              </div>
            </div>

            {/* Vehicle Card 3 */}
            <div className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group">
              <div className="relative h-56 bg-gray-100 flex items-center justify-center border-b border-gray-100 overflow-hidden">
                <Image src="/fleet-sedan.jpg" alt="Toyota Vios Economy Sedan" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-950 tracking-tight">Toyota Vios</h4>
                <p className="text-sm text-gray-500 mb-5">Fits 4 Guests + 2 Bags</p>
                <div className="flex justify-between items-end gap-3">
                  <span className="text-2xl font-bold text-[#166534]">₱2,XXX / day</span>
                  <button className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-700 transition">View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MEET OUR DRIVERS */}
      <section id="drivers" className="py-24 px-6 bg-white border-t">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Our Chauffeur Team</span>
            <h2 className="text-4xl font-extrabold text-gray-950 mt-2 mb-5 tracking-tight">Meet Our Professional Drivers</h2>
            <p className="text-lg text-gray-600 leading-relaxed">Dedicated to your safety, comfort, and providing an exceptional travel experience across Mindanao.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Driver Profile 1 */}
            <div className="border border-gray-100 p-8 rounded-3xl bg-gray-50 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative w-36 h-36 overflow-hidden rounded-full border-2 border-white shadow-md bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                <Image src="/driver-manny.jpg" alt="Manny Cruz" fill sizes="144px" className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-1 tracking-tight">Manny Cruz</h3>
              <p className="text-sm text-[#166534] font-semibold mb-4 tracking-wide uppercase group-hover:text-[#1d4ed8] transition-colors">Mindanao Route Specialist</p>
              <p className="text-gray-600 text-sm text-center leading-relaxed max-w-sm mb-6 flex-grow">
                With over 10 years of accident-free professional driving across Mindanao, Manny is known for meticulous route knowledge and exceptional passenger safety.
              </p>
              <a 
                href="https://m.me/MANNY_USERNAME_HERE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#0084FF] text-white px-4 py-3 rounded-xl text-sm font-bold flex justify-center items-center gap-2 hover:bg-[#0072dc] transition-colors shadow-sm"
              >
                <span>⚡</span> Chat with Manny
              </a>
            </div>
            
            {/* Driver Profile 2 */}
            <div className="border border-gray-100 p-8 rounded-3xl bg-gray-50 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative w-36 h-36 overflow-hidden rounded-full border-2 border-white shadow-md bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                <Image src="/driver-sarah.jpg" alt="Sarah Lim" fill sizes="144px" className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-1 tracking-tight">Sarah Lim</h3>
              <p className="text-sm text-[#166534] font-semibold mb-4 tracking-wide uppercase group-hover:text-[#1d4ed8] transition-colors">DOT Accredited</p>
              <p className="text-gray-600 text-sm text-center leading-relaxed max-w-sm mb-6 flex-grow">
                Fully vetted, LTO-certified, and NCII (Driving) accredited. Committed to professional courtesy and a smooth, secure journey for every corporate or private client.
              </p>
              <a 
                href="https://m.me/SARAH_USERNAME_HERE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#0084FF] text-white px-4 py-3 rounded-xl text-sm font-bold flex justify-center items-center gap-2 hover:bg-[#0072dc] transition-colors shadow-sm"
              >
                <span>⚡</span> Chat with Sarah
              </a>
            </div>
            
            {/* Driver Profile 3 */}
            <div className="border border-gray-100 p-8 rounded-3xl bg-gray-50 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative w-36 h-36 overflow-hidden rounded-full border-2 border-white shadow-md bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200">
                <Image src="/driver-juan.jpg" alt="Juan Dela Cruz" fill sizes="144px" className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-1 tracking-tight">Juan Dela Cruz</h3>
              <p className="text-sm text-[#166534] font-semibold mb-4 tracking-wide uppercase group-hover:text-[#1d4ed8] transition-colors">Customer Service Excellence</p>
              <p className="text-gray-600 text-sm text-center leading-relaxed max-w-sm mb-6 flex-grow">
                Beyond safe driving, Juan is consistently praised for a warm welcome and meticulous attention to passenger comfort throughout every tour or shuttle journey.
              </p>
              <a 
                href="https://m.me/JUAN_USERNAME_HERE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-[#0084FF] text-white px-4 py-3 rounded-xl text-sm font-bold flex justify-center items-center gap-2 hover:bg-[#0072dc] transition-colors shadow-sm"
              >
                <span>⚡</span> Chat with Juan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PREMIUM DRIVER FEATURES */}
      <section id="services" className="py-24 px-6 bg-gray-50 border-t border-b">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Why DITC Transport?</span>
            <h2 className="text-4xl font-extrabold text-gray-950 mt-2 mb-5 tracking-tight">The DITC Driver Advantage</h2>
            <p className="text-lg text-gray-600">Elevating transportation standards in Mindanao with verified professionals and transparent services.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-100 p-8 rounded-3xl bg-white hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-green-100 text-[#166534] rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner group-hover:scale-110 transition-transform">🗺️</div>
              <h3 className="text-2xl font-bold text-gray-950 mb-3 tracking-tight">Mindanao Route Specialists</h3>
              <p className="text-gray-600 leading-relaxed">
                Our chauffeurs are Mindanao locals, offering incomparable knowledge of Davao City and regional terrains—from BUDA mountain passes to Samal Island ferry routes.
              </p>
            </div>

            <div className="border border-gray-100 p-8 rounded-3xl bg-white hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner group-hover:scale-110 transition-transform">🤝</div>
              <h3 className="text-2xl font-bold text-gray-950 mb-3 tracking-tight">Vetted & Accredited</h3>
              <p className="text-gray-600 leading-relaxed">
                Every driver is fully vetted, background-checked, LTO-certified, and NCII certified. Professionalism and passenger courtesy are paramount for our cooperative.
              </p>
            </div>

            <div className="border border-gray-100 p-8 rounded-3xl bg-white hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-14 h-14 bg-red-100 text-red-700 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-inner group-hover:scale-110 transition-transform">💳</div>
              <h3 className="text-2xl font-bold text-gray-950 mb-3 tracking-tight">Transparent Rates</h3>
              <p className="text-gray-600 leading-relaxed">
                We offer transparent pricing with an available all-inclusive driver rate option. This eliminates awkward cash hand-offs and simplifies corporate accounting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REQUIREMENTS SECTION */}
      <section id="requirements" className="py-24 px-6 bg-gray-50 border-t border-b">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">Self-Drive Rentals</span>
              <h2 className="text-4xl font-extrabold text-gray-950 mt-2 mb-5 tracking-tight">Essential Rental Requirements</h2>
              <p className="text-lg text-gray-600">Please prepare these items for a smooth vehicle pickup experience at DITC.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-3">
                    <span className="text-lg font-semibold text-gray-950 tracking-tight">1. Valid Driver&apos;s License</span>
                    <p className="text-sm text-gray-600">
                        Must be valid for at least the next 6 months, original copy required. International licenses or translations for foreign nationals.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-3">
                    <span className="text-lg font-semibold text-gray-950 tracking-tight">2. Secondary Identification</span>
                    <p className="text-sm text-gray-600">
                        Two (2) valid government-issued IDs or one valid ID and a passport. SSS, Pag-IBIG, Passport, etc.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-3">
                    <span className="text-lg font-semibold text-gray-950 tracking-tight">3. Proof of Billing</span>
                    <p className="text-sm text-gray-600">
                        Original billing statement for the current month showing your full name and local address. Electric, water, or major internet service.
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 space-y-3">
                    <span className="text-lg font-semibold text-gray-950 tracking-tight">4. Rental Deposit & Fees</span>
                    <p className="text-sm text-gray-600">
                        Pre-authorization of security deposit via credit card, cash deposit, or advanced payment of rental fees via e-wallet or credit card.
                    </p>
                </div>
            </div>
          </div>
      </section>

      {/* 7. CONTACT US SECTION */}
      <section id="contact" className="py-24 px-6 bg-white border-b">
        <div className="container mx-auto grid md:grid-cols-3 gap-12 items-start">
          <div className="col-span-2 space-y-6">
            <h2 className="text-4xl font-extrabold text-gray-950 tracking-tight">Connect with DITC Transport</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Have a question, want a corporate shuttle quote, or need roadside assistance? Reach out via hotline, email, or visit our office. For immediate booking or availability, please use our Book Now feature or Chat with us!
            </p>
            <button className="bg-gradient-to-r from-[#166534] to-[#14532d] text-white px-8 py-3 rounded-full text-base font-bold hover:shadow-lg transition transform hover:-translate-y-0.5">
              Email DITC Transport
            </button>
          </div>
          <div className="space-y-6 bg-gray-50 p-8 rounded-3xl border border-gray-100">
            <div>
              <h5 className="font-semibold text-gray-950 uppercase tracking-widest text-xs mb-3">Our Office (Davao City)</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                DITC Transport Cooperative, Door #1, Adframe Building, Buhangin, Davao City, 8000 Davao del Sur, Philippines
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-950 uppercase tracking-widest text-xs mb-3">Rental Desk Hours</h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                Monday - Sunday: 8:00 AM - 6:00 PM | Roadside Assistance: 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-gray-950 text-gray-400 py-16 px-6">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-sm leading-relaxed">
          <div className="col-span-2 md:col-span-1">
            <span className="text-2xl font-bold text-white tracking-tight">DITC</span>
            <p className="mt-4 text-gray-400">
              Door #1, Adframe Building, Buhangin, Davao City, 8000 Davao del Sur, Philippines. (c) 2026 Davao International Transport Cooperative. All rights reserved. LTO Accredited.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Contact DITC</h5>
            <div className="space-y-2">
              <p>Hotline: 0912 345 6789 (Globe/Smart)</p>
              <p>Office: (082) 2XX XXXX</p>
              <p>info@ditc.coop</p>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Rental Rules</h5>
            <div className="space-y-2">
              <p>Full Fuel Policy</p>
              <p>Minor Damage Waiver</p>
              <p>Davao City Access Rules</p>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs">Cooperatives</h5>
            <div className="space-y-2">
              <p>About DITC Coop</p>
              <p>Transparency Seal</p>
              <p>Members Login</p>
            </div>
          </div>
        </div>
      </footer>

      {/* RESPONSIVE FLOATING 24/7 CHAT SUPPORT BUTTON */}
      <button 
        aria-label="Open 24/7 Chat Support"
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 bg-gradient-to-r from-[#166534] to-[#14532d] text-white p-4 sm:px-6 sm:py-4 rounded-full shadow-[0_10px_25px_rgba(22,101,52,0.4)] sm:text-lg font-bold hover:scale-105 active:scale-95 transition-all z-50 flex items-center justify-center gap-0 sm:gap-3 animate-bounce cursor-pointer border-2 border-white"
      >
        <span className="text-2xl drop-shadow-md">💬</span>
        <span className="hidden sm:inline tracking-wide">24/7 Chat Support</span>
      </button>
      
    </div>
  );
}