'use client';
import { useState } from 'react';
import LogoMark from './LogoMark';
import { X, CheckCircle2, Send, ShieldCheck } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#15140F]/80 backdrop-blur-sm transition-all duration-300">
      
      {/* Modal Light Cream Panel Container */}
      <div className="relative w-full max-w-4xl cream-paper-card rounded-lg overflow-hidden border-2 border-[#15140F] shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded bg-[#15140F]/10 hover:bg-[#C1602D] hover:text-[#F1EAD9] text-[#15140F] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT COLUMN: Trust & Information */}
        <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LogoMark className="w-10 h-10" />
              <div>
                <span className="font-serif font-bold text-lg text-[#15140F] leading-tight block">Bass Woods</span>
                <span className="text-[10px] uppercase font-bold text-[#C1602D] tracking-wider block">Travel Concierge</span>
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#15140F] leading-snug mb-3">
              Get Your Custom Festival Travel Quote
            </h3>

            <p className="text-xs text-[#15140F]/80 leading-relaxed mb-4">
              Connect directly with our Northeast travel consultants for verified campsites, glamping domes, and SUV shuttles.
            </p>

            <div className="space-y-2.5 text-xs text-[#15140F]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C1602D] shrink-0" />
                <span>Verified Native Campsite Caretakers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C1602D] shrink-0" />
                <span>Guwahati SUV & Shuttle Convoys</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C1602D] shrink-0" />
                <span>Flexible Tiers: ₹500 to ₹2,000+</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-[#15140F]/60 pt-4 border-t border-[#15140F]/15">
            Logs directly into our operations hub.
          </div>
        </div>

        {/* RIGHT COLUMN: Solid Forest Green Form Fill */}
        <div className="md:col-span-7 bg-[#1B2E22] p-6 sm:p-8 text-[#F1EAD9] flex flex-col justify-center border-t md:border-t-0 md:border-l-2 border-[#15140F]">
          
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 bg-[#E0A83E]/20 text-[#E0A83E] rounded-full flex items-center justify-center mx-auto border border-[#E0A83E]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-[#F1EAD9]">Entry Confirmed</h4>
              <p className="text-xs text-[#D9CFB6] max-w-xs mx-auto">
                Your request has been logged. Our travel team will reach out via WhatsApp shortly!
              </p>
              <button
                onClick={onClose}
                className="btn-mustard px-6 py-2 rounded text-xs font-bold uppercase tracking-wider cursor-pointer mt-2"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <h4 className="font-serif text-xl font-bold text-[#F1EAD9] mb-2">
                Reserve 2026 Stay
              </h4>

              <div>
                <label className="text-xs font-medium text-[#D9CFB6] block mb-1">Traveler Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#223A2C] border border-[#F1EAD9]/20 focus:border-[#E0A83E] rounded px-3 py-2 text-xs text-[#F1EAD9] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-[#D9CFB6] block mb-1">WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#223A2C] border border-[#F1EAD9]/20 focus:border-[#E0A83E] rounded px-3 py-2 text-xs text-[#F1EAD9] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[#D9CFB6] block mb-1">Group Size</label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#223A2C] border border-[#F1EAD9]/20 focus:border-[#E0A83E] rounded px-3 py-2 text-xs text-[#F1EAD9] focus:outline-none cursor-pointer"
                  >
                    <option value="Solo Traveler">Solo Traveler</option>
                    <option value="2 Guests">2 Guests (Duo)</option>
                    <option value="3-5 Guests">3-5 Guests (Group)</option>
                    <option value="6+ Guests">6+ Guests (Squad)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-[#D9CFB6] block mb-1">Target Festival</label>
                <select 
                  value={formData.event}
                  onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                  className="w-full bg-[#223A2C] border border-[#F1EAD9]/20 focus:border-[#E0A83E] rounded px-3 py-2 text-xs text-[#F1EAD9] focus:outline-none cursor-pointer"
                >
                  <option value="Ziro Festival of Music 2026">Ziro Festival of Music (Arunachal Pradesh)</option>
                  <option value="Shillong Cherry Blossom Festival 2026">Shillong Cherry Blossom Festival (Meghalaya)</option>
                  <option value="Hornbill Festival 2026">Hornbill Festival (Nagaland)</option>
                  <option value="Orange Festival of Adventure & Music 2026">Orange Festival Dambuk (Arunachal Pradesh)</option>
                  <option value="Mechuka Adventure Festival 2026">Mechuka Adventure Festival (Arunachal Pradesh)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-[#D9CFB6] block mb-1">Stay Preference</label>
                <select 
                  value={formData.stayPreference}
                  onChange={(e) => setFormData({ ...formData, stayPreference: e.target.value })}
                  className="w-full bg-[#223A2C] border border-[#F1EAD9]/20 focus:border-[#E0A83E] rounded px-3 py-2 text-xs text-[#F1EAD9] focus:outline-none cursor-pointer"
                >
                  <option value="Budget Alpine Tent (₹500 - ₹700/night)">Budget Alpine Tent (₹500 - ₹700/night)</option>
                  <option value="Standard Glamping Tent (₹1,000 - ₹1,500/night)">Standard Glamping Tent (₹1,000 - ₹1,500/night)</option>
                  <option value="Luxury Geodesic Dome (₹2,200/night)">Luxury Geodesic Dome (₹2,200/night)</option>
                  <option value="Authentic Eco-Cottage Suite (₹1,950/night)">Authentic Eco-Cottage Suite (₹1,950/night)</option>
                </select>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full btn-rust py-2.5 rounded text-xs font-bold flex items-center justify-center gap-2 mt-2 cursor-pointer"
              >
                {loading ? 'Submitting...' : (
                  <>
                    <Send className="w-3.5 h-3.5" /> Submit Custom Quote Request
                  </>
                )}
              </button>
            </form>
          )}

        </div>

      </div>

    </div>
  );
}
