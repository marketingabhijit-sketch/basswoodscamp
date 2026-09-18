'use client';
import FestivalArt from './FestivalArt';
import { Calendar, MapPin, Check, ArrowRight } from 'lucide-react';

export default function EventSection({ events, onSelectEvent }) {
  return (
    <section id="events-2026" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto border-t border-[#F1EAD9]/10">
      
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#E0A83E] block mb-2">
            2026 Event Calendar & Stays
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F1EAD9]">
            Northeast India Festival Lineup
          </h2>
        </div>
        <p className="text-[#D9CFB6] text-sm max-w-md mt-4 md:mt-0 font-normal">
          Certified Bass Woods campsites, luxury glamping domes, and transport packages directly synced with official festival dates.
        </p>
      </div>

      {/* Gig Poster Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="woodcut-panel rounded-lg overflow-hidden flex flex-col justify-between group cursor-pointer border border-[#F1EAD9]/20 hover:border-[#E0A83E] transition-all"
            onClick={() => onSelectEvent(event)}
          >
            {/* Top Gig Poster Illustration Banner */}
            <div className="relative h-52 w-full overflow-hidden border-b border-[#F1EAD9]/15">
              <FestivalArt eventId={event.id} />
              
              {/* Badge Over Art */}
              <div className="absolute top-3 left-3 bg-[#C1602D] text-[#F1EAD9] text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider shadow">
                {event.badge}
              </div>

              {/* Price Starting Pill */}
              <div className="absolute top-3 right-3 bg-[#15140F]/80 text-[#E0A83E] text-xs font-bold px-3 py-1 rounded border border-[#E0A83E]/40">
                From {event.priceStarting}
              </div>

              {/* Date & Location Overlay */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#F1EAD9]">
                <span className="bg-[#15140F]/90 px-2.5 py-1 rounded font-medium flex items-center gap-1 border border-[#F1EAD9]/20">
                  <Calendar className="w-3.5 h-3.5 text-[#E0A83E]" /> {event.dates}
                </span>
                <span className="bg-[#15140F]/90 px-2.5 py-1 rounded font-medium flex items-center gap-1 border border-[#F1EAD9]/20">
                  <MapPin className="w-3.5 h-3.5 text-[#C1602D]" /> {event.location.split(',')[0]}
                </span>
              </div>
            </div>

            {/* Poster Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F1EAD9] mb-2 group-hover:text-[#E0A83E] transition-colors">
                  {event.title}
                </h3>

                <div className="mb-4">
                  <span className="text-[10px] uppercase font-bold text-[#E0A83E] block mb-1 tracking-wider">
                    Center of Attraction
                  </span>
                  <p className="text-xs text-[#D9CFB6] line-clamp-2 leading-relaxed">
                    {event.centerOfAttraction}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-1.5 mb-2">
                  {event.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#D9CFB6]/80">
                      <Check className="w-3.5 h-3.5 text-[#C1602D] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Poster CTA Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); onSelectEvent(event); }}
                className="w-full btn-rust py-2.5 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
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
