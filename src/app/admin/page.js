'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, Palette, Calculator, Tent, Plus, CheckCircle2, 
  Clock, ArrowLeft, PhoneCall, RefreshCw, ChevronRight, FileText, Send, Sparkles, Filter
} from 'lucide-react';

export default function AdminPortal() {
  const [activeTab, setActiveTab] = useState('leads'); // 'leads', 'creative', 'quotes', 'inventory'
  
  // State variables
  const [leads, setLeads] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [campsites, setCampsites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Quote Calculator State
  const [quoteInput, setQuoteInput] = useState({
    clientName: '',
    eventName: 'Ziro Festival of Music 2026',
    guests: 2,
    nights: 3,
    stayRate: 1200,
    includeTransport: true,
    includePasses: true,
    includeMeals: false
  });
  const [calculatedQuote, setCalculatedQuote] = useState(null);

  // Fetch initial data
  const fetchData = async () => {
    setLoading(true);
    try {
      const [leadsRes, creativeRes, campsRes] = await Promise.all([
        fetch('/api/inquiries').then(r => r.json()),
        fetch('/api/creative').then(r => r.json()),
        fetch('/api/campsites').then(r => r.json())
      ]);

      if (leadsRes.success) setLeads(leadsRes.leads);
      if (creativeRes.success) setTasks(creativeRes.tasks);
      if (campsRes.success) setCampsites(campsRes.campsites);
    } catch (err) {
      console.error("Failed to load admin data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Update lead status
  const updateLeadStatus = (leadId, newStatus) => {
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
  };

  // Move creative task stage
  const moveTaskStage = async (taskId, newStage) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, stage: newStage } : t));
    await fetch('/api/creative', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'UPDATE_STAGE', id: taskId, newStage })
    });
  };

  // Calculate Quote
  const handleCalculateQuote = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quoteInput)
      });
      const data = await res.json();
      if (data.success) {
        setCalculatedQuote(data.quotation);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#070a0f] text-gray-100 flex flex-col">
      {/* Top Header */}
      <header className="glass-panel border-b border-white/10 px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black border border-[#8cff00]/40 p-1">
                <Image src="/emblem.png" alt="Bass Woods" width={36} height={36} className="object-contain" />
              </div>
              <div>
                <h1 className="font-black text-xl text-white tracking-wide flex items-center gap-2">
                  BASSWOODS <span className="text-xs bg-[#8cff00] text-black px-2 py-0.5 rounded-full uppercase font-bold">Operations Hub</span>
                </h1>
                <p className="text-[11px] text-cyan-400">Startup Creative & Lead Management Portal</p>
              </div>
            </div>
          </div>

          <button 
            onClick={fetchData}
            className="flex items-center gap-2 text-xs bg-white/5 hover:bg-white/10 px-3 py-2 rounded-xl border border-white/10 text-gray-300 cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Refresh Data
          </button>
        </div>
      </header>

      {/* Main Admin Dashboard */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 lg:px-8 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'leads'
                ? 'bg-[#8cff00] text-black shadow-[0_0_20px_rgba(140,255,0,0.3)]'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            <Users className="w-4 h-4" /> Live Website Inquiries ({leads.length})
          </button>

          <button
            onClick={() => setActiveTab('creative')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'creative'
                ? 'bg-[#8cff00] text-black shadow-[0_0_20px_rgba(140,255,0,0.3)]'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            <Palette className="w-4 h-4" /> Creative & Asset Pipeline ({tasks.length})
          </button>

          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'quotes'
                ? 'bg-[#8cff00] text-black shadow-[0_0_20px_rgba(140,255,0,0.3)]'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            <Calculator className="w-4 h-4" /> Instant Quote Generator
          </button>

          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-5 py-3 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'inventory'
                ? 'bg-[#8cff00] text-black shadow-[0_0_20px_rgba(140,255,0,0.3)]'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            <Tent className="w-4 h-4" /> Campsites & Stays Inventory ({campsites.length})
          </button>
        </div>

        {/* TAB 1: INQUIRIES & LEAD CRM */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5 text-[#8cff00]" /> Website Leads & Form Entries
              </h2>
              <span className="text-xs text-gray-400">Auto-captured from frontend popup modal</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {leads.map((lead) => (
                <div key={lead.id} className="glass-card p-6 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/10">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-extrabold text-white">{lead.name}</h3>
                      <span className={`text-[10px] uppercase font-black px-3 py-1 rounded-full border ${
                        lead.status === 'New' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' :
                        lead.status === 'Quoted' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' :
                        'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                      }`}>
                        {lead.status}
                      </span>
                      <span className="text-xs text-gray-400">{lead.timestamp}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-gray-300">
                      <div><strong className="text-gray-400">Target Event:</strong> {lead.event}</div>
                      <div><strong className="text-gray-400">Stay Style:</strong> {lead.stayPreference}</div>
                      <div><strong className="text-gray-400">Guests:</strong> {lead.guests}</div>
                    </div>

                    {lead.notes && (
                      <div className="text-xs text-purple-300 bg-purple-500/10 p-2.5 rounded-xl border border-purple-500/20">
                        {lead.notes}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
                    {/* Status Dropdown */}
                    <select
                      value={lead.status}
                      onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                      className="bg-black/60 border border-white/10 text-xs text-gray-200 rounded-xl px-3 py-2 focus:outline-none cursor-pointer w-full sm:w-auto"
                    >
                      <option value="New">Mark New</option>
                      <option value="Contacted">Mark Contacted</option>
                      <option value="Quoted">Mark Quoted</option>
                      <option value="Booked">Mark Booked</option>
                    </select>

                    <a
                      href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(lead.name)},%20this%20is%20Bass%20Woods%20Camp!%20We%20received%20your%20inquiry%20for%20${encodeURIComponent(lead.event)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-glow-btn px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5" /> WhatsApp Lead
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: CREATIVE & ASSET PIPELINE KANBAN */}
        {activeTab === 'creative' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Palette className="w-5 h-5 text-purple-400" /> Creative & Media Approval System
                </h2>
                <p className="text-xs text-gray-400">Track photos, designs, quotations, and content release</p>
              </div>
            </div>

            {/* Kanban Columns */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 overflow-x-auto">
              {['Reference Photos', 'Selected Design', 'Quote Approved', 'Published'].map(columnStage => (
                <div key={columnStage} className="glass-panel p-4 rounded-3xl flex flex-col justify-start min-h-[500px]">
                  <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                    <span className="text-xs font-black uppercase text-gray-200 tracking-wider">
                      {columnStage}
                    </span>
                    <span className="text-xs font-bold bg-white/10 text-[#8cff00] px-2.5 py-0.5 rounded-full">
                      {tasks.filter(t => t.stage === columnStage).length}
                    </span>
                  </div>

                  <div className="space-y-3 flex-1">
                    {tasks.filter(t => t.stage === columnStage).map(task => (
                      <div key={task.id} className="glass-card p-4 rounded-2xl border border-white/10 space-y-3">
                        {task.referencePhotos && task.referencePhotos.length > 0 && (
                          <img 
                            src={task.referencePhotos[0]} 
                            alt={task.title}
                            className="w-full h-28 object-cover rounded-xl border border-white/10"
                          />
                        )}
                        <h4 className="text-sm font-extrabold text-white">{task.title}</h4>
                        <div className="text-[11px] text-gray-400 flex items-center justify-between">
                          <span>{task.type}</span>
                          <strong className="text-[#8cff00]">{task.budget}</strong>
                        </div>
                        <p className="text-[11px] text-gray-300 italic bg-black/40 p-2 rounded-lg">
                          &quot;{task.notes}&quot;
                        </p>

                        {/* Move Actions */}
                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px]">
                          {columnStage !== 'Reference Photos' && (
                            <button 
                              onClick={() => moveTaskStage(task.id, 'Reference Photos')}
                              className="text-gray-400 hover:text-white"
                            >
                              ← Back
                            </button>
                          )}
                          {columnStage !== 'Published' && (
                            <button 
                              onClick={() => {
                                const stages = ['Reference Photos', 'Selected Design', 'Quote Approved', 'Published'];
                                const currIdx = stages.indexOf(columnStage);
                                moveTaskStage(task.id, stages[currIdx + 1]);
                              }}
                              className="text-[#8cff00] font-bold hover:underline ml-auto"
                            >
                              Advance →
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: INSTANT QUOTE GENERATOR */}
        {activeTab === 'quotes' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10">
              <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-cyan-400" /> Instant Custom Package Estimator
              </h2>
              <p className="text-xs text-gray-400 mb-6">Generate itemized quotes for group travelers & campsites</p>

              <form onSubmit={handleCalculateQuote} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1">Client / Group Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Ananya Sharma Group"
                    value={quoteInput.clientName}
                    onChange={(e) => setQuoteInput({ ...quoteInput, clientName: e.target.value })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">Number of Guests</label>
                    <input 
                      type="number" 
                      min="1"
                      value={quoteInput.guests}
                      onChange={(e) => setQuoteInput({ ...quoteInput, guests: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-300 block mb-1">Duration (Nights)</label>
                    <input 
                      type="number" 
                      min="1"
                      value={quoteInput.nights}
                      onChange={(e) => setQuoteInput({ ...quoteInput, nights: e.target.value })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-300 block mb-1">Stay Rate Per Night (₹)</label>
                  <select
                    value={quoteInput.stayRate}
                    onChange={(e) => setQuoteInput({ ...quoteInput, stayRate: Number(e.target.value) })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none cursor-pointer"
                  >
                    <option value={700}>Budget Alpine Tent (₹700/night)</option>
                    <option value={1200}>Standard Glamping Tent (₹1,200/night)</option>
                    <option value={1950}>Authentic Eco-Cottage (₹1,950/night)</option>
                    <option value={2200}>Luxury Geodesic Dome (₹2,200/night)</option>
                    <option value={2500}>Cloudland Villa (₹2,500/night)</option>
                  </select>
                </div>

                {/* Add-ons */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-semibold text-gray-300 block">Package Add-Ons</label>
                  
                  <label className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/10 text-xs text-gray-300 cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={quoteInput.includeTransport}
                      onChange={(e) => setQuoteInput({ ...quoteInput, includeTransport: e.target.checked })}
                      className="accent-[#8cff00]"
                    />
                    Guwahati SUV/Shuttle Airport Convoy (+₹2,500/head)
                  </label>

                  <label className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/10 text-xs text-gray-300 cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={quoteInput.includePasses}
                      onChange={(e) => setQuoteInput({ ...quoteInput, includePasses: e.target.checked })}
                      className="accent-[#8cff00]"
                    />
                    Official VIP Festival Season Pass (+₹3,500/head)
                  </label>

                  <label className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/10 text-xs text-gray-300 cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={quoteInput.includeMeals}
                      onChange={(e) => setQuoteInput({ ...quoteInput, includeMeals: e.target.checked })}
                      className="accent-[#8cff00]"
                    />
                    Organic Tribal Meals & BBQ (+₹600/day/head)
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full neon-glow-btn py-3 rounded-2xl text-sm font-extrabold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" /> Calculate Formal Quote
                </button>
              </form>
            </div>

            {/* Calculated Quote Output Panel */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#8cff00]/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <span className="text-xs font-black uppercase tracking-widest text-[#8cff00]">
                    Bass Woods Quotation Sheet
                  </span>
                  {calculatedQuote && (
                    <span className="text-xs text-cyan-400 font-mono font-bold">
                      {calculatedQuote.quoteId}
                    </span>
                  )}
                </div>

                {calculatedQuote ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-black text-white">{calculatedQuote.clientName}</h3>
                      <p className="text-xs text-gray-400">{calculatedQuote.eventName} • {calculatedQuote.guests} Guests • {calculatedQuote.nights} Nights</p>
                    </div>

                    <div className="space-y-2 bg-black/50 p-4 rounded-2xl border border-white/10 text-xs">
                      <div className="flex justify-between text-gray-300">
                        <span>Stay Accommodation Total:</span>
                        <strong>₹{calculatedQuote.breakdown.totalStay.toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Transport & Convoys:</span>
                        <strong>₹{calculatedQuote.breakdown.totalTransport.toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Festival Passes:</span>
                        <strong>₹{calculatedQuote.breakdown.totalPasses.toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between text-gray-300">
                        <span>Meals & Brews:</span>
                        <strong>₹{calculatedQuote.breakdown.totalMeals.toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between text-cyan-300 pt-2 border-t border-white/10">
                        <span>5% Concierge & Setup Fee:</span>
                        <strong>₹{calculatedQuote.breakdown.serviceFee.toLocaleString()}</strong>
                      </div>
                    </div>

                    <div className="bg-[#8cff00]/10 border border-[#8cff00]/40 p-4 rounded-2xl flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-[#8cff00]">Grand Total</div>
                        <div className="text-2xl font-black text-white">₹{calculatedQuote.breakdown.grandTotal.toLocaleString()}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase font-bold text-gray-400">Per Head</div>
                        <div className="text-lg font-bold text-cyan-300">₹{calculatedQuote.perHeadCost.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-16 text-gray-400 text-sm">
                    Fill in traveler parameters on the left to compute instant itemized costs.
                  </div>
                )}
              </div>

              {calculatedQuote && (
                <button
                  onClick={() => alert(`Quote ${calculatedQuote.quoteId} formatted for WhatsApp!`)}
                  className="neon-glow-btn py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 mt-6 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Copy Quote Text for WhatsApp
                </button>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: INVENTORY & CAMPSITES */}
        {activeTab === 'inventory' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Tent className="w-5 h-5 text-[#8cff00]" /> Campsite & Stay Slots Manager
              </h2>
              <span className="text-xs text-gray-400">Range: ₹500 to ₹2,500+</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campsites.map(camp => (
                <div key={camp.id} className="glass-card p-5 rounded-3xl border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      {camp.category}
                    </span>
                    <strong className="text-base text-[#8cff00] font-black">{camp.priceLabel}</strong>
                  </div>

                  <h3 className="text-base font-extrabold text-white">{camp.name}</h3>
                  <div className="text-xs text-gray-400">{camp.location} • {camp.availableSlots} Slots Available</div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-purple-300 font-medium">Vibe: {camp.vibe}</span>
                    <span className="text-emerald-400 font-bold">Active Listing</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
