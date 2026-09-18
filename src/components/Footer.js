'use client';
import Link from 'next/link';
import LogoMark from './LogoMark';
import { MapPin, PhoneCall } from 'lucide-react';

export default function Footer({ onOpenPopup }) {
  return (
    <footer className="bg-[#15140F] border-t-2 border-[#223A2C] pt-16 pb-8 px-4 lg:px-8 text-[#F1EAD9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <LogoMark className="w-12 h-12" />
            <div>
              <span className="font-serif font-bold text-2xl text-[#F1EAD9] leading-none block">
                Bass Woods
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#E0A83E] font-medium mt-0.5 block">
                Northeast Festival Travel
              </span>
            </div>
          </div>

          <p className="text-[#D9CFB6] text-sm max-w-md leading-relaxed font-normal">
            Bass Woods is an independent travel consultancy and festival camping company bringing curated wilderness stays, glamping domes, and eco-transfers to Northeast India&apos;s iconic music gatherings.
          </p>

          <div className="text-xs text-[#D9CFB6]/80 flex items-center gap-1.5 pt-2">
            <MapPin className="w-4 h-4 text-[#C1602D]" />
            <span>Guwahati • Ziro Valley • Kisama (Kohima) • Shillong • Dambuk</span>
          </div>
        </div>

        {/* Festival Links */}
        <div>
          <h4 className="font-serif font-bold text-base text-[#F1EAD9] mb-4 border-l-2 border-[#C1602D] pl-2.5">
            2026 Festivals
          </h4>
          <ul className="space-y-2 text-xs text-[#D9CFB6]">
            <li><a href="#events-2026" className="hover:text-[#E0A83E] transition-colors">Ziro Festival of Music</a></li>
            <li><a href="#events-2026" className="hover:text-[#E0A83E] transition-colors">Shillong Cherry Blossom</a></li>
            <li><a href="#events-2026" className="hover:text-[#E0A83E] transition-colors">Hornbill Festival Nagaland</a></li>
            <li><a href="#events-2026" className="hover:text-[#E0A83E] transition-colors">Orange Fest Dambuk</a></li>
            <li><a href="#events-2026" className="hover:text-[#E0A83E] transition-colors">Mechuka Adventure Fest</a></li>
          </ul>
        </div>

        {/* Stay Spectrum */}
        <div>
          <h4 className="font-serif font-bold text-base text-[#F1EAD9] mb-4 border-l-2 border-[#E0A83E] pl-2.5">
            Stay Tiers
          </h4>
          <ul className="space-y-2 text-xs text-[#D9CFB6] mb-6">
            <li><strong className="text-[#F1EAD9]">Alpine Tents:</strong> ₹500 – ₹700/night</li>
            <li><strong className="text-[#F1EAD9]">Standard Glamp:</strong> ₹1,000 – ₹1,500/night</li>
            <li><strong className="text-[#F1EAD9]">Luxury Domes:</strong> ₹2,000+/night</li>
            <li><strong className="text-[#F1EAD9]">Eco-Villas:</strong> Custom Squad Slots</li>
          </ul>

          <button 
            onClick={onOpenPopup}
            className="w-full btn-rust py-2.5 rounded text-xs font-bold uppercase tracking-wider"
          >
            Get Custom Quote
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-[#223A2C] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D9CFB6]/60 gap-4">
        <div>
          © 2026 Bass Woods Camp. All rights reserved. Northeast India Travel & Events.
        </div>
        <div>
          <Link href="/admin" className="hover:text-[#E0A83E] transition-colors">
            Operations & Admin Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}
