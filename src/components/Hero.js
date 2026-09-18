'use client';
import Image from 'next/image';
import { Sparkles, MapPin, Compass, ArrowRight, Zap, Radio } from 'lucide-react';

export default function Hero({ onOpenPopup }) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#8cff00]/15 via-cyan-500/10 to-purple-600/15 rounded-full blur-[120px] pointer-events-none pulse-glow" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Top Badge Ticker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#8cff00]/30 backdrop-blur-md mb-8">
          <Radio className="w-4 h-4 text-[#8cff00] animate-pulse" />
          <span className="text-xs font-semibold text-gray-300">
            Official 2026 Northeast India Festival & Campsite Consultancy
          </span>
          <span className="bg-[#8cff00] text-black text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
            Live
          </span>
        </div>

        {/* Central Logo Art Showcase */}
        <div className="relative mb-8 group cursor-pointer" onClick={onOpenPopup}>
          <div className="absolute inset-0 bg-[#8cff00]/20 rounded-3xl blur-2xl group-hover:bg-[#8cff00]/40 transition-all duration-500" />
          <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-3xl p-4 bg-black/60 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl group-hover:scale-105 transition-all duration-500">
            <Image 
              src="/logo.png" 
              alt="Bass Woods Official Logo" 
              width={240} 
              height={240}
              priority
              className="object-contain w-full h-full drop-shadow-[0_0_20px_rgba(140,255,0,0.4)]"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mb-6">
          Where <span className="text-gradient-neon">Underground Bass</span> Meets The <span className="text-gradient-purple">Wild Woods</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed mb-10">
          Your premier Northeast India travel & eco-stay consultants for <strong className="text-white">2026 Music Festivals</strong>. From budget campsites to luxury geodesic domes, we curate your exact vibe.
        </p>

        {/* Price & Feature Pill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl mb-10 text-left">
          <div className="glass-card p-3.5 rounded-2xl">
            <div className="text-xs text-gray-400 font-medium">Budget Campsites</div>
            <div className="text-lg font-bold text-[#8cff00]">₹500 – ₹700</div>
            <div className="text-[11px] text-gray-400">BYOT & Alpine Tents</div>
          </div>

          <div className="glass-card p-3.5 rounded-2xl">
            <div className="text-xs text-gray-400 font-medium">Standard Glamping</div>
            <div className="text-lg font-bold text-cyan-400">₹1,000 – ₹1,500</div>
            <div className="text-[11px] text-gray-400">Solar Beds & Firepits</div>
          </div>

          <div className="glass-card p-3.5 rounded-2xl">
            <div className="text-xs text-gray-400 font-medium">Luxury Domes</div>
            <div className="text-lg font-bold text-purple-400">₹2,000+ / night</div>
            <div className="text-[11px] text-gray-400">Heated & Sky View</div>
          </div>

          <div className="glass-card p-3.5 rounded-2xl">
            <div className="text-xs text-gray-400 font-medium">Eco Transport</div>
            <div className="text-lg font-bold text-emerald-400">Guwahati Direct</div>
            <div className="text-[11px] text-gray-400">SUV & Shuttle Convoys</div>
          </div>
        </div>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenPopup}
            className="w-full sm:w-auto neon-glow-btn px-8 py-4 rounded-2xl text-base font-extrabold flex items-center justify-center gap-3"
          >
            <Zap className="w-5 h-5 fill-current" /> Claim Your 2026 Festival Stay
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#events-2026"
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-base flex items-center justify-center gap-2 backdrop-blur-md transition-all"
          >
            <Compass className="w-5 h-5 text-cyan-400" /> Explore 2026 Events
          </a>
        </div>
      </div>
    </section>
  );
}
