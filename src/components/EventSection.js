'use client';
import { Calendar, MapPin, Check, ArrowUpRight, Flame } from 'lucide-react';

export default function EventSection({ events, onSelectEvent }) {
  return (
    <section id="events-2026" className="py-20 px-4 lg:px-8 relative max-w-7xl mx-auto border-t border-[#F5EFE6]/10">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C85A28] mb-2">
            <Flame className="w-4 h-4 fill-current" /> 2026 Event Calendar & Stays
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F5EFE6] tracking-tight">
            Northeast India <span className="text-[#C85A28]">2026 Festival Lineup</span>
          </h2>
        </div>
        <p className="text-[#EDE7D9] text-sm max-w-md mt-4 md:mt-0 font-normal">
          Book certified Bass Woods campsites, luxury glamping domes, and transport packages directly synced with official festival dates.
        </p>
      </div>

      {/* Grid of Events with Photography Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="bg-[#1A3023] rounded-2xl overflow-hidden flex flex-col justify-between border border-[#F5EFE6]/15 hover:border-[#C85A28] transition-all group cursor-pointer shadow-xl"
            onClick={() => onSelectEvent(event)}
          >
            {/* Top Image Banner */}
            <div className="relative h-56 w-full overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14251B] via-black/30 to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#C85A28] text-[#F5EFE6] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  {event.badge}
                </span>
              </div>

              <div className="absolute top-4 right-4 bg-[#14251B]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#F5EFE6]/15 text-xs font-semibold text-[#E0A83E]">
                Starting {event.priceStarting}
              </div>

              {/* Event Title Over Image */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-1.5 text-xs text-[#EDE7D9] mb-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#C85A28]" /> {event.location}
                </div>
                <h3 className="text-xl font-bold text-[#F5EFE6] leading-snug group-hover:text-[#C85A28] transition-colors">
                  {event.title}
                </h3>
              </div>
            </div>

            {/* Event Details Content */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#14251B] border border-[#F5EFE6]/15 px-3 py-1.5 rounded-xl text-xs text-[#F5EFE6] font-semibold mb-4 w-full">
                  <Calendar className="w-4 h-4 text-[#C85A28]" />
                  <span>{event.dates}</span>
                </div>

                <div className="mb-4">
                  <span className="text-[11px] uppercase tracking-wider text-[#E0A83E] font-bold block mb-1">
                    Center of Attraction
                  </span>
                  <p className="text-sm text-[#EDE7D9] line-clamp-2 leading-relaxed font-normal">
                    {event.centerOfAttraction}
                  </p>
                </div>

                {/* Features Pill List */}
                <div className="space-y-1.5 mb-6">
                  {event.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#EDE7D9]/80">
                      <Check className="w-3.5 h-3.5 text-[#C85A28] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); onSelectEvent(event); }}
                className="w-full btn-terracotta py-3 rounded-xl text-xs uppercase font-extrabold tracking-wider flex items-center justify-center gap-2"
              >
                Reserve Campsite & Pass <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
