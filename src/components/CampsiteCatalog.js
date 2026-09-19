'use client';
import { useState } from 'react';
import { Tent, Star, MapPin, Filter, ArrowUpRight } from 'lucide-react';

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
    <section id="campsites" className="py-20 px-4 lg:px-8 max-w-7xl mx-auto border-t border-[#F5EFE6]/10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#E0A83E] mb-2">
            <Tent className="w-4 h-4" /> Curated Accommodation Directory
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F5EFE6] tracking-tight">
            Campsites & <span className="text-[#C85A28]">Glamping Stays</span>
          </h2>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-[#EDE7D9]">
          Ranging from <span className="text-[#C85A28] font-bold">₹500</span> budget spots to <span className="text-[#E0A83E] font-bold">₹2,000+</span> VIP luxury domes.
        </div>
      </div>

      {/* Filter Controls Bar (MATCHING EXACT USER SCREENSHOT) */}
      <div className="bg-[#F5EFE6] p-3 md:p-4 rounded-2xl shadow-xl border border-[#F5EFE6]/30 mb-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[#14251B]">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat 
                  ? 'bg-[#C85A28] text-[#F5EFE6] shadow-md' 
                  : 'bg-[#EDE7D9] text-[#14251B] hover:bg-[#14251B] hover:text-[#F5EFE6]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Price Slider Filter */}
        <div className="flex items-center gap-4 w-full md:w-auto justify-end">
          <div className="flex items-center gap-2 text-xs text-[#14251B] font-bold">
            <Filter className="w-4 h-4 text-[#C85A28]" /> Max Price:
            <span className="text-[#C85A28] font-extrabold text-sm">₹{maxPrice}</span>
          </div>
          <input 
            type="range" 
            min="500" 
            max="3000" 
            step="100" 
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="accent-[#C85A28] cursor-pointer w-36 h-2 bg-[#EDE7D9] rounded-lg"
          />
        </div>

      </div>

      {/* Campsites Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCampsites.map(camp => (
          <div 
            key={camp.id} 
            className="bg-[#1A3023] rounded-2xl overflow-hidden flex flex-col justify-between border border-[#F5EFE6]/15 hover:border-[#C85A28] transition-all group shadow-lg"
          >
            {/* Image Header */}
            <div className="relative h-48 w-full overflow-hidden">
              <img 
                src={camp.image} 
                alt={camp.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14251B] via-transparent to-transparent" />
              
              <div className="absolute top-3 left-3 bg-[#14251B]/80 px-3 py-1 rounded-full text-xs font-semibold text-[#E0A83E] border border-[#F5EFE6]/15">
                {camp.category}
              </div>

              <div className="absolute top-3 right-3 bg-[#14251B]/80 px-2.5 py-1 rounded-full text-xs font-bold text-amber-400 flex items-center gap-1 border border-[#F5EFE6]/15">
                <Star className="w-3.5 h-3.5 fill-current" /> {camp.rating}
              </div>

              <div className="absolute bottom-3 left-3">
                <span className="text-xs text-[#F5EFE6] font-medium flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C85A28]" /> {camp.location}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#F5EFE6] mb-1 group-hover:text-[#C85A28] transition-colors">
                  {camp.name}
                </h3>
                <div className="text-xs text-[#E0A83E] font-medium mb-3 italic">
                  Vibe: {camp.vibe}
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {camp.amenities.map((item, idx) => (
                    <span key={idx} className="text-[11px] bg-[#14251B] border border-[#F5EFE6]/15 px-2.5 py-1 rounded-lg text-[#EDE7D9]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-4 border-t border-[#F5EFE6]/15">
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#EDE7D9]/60">Rate</div>
                  <div className="text-lg font-black text-[#C85A28]">{camp.priceLabel}</div>
                </div>

                <button 
                  onClick={() => onSelectCamp(camp)}
                  className="btn-terracotta px-4 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 cursor-pointer shadow-md"
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
