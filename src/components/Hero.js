'use client';
import LogoMark from './LogoMark';
import { Compass, ArrowRight, Ticket } from 'lucide-react';

export default function Hero({ onOpenPopup }) {
  return (
    <section className="relative px-4 lg:px-8 pt-12 pb-16 paper-grain-light overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

        {/* Hand-drawn Emblem Badge */}
        <div className="mb-6 flex items-center justify-center p-2 rounded-xl bg-[#1B2E22] border border-[#1B2E22]/30 shadow-sm">
          <LogoMark className="w-12 h-12" />
        </div>

        {/* Display Headline (Fraunces Serif in Dark Forest Green) */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1B2E22] leading-[1.1] max-w-4xl mb-6">
          Curated Music Festival Travel and Wilderness Campsites Across Northeast India
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#3D5244] max-w-2xl font-normal leading-relaxed mb-10">
          From budget alpine tent pitches to heated glamping domes and SUV convoys, we connect music lovers to authentic festival stays for Ziro, Hornbill, Shillong, and Dambuk.
        </p>

        {/* Rotated Ticket Stubs Strip on Deeper Cream Background (#EDE4D3) */}
        <div className="w-full max-w-4xl mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          
          {/* Ticket 1: Forest Top Border */}
          <div className="ticket-stub-light p-5 border-t-4 border-[#1B2E22] transform sm:-rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#1B2E22]/60 mb-1">
              <span>Ticket Tier 01</span>
              <Ticket className="w-3.5 h-3.5 text-[#1B2E22]" />
            </div>
            <div className="text-sm font-extrabold text-[#1B2E22]">Budget Campsites</div>
            <div className="text-xl font-black text-[#C1602D] my-1">₹500 – ₹700</div>
            <div className="text-xs text-[#1B2E22]/75 mb-4">BYOT & Alpine Tents</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#1B2E22]/40 pt-2 border-t border-dashed border-[#1B2E22]/20">
              Valid for 2026 Season
            </div>
          </div>

          {/* Ticket 2: Rust Top Border */}
          <div className="ticket-stub-light p-5 border-t-4 border-[#C1602D] transform sm:rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#1B2E22]/60 mb-1">
              <span>Ticket Tier 02</span>
              <Ticket className="w-3.5 h-3.5 text-[#C1602D]" />
            </div>
            <div className="text-sm font-extrabold text-[#1B2E22]">Standard Glamping</div>
            <div className="text-xl font-black text-[#C1602D] my-1">₹1,000 – ₹1,500</div>
            <div className="text-xs text-[#1B2E22]/75 mb-4">Solar Beds & Firepits</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#1B2E22]/40 pt-2 border-t border-dashed border-[#1B2E22]/20">
              Solar Lighted Slots
            </div>
          </div>

          {/* Ticket 3: Mustard Top Border */}
          <div className="ticket-stub-light p-5 border-t-4 border-[#E0A83E] transform sm:-rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#1B2E22]/60 mb-1">
              <span>Ticket Tier 03</span>
              <Ticket className="w-3.5 h-3.5 text-[#E0A83E]" />
            </div>
            <div className="text-sm font-extrabold text-[#1B2E22]">Luxury Domes</div>
            <div className="text-xl font-black text-[#C1602D] my-1">₹2,000+</div>
            <div className="text-xs text-[#1B2E22]/75 mb-4">Heated & Sky View Domes</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#1B2E22]/40 pt-2 border-t border-dashed border-[#1B2E22]/20">
              Heated Geodesic Domes
            </div>
          </div>

          {/* Ticket 4: Slate Blue Top Border */}
          <div className="ticket-stub-light p-5 border-t-4 border-[#5C7C93] transform sm:rotate-2 hover:rotate-0 transition-transform">
            <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#1B2E22]/60 mb-1">
              <span>Ticket Tier 04</span>
              <Ticket className="w-3.5 h-3.5 text-[#5C7C93]" />
            </div>
            <div className="text-sm font-extrabold text-[#1B2E22]">Eco Transport</div>
            <div className="text-xl font-black text-[#C1602D] my-1">Guwahati Direct</div>
            <div className="text-xs text-[#1B2E22]/75 mb-4">SUV & Shuttle Convoys</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-[#1B2E22]/40 pt-2 border-t border-dashed border-[#1B2E22]/20">
              Airport Pickup Included
            </div>
          </div>

        </div>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenPopup}
            className="w-full sm:w-auto btn-rust-light px-7 py-3.5 rounded-md text-base font-bold flex items-center justify-center gap-2 cursor-pointer"
          >
            Claim 2026 Festival Stay <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#events-2026"
            className="w-full sm:w-auto px-6 py-3.5 rounded-md bg-[#EDE4D3] border border-[#1B2E22]/20 hover:border-[#C1602D] text-[#1B2E22] font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <Compass className="w-4 h-4 text-[#C1602D]" /> View 2026 Lineup
          </a>
        </div>

      </div>
    </section>
  );
}
