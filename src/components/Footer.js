'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Tent, PhoneCall, Mail, MapPin, Instagram, Youtube, Heart } from 'lucide-react';

export default function Footer({ onOpenPopup }) {
  return (
    <footer className="bg-black/90 border-t border-white/10 pt-16 pb-8 px-4 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Column */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-black border border-[#8cff00]/40 p-1">
              <Image src="/emblem.png" alt="Bass Woods" width={44} height={44} className="object-contain" />
            </div>
            <div>
              <span className="font-black text-2xl text-white tracking-wider flex items-center gap-1">
                BASS<span className="text-[#8cff00]">WOODS</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-semibold block">
                Camp & Events Northeast
              </span>
            </div>
          </div>

          <p className="text-gray-400 text-sm max-w-md leading-relaxed mb-6">
            Bass Woods is an independent travel consultancy and festival camping company bringing subterranean soundscapes, eco-glamping, and curated wilderness stays to Northeast India&apos;s greatest cultural gatherings.
          </p>

          <div className="flex items-center gap-3 text-xs text-gray-300">
            <span className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <MapPin className="w-3.5 h-3.5 text-[#8cff00]" /> Guwahati • Ziro • Kohima • Shillong
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-[#8cff00] pl-2">
            2026 Festivals
          </h4>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li><a href="#events-2026" className="hover:text-[#8cff00] transition-colors">Ziro Festival of Music</a></li>
            <li><a href="#events-2026" className="hover:text-[#8cff00] transition-colors">Shillong Cherry Blossom</a></li>
            <li><a href="#events-2026" className="hover:text-[#8cff00] transition-colors">Hornbill Festival Nagaland</a></li>
            <li><a href="#events-2026" className="hover:text-[#8cff00] transition-colors">Orange Fest Dambuk</a></li>
            <li><a href="#events-2026" className="hover:text-[#8cff00] transition-colors">Mechuka Adventure Fest</a></li>
          </ul>
        </div>

        {/* Stay Spectrum & Consultation */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-cyan-400 pl-2">
            Stay Range
          </h4>
          <ul className="space-y-2.5 text-sm text-gray-400 mb-6">
            <li><span className="text-gray-300">Alpine Tents:</span> ₹500 – ₹700/night</li>
            <li><span className="text-gray-300">Standard Glamp:</span> ₹1,000 – ₹1,500/night</li>
            <li><span className="text-gray-300">Luxury Domes:</span> ₹2,000+/night</li>
            <li><span className="text-gray-300">Eco-Villas:</span> Premium Group Slots</li>
          </ul>

          <button 
            onClick={onOpenPopup}
            className="w-full neon-glow-btn py-2.5 rounded-xl text-xs font-bold"
          >
            Get Custom Travel Quote
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
        <div>
          © 2026 Bass Woods Camp. All rights reserved. Northeast India Travel & Events.
        </div>
        <div className="flex items-center gap-4">
          <Link href="/admin" className="text-gray-400 hover:text-[#8cff00] transition-colors">
            Backend Admin Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}
