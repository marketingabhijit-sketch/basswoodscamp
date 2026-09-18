'use client';
import Link from 'next/link';
import LogoMark from './LogoMark';
import { Tent, Calendar, Sparkles, LayoutDashboard, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenPopup }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#1B2E22] text-[#F6F1E7] border-b border-[#F6F1E7]/15 shadow-md px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-[#223A2C] p-1.5 rounded-lg border border-[#F6F1E7]/20 group-hover:border-[#E0A83E] transition-colors">
            <LogoMark className="w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#F6F1E7] leading-none">
              Bass Woods
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#E0A83E] font-semibold mt-0.5">
              Northeast Festival Travel
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#EDE4D3]">
          <a href="#events-2026" className="hover:text-[#E0A83E] transition-colors flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#E0A83E]" /> 2026 Festivals
          </a>
          <a href="#campsites" className="hover:text-[#E0A83E] transition-colors flex items-center gap-1.5">
            <Tent className="w-4 h-4 text-[#5C7C93]" /> Stays & Campsites
          </a>
          <a href="#vibe-consultancy" className="hover:text-[#E0A83E] transition-colors flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#C1602D]" /> Travel Consulting
          </a>
          <Link 
            href="/admin" 
            className="hover:text-[#F6F1E7] transition-colors flex items-center gap-1.5 text-xs bg-[#223A2C] px-3.5 py-1.5 rounded-md border border-[#F6F1E7]/15 hover:border-[#E0A83E]"
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-[#E0A83E]" /> Admin Hub
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenPopup}
            className="btn-rust-light px-4 py-2 rounded-md text-xs md:text-sm flex items-center gap-2 cursor-pointer"
          >
            Get Custom Quote
          </button>
          
          <a 
            href="https://wa.me/919876543210?text=Hi%20Bass%20Woods!%20I'm%20interested%20in%20Northeast%202026%20festival%20campsites." 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-md bg-[#223A2C] text-[#E0A83E] border border-[#F6F1E7]/15 hover:border-[#E0A83E] transition-all"
            title="WhatsApp Consultation"
          >
            <PhoneCall className="w-4 h-4" />
          </a>
        </div>

      </div>
    </header>
  );
}
