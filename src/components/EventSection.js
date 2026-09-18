'use client';
import { Calendar, MapPin, Sparkles, Tag, CheckCircle2, Flame, ArrowUpRight } from 'lucide-react';

export default function EventSection({ events, onSelectEvent }) {
  return (
    <section id="events-2026" className="py-20 px-4 lg:px-8 relative max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8cff00] mb-2">
            <Flame className="w-4 h-4 fill-current" /> 2026 Event Calendar & Stays
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Northeast India <span className="text-gradient-neon">2026 Festival Lineup</span>
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-md mt-4 md:mt-0">
          Book certified Bass Woods campsites, luxury glamping domes, and transport packages directly synced with official festival dates.
        </p>
      </div>

      {/* Grid of Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group cursor-pointer"
            onClick={() => onSelectEvent(event)}
          >
            {/* Top Image Banner */}
            <div className="relative h-56 w-full overflow-hidden">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a0f] via-black/30 to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-[#8cff00] text-black text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  {event.badge}
                </span>
              </div>

              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-semibold text-cyan-300">
                Starting {event.priceStarting}
              </div>

              {/* Event Title Over Image */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-1.5 text-xs text-gray-300 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8cff00]" /> {event.location}
                </div>
                <h3 className="text-xl font-bold text-white leading-snug group-hover:text-[#8cff00] transition-colors">
                  {event.title}
                </h3>
              </div>
            </div>

            {/* Event Details Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl text-xs text-gray-200 font-semibold mb-4 w-full">
                  <Calendar className="w-4 h-4 text-[#8cff00]" />
                  <span>{event.dates}</span>
                </div>

                <div className="mb-4">
                  <span className="text-[11px] uppercase tracking-wider text-purple-400 font-bold block mb-1">
                    Center of Attraction
                  </span>
                  <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
                    {event.centerOfAttraction}
                  </p>
                </div>

                {/* Features Pill List */}
                <div className="space-y-1.5 mb-6">
                  {event.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8cff00] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={(e) => { e.stopPropagation(); onSelectEvent(event); }}
                className="w-full py-3 rounded-2xl bg-white/10 hover:bg-[#8cff00] hover:text-black text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
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
