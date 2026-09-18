'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventSection from '@/components/EventSection';
import CampsiteCatalog from '@/components/CampsiteCatalog';
import LeadPopupModal from '@/components/LeadPopupModal';
import Footer from '@/components/Footer';
import { INITIAL_EVENTS, INITIAL_CAMPSITES } from '@/lib/mockData';
import { Sparkles, MessageCircle, Tent, PhoneCall } from 'lucide-react';

export default function Home() {
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [campsites, setCampsites] = useState(INITIAL_CAMPSITES);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedCamp, setSelectedCamp] = useState(null);

  // Auto-trigger smooth popup modal after 5 seconds of browsing homepage
  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if user hasn't already dismissed or opened
      const dismissed = sessionStorage.getItem('bw_popup_dismissed');
      if (!dismissed) {
        setIsPopupOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenPopup = (event = null, camp = null) => {
    setSelectedEvent(event);
    setSelectedCamp(camp);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    sessionStorage.setItem('bw_popup_dismissed', 'true');
  };

  return (
    <div className="min-h-screen bg-[#070a0f] text-gray-100 flex flex-col selection:bg-[#8cff00] selection:text-black">
      {/* Navbar */}
      <Navbar onOpenPopup={() => handleOpenPopup()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenPopup={() => handleOpenPopup()} />

        {/* 2026 Northeast Events Section */}
        <EventSection 
          events={events} 
          onSelectEvent={(event) => handleOpenPopup(event, null)} 
        />

        {/* Campsite & Accommodation Catalog */}
        <CampsiteCatalog 
          campsites={campsites} 
          onSelectCamp={(camp) => handleOpenPopup(null, camp)} 
        />

        {/* Vibe & Consultation Banner */}
        <section id="vibe-consultancy" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-[#8cff00]/30 shadow-[0_0_30px_rgba(140,255,0,0.15)]">
            <div className="max-w-2xl">
              <span className="text-xs font-black uppercase tracking-widest text-[#8cff00] block mb-2">
                Your Personal Northeast Travel Consultants
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Not Just Promoting Tents. We Curate Your <span className="text-gradient-neon">Entire Festival Vibe</span>.
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Whether you want an off-grid ₹500 tent pitch with bonfire jams or a ₹2,200/night luxury geodesic dome with heated blankets and private SUV shuttles — Bass Woods Camp connects you to the exact experience.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-200">
                <span className="bg-white/10 px-3.5 py-2 rounded-xl border border-white/10">✓ Custom Quotations</span>
                <span className="bg-white/10 px-3.5 py-2 rounded-xl border border-white/10">✓ Direct Guwahati Shuttles</span>
                <span className="bg-white/10 px-3.5 py-2 rounded-xl border border-white/10">✓ Verified Local Hosts</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
              <button
                onClick={() => handleOpenPopup()}
                className="neon-glow-btn px-8 py-4 rounded-2xl text-sm font-extrabold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" /> Request Custom Itinerary
              </button>

              <a
                href="https://wa.me/919876543210?text=Hi%20Bass%20Woods%20Camp!%20I%20want%20to%20consult%20for%20Northeast%202026."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <PhoneCall className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenPopup={() => handleOpenPopup()} />

      {/* Floating Action Badge on Bottom Right */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-3">
        <button
          onClick={() => handleOpenPopup()}
          className="glass-card bg-[#0d1420]/90 border border-[#8cff00]/40 text-[#8cff00] hover:bg-[#8cff00] hover:text-black px-4 py-3 rounded-full shadow-2xl flex items-center gap-2 text-xs font-extrabold transition-all cursor-pointer"
        >
          <Tent className="w-4 h-4" /> Get 2026 Quote
        </button>
      </div>

      {/* Timed Lead Capture Popup Modal */}
      <LeadPopupModal 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup}
        selectedEvent={selectedEvent}
        selectedCamp={selectedCamp}
      />
    </div>
  );
}
