'use client';
import { useState } from 'react';
import { Tent, Star, MapPin, Check, Filter, Zap, ArrowUpRight } from 'lucide-react';

export default function CampsiteCatalog({ campsites, onSelectCamp }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(3000);

  const categories = ['All', 'Alpine Tents', 'Luxury Domes', 'Cottages', 'Villas', 'Campsites'];

  const filteredCampsites = campsites.filter(camp => {
    const matchesCategory = selectedCategory === 'All' || camp.category === selectedCategory;
    const matchesPrice = camp.price <= maxPrice;
    return matchesCategory && matchesPrice;
  });

  return (
    <section id="campsites" className="py-20 px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">
            <Tent className="w-4 h-4" /> Curated Accommodation Directory
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Campsites & <span className="text-gradient-neon">Glamping Stays</span>
          </h2>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-gray-400">
          Ranging from <span className="text-[#8cff00] font-bold">₹500</span> budget spots to <span className="text-purple-400 font-bold">₹2,000+</span> VIP luxury domes.
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="glass-panel p-4 rounded-3xl mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-[#8cff00] text-black shadow-[0_0_15px_rgba(140,255,0,0.4)]' 
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Price Slider Filter */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-end">
          <div className="flex items-center gap-2 text-xs text-gray-300 font-medium">
            <Filter className="w-4 h-4 text-[#8cff00]" /> Max Price:
            <span className="text-[#8cff00] font-bold text-sm">₹{maxPrice}</span>
          </div>
          <input 
            type="range" 
            min="500" 
            max="3000" 
            step="100" 
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="accent-[#8cff00] cursor-pointer w-32"
          />
        </div>
      </div>

      {/* Campsites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCampsites.map(camp => (
          <div 
            key={camp.id} 
            className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group"
          >
            {/* Image Header */}
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={camp.image} 
                alt={camp.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070a0f] via-transparent to-transparent" />
              
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 border border-white/10">
                {camp.category}
              </div>

              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-yellow-400 flex items-center gap-1 border border-yellow-400/20">
                <Star className="w-3.5 h-3.5 fill-current" /> {camp.rating}
              </div>

              <div className="absolute bottom-3 left-3">
                <span className="text-xs text-gray-300 font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8cff00]" /> {camp.location}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#8cff00] transition-colors">
                  {camp.name}
                </h3>
                <div className="text-xs text-purple-300 font-medium mb-3 italic">
                  Vibe: {camp.vibe}
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {camp.amenities.map((item, idx) => (
                    <span key={idx} className="text-[11px] bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <div className="text-xs text-gray-400">Rate</div>
                  <div className="text-lg font-black text-[#8cff00]">{camp.priceLabel}</div>
                </div>

                <button 
                  onClick={() => onSelectCamp(camp)}
                  className="px-4 py-2 rounded-xl neon-glow-btn text-xs font-extrabold flex items-center gap-1.5 cursor-pointer"
                >
                  Book Stay <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
