'use client';
import { useState } from 'react';
import LogoMark from './LogoMark';
import { CheckCircle2, Send } from 'lucide-react';

export default function LeadQuotePanel({ selectedEvent, selectedCamp }) {
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
    <section id="custom-quote-panel" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto border-t border-[#1B2E22]/15">
      
      {/* Two-Column Panel: Left Light Cream (#EDE4D3), Right Solid Dark Forest (#1B2E22) */}
      <div className="bg-[#EDE4D3] rounded-lg overflow-hidden border border-[#1B2E22]/20 grid grid-cols-1 lg:grid-cols-12 shadow-md">
        
        {/* LEFT COLUMN: Copy + Trust Checklist (Light Cream Surface #EDE4D3) */}
        <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6 text-[#1B2E22]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#1B2E22] p-1.5 rounded-lg">
                <LogoMark className="w-10 h-10" />
              </div>
              <div>
                <span className="text-[11px] uppercase font-bold text-[#C1602D] tracking-widest block">
                  Priority 2026 Reservation
                </span>
                <span className="font-serif text-2xl font-bold text-[#1B2E22]">
                  Bass Woods Concierge
                </span>
              </div>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1B2E22] leading-tight mb-4">
              Get Your Custom Festival Travel Quote
            </h2>

            <p className="text-sm text-[#3D5244] leading-relaxed max-w-prose mb-8">
              Whether you are planning a solo back-packer trip to Ziro Valley or bringing a group squad to Nagaland&apos;s Hornbill Festival, we design your stay, passes, and transport with 100% transparency.
            </p>

            {/* Checklist of Trust Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C1602D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1B2E22]">Verified Local Hosts & 24/7 Security</h4>
                  <p className="text-xs text-[#3D5244]">Curated campsites with fenced perimeters, solar lanterns, and verified native caretakers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C1602D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1B2E22]">Guwahati SUV & Airport Shuttles</h4>
                  <p className="text-xs text-[#3D5244]">Group travel convoys direct from airport/station straight to your campsite pitch.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C1602D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1B2E22]">Transparent Pricing Tiers (₹500 to ₹2,000+)</h4>
                  <p className="text-xs text-[#3D5244]">From bring-your-own-tent slots to luxury geodesic domes with heated blankets.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C1602D] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#1B2E22]">Direct WhatsApp Support</h4>
                  <p className="text-xs text-[#3D5244]">Fast responses from our Northeast operations managers.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#1B2E22]/15 text-xs text-[#3D5244]">
            © 2026 Bass Woods Camp. All inquiries log directly into our operations hub.
          </div>
        </div>

        {/* RIGHT COLUMN: Form on Solid Dark Forest Green Fill (#1B2E22) */}
        <div className="lg:col-span-6 bg-[#1B2E22] p-8 sm:p-12 text-[#F6F1E7] flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#1B2E22]">
          
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-[#E0A83E]/20 text-[#E0A83E] rounded-full flex items-center justify-center mx-auto border border-[#E0A83E]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#F6F1E7]">Quote Request Received!</h3>
              <p className="text-sm text-[#EDE4D3] max-w-xs mx-auto leading-relaxed">
                Your 2026 festival campsite entry has been sent to our travel team. We will message you on WhatsApp shortly with full pricing details.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-mustard-light px-6 py-2.5 rounded text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-[#F6F1E7] mb-4">
                Travel Inquiry Form
              </h3>

              {/* Full Name */}
              <div>
                <label className="text-xs font-semibold text-[#EDE4D3] block mb-1">Traveler Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#223A2C] border border-[#F6F1E7]/20 focus:border-[#E0A83E] rounded px-4 py-2.5 text-sm text-[#F6F1E7] placeholder:text-[#EDE4D3]/40 focus:outline-none"
                />
              </div>

              {/* Phone & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-[#EDE4D3] block mb-1">WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#223A2C] border border-[#F6F1E7]/20 focus:border-[#E0A83E] rounded px-4 py-2.5 text-sm text-[#F6F1E7] placeholder:text-[#EDE4D3]/40 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#EDE4D3] block mb-1">Group Size</label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#223A2C] border border-[#F6F1E7]/20 focus:border-[#E0A83E] rounded px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none cursor-pointer"
                  >
                    <option value="Solo Traveler">Solo Traveler</option>
                    <option value="2 Guests">2 Guests (Duo)</option>
                    <option value="3-5 Guests">3-5 Guests (Group)</option>
                    <option value="6+ Guests">6+ Guests (Squad)</option>
                  </select>
                </div>
              </div>

              {/* Event Choice */}
              <div>
                <label className="text-xs font-semibold text-[#EDE4D3] block mb-1">Target Festival / Event 2026</label>
                <select 
                  value={formData.event}
                  onChange={(e) => setFormData({ ...formData, event: e.target.value })}
                  className="w-full bg-[#223A2C] border border-[#F6F1E7]/20 focus:border-[#E0A83E] rounded px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none cursor-pointer"
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
                <label className="text-xs font-semibold text-[#EDE4D3] block mb-1">Campsite & Stay Preference</label>
                <select 
                  value={formData.stayPreference}
                  onChange={(e) => setFormData({ ...formData, stayPreference: e.target.value })}
                  className="w-full bg-[#223A2C] border border-[#F6F1E7]/20 focus:border-[#E0A83E] rounded px-4 py-2.5 text-sm text-[#F6F1E7] focus:outline-none cursor-pointer"
                >
                  <option value="Budget Alpine Tent (₹500 - ₹700/night)">Budget Alpine Tent (₹500 - ₹700/night)</option>
                  <option value="Standard Glamping Tent (₹1,000 - ₹1,500/night)">Standard Glamping Tent (₹1,000 - ₹1,500/night)</option>
                  <option value="Luxury Geodesic Dome (₹2,200/night)">Luxury Geodesic Dome (₹2,200/night)</option>
                  <option value="Authentic Eco-Cottage Suite (₹1,950/night)">Authentic Eco-Cottage Suite (₹1,950/night)</option>
                </select>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={loading}
                className="w-full btn-rust-light py-3 rounded text-sm font-bold flex items-center justify-center gap-2 mt-4 cursor-pointer"
              >
                {loading ? 'Sending Request...' : (
                  <>
                    <Send className="w-4 h-4" /> Request Custom Itinerary Quote
                  </>
                )}
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
