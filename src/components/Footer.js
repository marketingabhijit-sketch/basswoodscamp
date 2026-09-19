'use client';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

export default function Footer({ onOpenPopup }) {
  return (
    <footer className="bg-[#14251B] border-t border-[#F5EFE6]/10 pt-16 pb-8 px-4 lg:px-8 text-[#F5EFE6]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#C85A28]/40 p-1 bg-[#1A3023]">
              <Image src="/emblem.png" alt="Bass Woods" width={44} height={44} className="object-contain" />
            </div>
            <div>
              <span className="font-black text-2xl tracking-wider text-[#F5EFE6] leading-none block">
                BASS<span className="text-[#C85A28]">WOODS</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#E0A83E] font-semibold mt-1 block">
                Camp & Events Northeast
              </span>
            </div>
          </div>

          <p className="text-[#EDE7D9] text-sm max-w-md leading-relaxed font-normal">
            Bass Woods is an independent travel consultancy and festival camping company bringing subterranean soundscapes, eco-glamping, and curated wilderness stays to Northeast India&apos;s iconic music gatherings.
          </p>

          <div className="text-xs text-[#EDE7D9]/80 flex items-center gap-1.5 pt-2 font-medium">
            <MapPin className="w-4 h-4 text-[#C85A28]" />
            <span>Guwahati • Ziro Valley • Kisama (Kohima) • Shillong • Dambuk</span>
          </div>
        </div>

        {/* Festival Links */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#F5EFE6] mb-4 border-l-2 border-[#C85A28] pl-2.5">
            2026 Festivals
          </h4>
          <ul className="space-y-2 text-xs text-[#EDE7D9]">
            <li><a href="#events-2026" className="hover:text-[#C85A28] transition-colors">Ziro Festival of Music</a></li>
            <li><a href="#events-2026" className="hover:text-[#C85A28] transition-colors">Shillong Cherry Blossom</a></li>
            <li><a href="#events-2026" className="hover:text-[#C85A28] transition-colors">Hornbill Festival Nagaland</a></li>
            <li><a href="#events-2026" className="hover:text-[#C85A28] transition-colors">Orange Fest Dambuk</a></li>
            <li><a href="#events-2026" className="hover:text-[#C85A28] transition-colors">Mechuka Adventure Fest</a></li>
          </ul>
        </div>

        {/* Stay Spectrum */}
        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-[#F5EFE6] mb-4 border-l-2 border-[#E0A83E] pl-2.5">
            Stay Range
          </h4>
          <ul className="space-y-2 text-xs text-[#EDE7D9] mb-6">
            <li><strong className="text-[#F5EFE6]">Alpine Tents:</strong> ₹500 – ₹700/night</li>
            <li><strong className="text-[#F5EFE6]">Standard Glamp:</strong> ₹1,000 – ₹1,500/night</li>
            <li><strong className="text-[#F5EFE6]">Luxury Domes:</strong> ₹2,000+/night</li>
            <li><strong className="text-[#F5EFE6]">Eco-Villas:</strong> Custom Squad Slots</li>
          </ul>

          <button 
            onClick={onOpenPopup}
            className="w-full btn-terracotta py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            Get Custom Quote
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-[#F5EFE6]/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EDE7D9]/70 gap-4">
        <div>
          © 2026 Bass Woods Camp. All rights reserved. Northeast India Travel & Events.
        </div>
        <div>
          <Link href="/admin" className="hover:text-[#C85A28] transition-colors">
            Backend Admin Portal
          </Link>
        </div>
      </div>
    </footer>
  );
}
