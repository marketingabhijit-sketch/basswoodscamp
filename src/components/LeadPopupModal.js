'use client';
import { useState } from 'react';
import Image from 'next/image';
import { X, Sparkles, Send, CheckCircle2, Tent, ShieldCheck, Flame } from 'lucide-react';

export default function LeadPopupModal({ isOpen, onClose, selectedEvent, selectedCamp }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    event: selectedEvent ? selectedEvent.title : 'Ziro Festival of Music 2026',
    stayPreference: selectedCamp ? `${selectedCamp.name} (${selectedCamp.priceLabel})` : 'Luxury Glamping Dome (₹2,200/night)',
    guests: '2 Guests',
    budget: '₹1,000 - ₹2,000+',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Submission failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300 animate-fadeIn">
      {/* Modal Card Box */}
      <div className="relative w-full max-w-lg glass-panel bg-[#0d1420]/95 border border-[#8cff00]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(140,255,0,0.25)] transition-all duration-300 transform scale-100 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-[#8cff00] hover:text-black text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Thank You State */
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#8cff00]/20 text-[#8cff00] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#8cff00]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">Vibe Confirmed!</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-xs mx-auto">
              Your 2026 festival campsite request has been logged into our Bass Woods Concierge portal. Our team will ping you on WhatsApp shortly!
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="neon-glow-btn px-6 py-3 rounded-2xl text-sm font-extrabold w-full cursor-pointer"
            >
              Continue Exploring Website
            </button>
          </div>
        ) : (
          /* Form Content */
          <div>
            {/* Header with Emblem */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-black/60 border border-[#8cff00]/40 p-1 flex items-center justify-center shrink-0">
                <Image src="/emblem.png" alt="Bass Woods" width={40} height={40} className="object-contain" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-[#8cff00] flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-current" /> Priority 2026 Reservation
                </span>
                <h3 className="text-xl font-extrabold text-white leading-tight">
                  Get Custom Festival & Campsite Quote
                </h3>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Traveler Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Rahul Verma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 focus:border-[#8cff00] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1">WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 focus:border-[#8cff00] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1">Group Size</label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 focus:border-[#8cff00] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Solo Traveler">Solo Traveler</option>
                    <option value="2 Guests">2 Guests (Duo)</option>
                    <option value="3-5 Guests">3-5 Guests (Group)</option>
                    <option value="6+ Guests">6+ Guests (Squad)</option>
                  </select>
                </div>
              </div>

              {/* Target Festival */}
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Target Festival / Event 2026</label>
                <select 
                  value={formData.event}
                  onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 focus:border-[#8cff00] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="Ziro Festival of Music 2026">Ziro Festival of Music (Arunachal Pradesh)</option>
                  <option value="Shillong Cherry Blossom Festival 2026">Shillong Cherry Blossom Festival (Meghalaya)</option>
                  <option value="Hornbill Festival 2026">Hornbill Festival (Nagaland)</option>
                  <option value="Orange Festival of Adventure & Music 2026">Orange Festival Dambuk (Arunachal Pradesh)</option>
                  <option value="Mechuka Adventure Festival 2026">Mechuka Adventure Festival (Arunachal Pradesh)</option>
                </select>
              </div>

              {/* Stay Preference */}
              <div>
                <label className="text-xs font-semibold text-gray-300 block mb-1">Campsite & Stay Preference</label>
                <select 
                  value={formData.stayPreference}
                  onChange={(e) => setFormData({ ...formData, stayPreference: e.target.value })}
                  className="w-full bg-black/50 border border-white/10 focus:border-[#8cff00] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="Budget Alpine Tent (₹500 - ₹700/night)">Budget Alpine Tent (₹500 - ₹700/night)</option>
                  <option value="Standard Glamping Tent (₹1,000 - ₹1,500/night)">Standard Glamping Tent (₹1,000 - ₹1,500/night)</option>
                  <option value="Luxury Geodesic Dome (₹2,200/night)">Luxury Geodesic Dome (₹2,200/night)</option>
                  <option value="Authentic Eco-Cottage Suite (₹1,950/night)">Authentic Eco-Cottage Suite (₹1,950/night)</option>
                  <option value="Cloudland Glasshouse Villa (₹2,500/night)">Cloudland Glasshouse Villa (₹2,500/night)</option>
                </select>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full neon-glow-btn py-3.5 rounded-2xl text-sm font-extrabold flex items-center justify-center gap-2 mt-2 cursor-pointer"
              >
                {loading ? 'Logging Entry...' : (
                  <>
                    <Send className="w-4 h-4" /> Lock In Custom Quotation
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
