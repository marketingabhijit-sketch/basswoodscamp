'use client';
import { useState } from 'react';
import { Tent, Star, MapPin, Filter, ArrowRight } from 'lucide-react';

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
    <section id="campsites" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto border-t border-[#F1EAD9]/10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#5C7C93] block mb-2">
            Curated Accommodation Directory
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F1EAD9]">
            Campsites & Glamping Stays
          </h2>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-[#D9CFB6]">
          Ranging from <span className="text-[#E0A83E] font-bold">₹500</span> budget spots to <span className="text-[#C1602D] font-bold">₹2,000+</span> VIP luxury domes.
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-[#223A2C] p-4 rounded-md border border-[#F1EAD9]/15 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-[#E0A83E] text-[#15140F]' 
                  : 'bg-[#1B2E22] text-[#D9CFB6] hover:bg-[#15140F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Price Slider */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-end">
          <div className="flex items-center gap-2 text-xs text-[#D9CFB6] font-medium">
            <Filter className="w-4 h-4 text-[#E0A83E]" /> Max Price:
            <span className="text-[#E0A83E] font-bold text-sm">₹{maxPrice}</span>
          </div>
          <input 
            type="range" 
            min="500" 
            max="3000" 
            step="100" 
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="accent-[#C1602D] cursor-pointer w-32"
          />
        </div>

      </div>

      {/* Campsites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCampsites.map(camp => (
          <div 
            key={camp.id} 
            className="woodcut-panel rounded-lg overflow-hidden flex flex-col justify-between border border-[#F1EAD9]/15 group hover:border-[#C1602D] transition-colors"
          >
            {/* Image Banner */}
            <div className="relative h-48 w-full overflow-hidden border-b border-[#F1EAD9]/10">
              <img 
                src={camp.image} 
                alt={camp.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15140F] via-transparent to-transparent" />
              
              <div className="absolute top-3 left-3 bg-[#15140F]/80 px-2.5 py-1 rounded text-xs font-medium text-[#E0A83E] border border-[#F1EAD9]/20">
                {camp.category}
              </div>

              <div className="absolute top-3 right-3 bg-[#15140F]/80 px-2.5 py-1 rounded text-xs font-bold text-[#E0A83E] flex items-center gap-1 border border-[#F1EAD9]/20">
                <Star className="w-3.5 h-3.5 fill-current" /> {camp.rating}
              </div>

              <div className="absolute bottom-3 left-3 text-xs text-[#F1EAD9] font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C1602D]" /> {camp.location}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#F1EAD9] mb-1 group-hover:text-[#E0A83E] transition-colors">
                  {camp.name}
                </h3>
                <div className="text-xs text-[#5C7C93] font-medium mb-3 italic">
                  Vibe: {camp.vibe}
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {camp.amenities.map((item, idx) => (
                    <span key={idx} className="text-[11px] bg-[#1B2E22] border border-[#F1EAD9]/15 px-2.5 py-1 rounded text-[#D9CFB6]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-[#F1EAD9]/15">
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#D9CFB6]/60">Rate</div>
                  <div className="text-lg font-black text-[#E0A83E]">{camp.priceLabel}</div>
                </div>

                <button 
                  onClick={() => onSelectCamp(camp)}
                  className="btn-rust px-4 py-2 rounded text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  Book Stay <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
