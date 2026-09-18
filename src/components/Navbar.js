'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Tent, Calendar, ShieldCheck, Sparkles, LayoutDashboard, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenPopup }) {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-white/10 px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Branding */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-[#8cff00]/40 group-hover:border-[#8cff00] transition-all p-1 bg-black/40">
            <Image 
              src="/emblem.png" 
              alt="Bass Woods Emblem" 
              width={40} 
              height={40} 
              className="object-contain w-full h-full transform group-hover:scale-110 transition-transform"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-wider text-white flex items-center gap-1">
              BASS<span className="text-[#8cff00]">WOODS</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">
              Camp & Events Northeast
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#events-2026" className="hover:text-[#8cff00] transition-colors flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#8cff00]" /> 2026 Festivals
          </a>
          <a href="#campsites" className="hover:text-[#8cff00] transition-colors flex items-center gap-1.5">
            <Tent className="w-4 h-4 text-cyan-400" /> Stays & Campsites
          </a>
          <a href="#vibe-consultancy" className="hover:text-[#8cff00] transition-colors flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-purple-400" /> Vibe & Pricing
          </a>
          <Link href="/admin" className="hover:text-[#8cff00] transition-colors flex items-center gap-1.5 text-xs bg-white/5 px-3 py-1.5 rounded-full border border-white/10 hover:border-[#8cff00]">
            <LayoutDashboard className="w-3.5 h-3.5 text-[#8cff00]" /> Admin Portal
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenPopup}
            className="neon-glow-btn px-4 py-2 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" /> Get Custom Quote
          </button>
          
          <a 
            href="https://wa.me/919876543210?text=Hi%20Bass%20Woods%20Camp!%20I'm%20interested%20in%20Northeast%202026%20festival%20campsites." 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30 transition-all"
            title="Instant WhatsApp Consult"
          >
            <PhoneCall className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
