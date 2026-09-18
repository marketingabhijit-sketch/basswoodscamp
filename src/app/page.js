'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventSection from '@/components/EventSection';
import CampsiteCatalog from '@/components/CampsiteCatalog';
import LeadQuotePanel from '@/components/LeadQuotePanel';
import LeadPopupModal from '@/components/LeadPopupModal';
import Footer from '@/components/Footer';
import { INITIAL_EVENTS, INITIAL_CAMPSITES } from '@/lib/mockData';
import { Tent, PhoneCall, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [campsites, setCampsites] = useState(INITIAL_CAMPSITES);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedCamp, setSelectedCamp] = useState(null);

  // Auto-trigger smooth popup modal after 5 seconds of browsing homepage
  useEffect(() => {
    const timer = setTimeout(() => {
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
    <div className="min-h-screen bg-[#1B2E22] text-[#F1EAD9] flex flex-col paper-texture selection:bg-[#C1602D] selection:text-[#F1EAD9]">
      {/* Navbar */}
      <Navbar onOpenPopup={() => handleOpenPopup()} />

      <main className="flex-1">
        {/* Hero Section with Ticket Stubs */}
        <Hero onOpenPopup={() => handleOpenPopup()} />

        {/* 2026 Northeast Events Lineup (Gig Posters) */}
        <EventSection 
          events={events} 
          onSelectEvent={(event) => handleOpenPopup(event, null)} 
        />

        {/* Campsite & Accommodation Catalog */}
        <CampsiteCatalog 
          campsites={campsites} 
          onSelectCamp={(camp) => handleOpenPopup(null, camp)} 
        />

        {/* Two-Column Light Cream "Get Custom Quote" Panel */}
        <LeadQuotePanel 
          selectedEvent={selectedEvent}
          selectedCamp={selectedCamp}
        />

        {/* Travel Consulting & Vibe Banner */}
        <section id="vibe-consultancy" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto border-t border-[#F1EAD9]/10">
          <div className="bg-[#223A2C] p-8 sm:p-12 rounded-lg border border-[#F1EAD9]/15 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E0A83E] block mb-2">
                Your Personal Northeast Travel Consultants
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#F1EAD9] mb-4">
                Not Just Promoting Tents. We Curate Your Entire Festival Vibe.
              </h3>
              <p className="text-[#D9CFB6] text-sm sm:text-base leading-relaxed mb-6">
                Whether you want an off-grid ₹500 tent pitch with bonfire jams or a ₹2,200/night luxury geodesic dome with heated blankets and private SUV shuttles — Bass Woods Camp connects you to the exact experience.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#F1EAD9]">
                <span className="bg-[#1B2E22] px-3.5 py-2 rounded border border-[#F1EAD9]/15">✓ Custom Quotations</span>
                <span className="bg-[#1B2E22] px-3.5 py-2 rounded border border-[#F1EAD9]/15">✓ Direct Guwahati Shuttles</span>
                <span className="bg-[#1B2E22] px-3.5 py-2 rounded border border-[#F1EAD9]/15">✓ Verified Local Hosts</span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
              <button
                onClick={() => handleOpenPopup()}
                className="btn-rust px-8 py-3.5 rounded text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Request Custom Itinerary
              </button>

              <a
                href="https://wa.me/919876543210?text=Hi%20Bass%20Woods!%20I%20want%20to%20consult%20for%20Northeast%202026."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded bg-[#1B2E22] text-[#E0A83E] border border-[#E0A83E]/40 hover:bg-[#15140F] text-xs font-bold flex items-center justify-center gap-2 transition-colors"
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
          className="btn-rust px-5 py-3 rounded-full text-xs font-bold flex items-center gap-2 shadow-2xl cursor-pointer"
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
