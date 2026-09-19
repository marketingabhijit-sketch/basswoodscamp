'use client';
import Image from 'next/image';
import { Compass, ArrowRight, Radio, ShieldCheck, Zap } from 'lucide-react';

export default function Hero({ onOpenPopup }) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 lg:px-8 py-14 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-[#C85A28]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Live Event Ticker Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A3023] border border-[#F5EFE6]/15 backdrop-blur-md mb-8 shadow-sm">
          <Radio className="w-4 h-4 text-[#C85A28] animate-pulse" />
          <span className="text-xs font-semibold text-[#EDE7D9]">
            Official 2026 Northeast India Festival & Campsite Consultancy
          </span>
          <span className="bg-[#C85A28] text-[#F5EFE6] text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
            Live
          </span>
        </div>

        {/* Central Logo Art Showcase with Official Logo */}
        <div className="relative mb-8 group cursor-pointer" onClick={onOpenPopup}>
          <div className="absolute inset-0 bg-[#C85A28]/20 rounded-3xl blur-xl group-hover:bg-[#C85A28]/35 transition-all duration-500" />
          <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-3xl p-4 bg-[#1A3023] border border-[#F5EFE6]/20 backdrop-blur-xl flex items-center justify-center shadow-2xl group-hover:scale-105 transition-all duration-500">
            <Image 
              src="/logo.png" 
              alt="Bass Woods Official Logo" 
              width={240} 
              height={240}
              priority
              className="object-contain w-full h-full drop-shadow-xl"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#F5EFE6] tracking-tight leading-[1.1] max-w-4xl mb-6">
          Where <span className="text-[#C85A28]">Underground Bass</span> Meets The <span className="text-[#E0A83E]">Wild Woods</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#EDE7D9] max-w-2xl font-normal leading-relaxed mb-10">
          Your premier Northeast India travel & eco-stay consultants for <strong className="text-white">2026 Music Festivals</strong>. From budget campsites to luxury geodesic domes, we curate your exact vibe.
        </p>

        {/* Price & Feature Cream Container Grid (Matching User Screenshot Palette) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl mb-10 text-left">
          
          <div className="card-cream-container p-4">
            <div className="text-xs text-[#14251B]/70 font-semibold uppercase tracking-wider">Budget Campsites</div>
            <div className="text-xl font-black text-[#C85A28] my-1">₹500 – ₹700</div>
            <div className="text-[11px] text-[#14251B]/80 font-medium">BYOT & Alpine Tents</div>
          </div>

          <div className="card-cream-container p-4">
            <div className="text-xs text-[#14251B]/70 font-semibold uppercase tracking-wider">Standard Glamping</div>
            <div className="text-xl font-black text-[#C85A28] my-1">₹1,000 – ₹1,500</div>
            <div className="text-[11px] text-[#14251B]/80 font-medium">Solar Beds & Firepits</div>
          </div>

          <div className="card-cream-container p-4">
            <div className="text-xs text-[#14251B]/70 font-semibold uppercase tracking-wider">Luxury Domes</div>
            <div className="text-xl font-black text-[#C85A28] my-1">₹2,000+ / night</div>
            <div className="text-[11px] text-[#14251B]/80 font-medium">Heated & Sky View</div>
          </div>

          <div className="card-cream-container p-4">
            <div className="text-xs text-[#14251B]/70 font-semibold uppercase tracking-wider">Eco Transport</div>
            <div className="text-xl font-black text-[#C85A28] my-1">Guwahati Direct</div>
            <div className="text-[11px] text-[#14251B]/80 font-medium">SUV & Shuttle Convoys</div>
          </div>

        </div>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenPopup}
            className="w-full sm:w-auto btn-terracotta px-8 py-4 text-base font-extrabold flex items-center justify-center gap-3 cursor-pointer shadow-lg"
          >
            <Zap className="w-5 h-5 fill-current" /> Claim Your 2026 Festival Stay
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#events-2026"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#1A3023] border border-[#F5EFE6]/20 hover:border-[#C85A28] text-[#F5EFE6] font-semibold text-base flex items-center justify-center gap-2 backdrop-blur-md transition-all"
          >
            <Compass className="w-5 h-5 text-[#E0A83E]" /> Explore 2026 Events
          </a>
        </div>

      </div>
    </section>
  );
}
