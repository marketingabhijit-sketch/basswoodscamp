'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Tent, Calendar, Sparkles, LayoutDashboard, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenPopup }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#14251B]/95 border-b border-[#F5EFE6]/10 backdrop-blur-md px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo & Title with Official Emblem */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#C85A28]/40 group-hover:border-[#C85A28] transition-all p-1 bg-[#1A3023]">
            <Image 
              src="/emblem.png" 
              alt="Bass Woods Official Emblem" 
              width={40} 
              height={40} 
              className="object-contain w-full h-full transform group-hover:scale-110 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-wider text-[#F5EFE6] flex items-center gap-1 leading-none">
              BASS<span className="text-[#C85A28]">WOODS</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#E0A83E] font-semibold mt-1">
              Camp & Events Northeast
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#EDE7D9]">
          <a href="#events-2026" className="hover:text-[#C85A28] transition-colors flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#E0A83E]" /> 2026 Festivals
          </a>
          <a href="#campsites" className="hover:text-[#C85A28] transition-colors flex items-center gap-1.5">
            <Tent className="w-4 h-4 text-[#E0A83E]" /> Stays & Campsites
          </a>
          <a href="#vibe-consultancy" className="hover:text-[#C85A28] transition-colors flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#C85A28]" /> Travel Consulting
          </a>
          <Link 
            href="/admin" 
            className="hover:text-[#F5EFE6] transition-colors flex items-center gap-1.5 text-xs bg-[#1A3023] px-3.5 py-1.5 rounded-xl border border-[#F5EFE6]/15 hover:border-[#C85A28]"
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-[#E0A83E]" /> Admin Portal
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenPopup}
            className="btn-terracotta px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 cursor-pointer"
          >
            Get Custom Quote
          </button>
          
          <a 
            href="https://wa.me/919876543210?text=Hi%20Bass%20Woods%20Camp!%20I'm%20interested%20in%20Northeast%202026%20festival%20campsites." 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-xl bg-[#1A3023] text-[#E0A83E] border border-[#F5EFE6]/15 hover:border-[#C85A28] transition-all"
            title="WhatsApp Consultation"
          >
            <PhoneCall className="w-4 h-4" />
          </a>
        </div>

      </div>
    </header>
  );
}
