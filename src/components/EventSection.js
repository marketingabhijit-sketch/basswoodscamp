'use client';
import FestivalArt from './FestivalArt';
import { Calendar, MapPin, Check, ArrowRight } from 'lucide-react';

export default function EventSection({ events, onSelectEvent }) {
  return (
    <section id="events-2026" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto border-t border-[#1B2E22]/15">
      
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C1602D] block mb-2">
            2026 Event Calendar & Stays
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1B2E22]">
            Northeast India Festival Lineup
          </h2>
        </div>
        <p className="text-[#3D5244] text-sm max-w-md mt-4 md:mt-0 font-normal">
          Certified Bass Woods campsites, luxury glamping domes, and transport packages directly synced with official festival dates.
        </p>
      </div>

      {/* Gig Poster Grid (Light Cream Cards #EDE4D3) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="cream-card rounded-lg overflow-hidden flex flex-col justify-between group cursor-pointer border border-[#1B2E22]/15 hover:border-[#C1602D] transition-all"
            onClick={() => onSelectEvent(event)}
          >
            {/* Top Gig Poster Illustration Banner */}
            <div className="relative h-52 w-full overflow-hidden border-b border-[#1B2E22]/15">
              <FestivalArt eventId={event.id} />
              
              {/* Badge Over Art */}
              <div className="absolute top-3 left-3 bg-[#C1602D] text-[#F6F1E7] text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider shadow">
                {event.badge}
              </div>

              {/* Price Starting Pill */}
              <div className="absolute top-3 right-3 bg-[#1B2E22] text-[#E0A83E] text-xs font-bold px-3 py-1 rounded border border-[#E0A83E]/40">
                From {event.priceStarting}
              </div>

              {/* Date & Location Overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#F6F1E7]">
                <span className="bg-[#1B2E22]/90 px-2.5 py-1 rounded font-medium flex items-center gap-1 border border-[#F6F1E7]/20">
                  <Calendar className="w-3.5 h-3.5 text-[#E0A83E]" /> {event.dates}
                </span>
                <span className="bg-[#1B2E22]/90 px-2.5 py-1 rounded font-medium flex items-center gap-1 border border-[#F6F1E7]/20">
                  <MapPin className="w-3.5 h-3.5 text-[#C1602D]" /> {event.location.split(',')[0]}
                </span>
              </div>
            </div>

            {/* Poster Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#1B2E22] mb-2 group-hover:text-[#C1602D] transition-colors">
                  {event.title}
                </h3>

                <div className="mb-4">
                  <span className="text-[10px] uppercase font-bold text-[#C1602D] block mb-1 tracking-wider">
                    Center of Attraction
                  </span>
                  <p className="text-xs text-[#3D5244] line-clamp-2 leading-relaxed font-normal">
                    {event.centerOfAttraction}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-1.5 mb-2">
                  {event.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#3D5244]">
                      <Check className="w-3.5 h-3.5 text-[#C1602D] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Poster CTA Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); onSelectEvent(event); }}
                className="w-full btn-rust-light py-2.5 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                Reserve Campsite & Pass <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
