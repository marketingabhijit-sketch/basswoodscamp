'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import LogoMark from '@/components/LogoMark';
import { 
  Users, Palette, Calculator, Tent, ArrowLeft, PhoneCall, RefreshCw, Send, CheckCircle2 
} from 'lucide-react';

export default function AdminPortal() {
  const [activeTab, setActiveTab] = useState('leads');
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

  const updateLeadStatus = (leadId, newStatus) => {
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
  };

  const moveTaskStage = async (taskId, newStage) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, stage: newStage } : t));
    await fetch('/api/creative', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'UPDATE_STAGE', id: taskId, newStage })
    });
  };

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
    <div className="min-h-screen bg-[#1B2E22] text-[#F1EAD9] flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-[#15140F] border-b border-[#223A2C] px-4 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 rounded bg-[#223A2C] text-[#F1EAD9] hover:bg-[#1B2E22] transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <LogoMark className="w-9 h-9" />
              <div>
                <h1 className="font-serif text-xl font-bold text-[#F1EAD9] leading-none flex items-center gap-2">
                  Bass Woods <span className="text-xs font-sans bg-[#C1602D] text-[#F1EAD9] px-2 py-0.5 rounded font-bold uppercase">Operations Hub</span>
                </h1>
                <p className="text-[11px] text-[#E0A83E] mt-0.5">Startup Creative & Lead Management Portal</p>
              </div>
            </div>
          </div>

          <button 
            onClick={fetchData}
            className="flex items-center gap-2 text-xs bg-[#223A2C] hover:bg-[#1B2E22] px-3.5 py-2 rounded border border-[#F1EAD9]/15 text-[#F1EAD9] cursor-pointer"
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
            className={`px-5 py-2.5 rounded text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'leads'
                ? 'bg-[#C1602D] text-[#F1EAD9]'
                : 'bg-[#223A2C] text-[#D9CFB6] hover:bg-[#15140F]'
            }`}
          >
            <Users className="w-4 h-4" /> Live Inquiries ({leads.length})
          </button>

          <button
            onClick={() => setActiveTab('creative')}
            className={`px-5 py-2.5 rounded text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'creative'
                ? 'bg-[#C1602D] text-[#F1EAD9]'
                : 'bg-[#223A2C] text-[#D9CFB6] hover:bg-[#15140F]'
            }`}
          >
            <Palette className="w-4 h-4" /> Creative Pipeline ({tasks.length})
          </button>

          <button
            onClick={() => setActiveTab('quotes')}
            className={`px-5 py-2.5 rounded text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'quotes'
                ? 'bg-[#C1602D] text-[#F1EAD9]'
                : 'bg-[#223A2C] text-[#D9CFB6] hover:bg-[#15140F]'
            }`}
          >
            <Calculator className="w-4 h-4" /> Quote Generator
          </button>

          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-5 py-2.5 rounded text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'inventory'
                ? 'bg-[#C1602D] text-[#F1EAD9]'
                : 'bg-[#223A2C] text-[#D9CFB6] hover:bg-[#15140F]'
            }`}
          >
            <Tent className="w-4 h-4" /> Stays Inventory ({campsites.length})
          </button>
        </div>

        {/* TAB 1: INQUIRIES & LEAD CRM */}
        {activeTab === 'leads' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-[#F1EAD9] flex items-center gap-2">
                <Users className="w-5 h-5 text-[#E0A83E]" /> Website Leads & Form Entries
              </h2>
              <span className="text-xs text-[#D9CFB6]">Auto-captured from frontend quote panel</span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {leads.map((lead) => (
                <div key={lead.id} className="woodcut-panel p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-[#F1EAD9]/15">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif text-lg font-bold text-[#F1EAD9]">{lead.name}</h3>
                      <span className={`text-[10px] uppercase font-bold px-3 py-0.5 rounded border ${
                        lead.status === 'New' ? 'bg-[#E0A83E]/20 text-[#E0A83E] border-[#E0A83E]/40' :
                        lead.status === 'Quoted' ? 'bg-[#5C7C93]/20 text-[#5C7C93] border-[#5C7C93]/40' :
                        'bg-[#C1602D]/20 text-[#C1602D] border-[#C1602D]/40'
                      }`}>
                        {lead.status}
                      </span>
                      <span className="text-xs text-[#D9CFB6]/60">{lead.timestamp}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-[#D9CFB6]">
                      <div><strong className="text-[#F1EAD9]">Event:</strong> {lead.event}</div>
                      <div><strong className="text-[#F1EAD9]">Stay:</strong> {lead.stayPreference}</div>
                      <div><strong className="text-[#F1EAD9]">Guests:</strong> {lead.guests}</div>
                    </div>

                    {lead.notes && (
                      <div className="text-xs text-[#E0A83E] bg-[#15140F] p-2.5 rounded border border-[#F1EAD9]/10">
                        {lead.notes}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
                    <select
                      value={lead.status}
                      onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                      className="bg-[#15140F] border border-[#F1EAD9]/20 text-xs text-[#F1EAD9] rounded px-3 py-2 focus:outline-none cursor-pointer w-full sm:w-auto"
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
                      className="btn-rust px-4 py-2 rounded text-xs font-bold flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5" /> WhatsApp Lead
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: CREATIVE KANBAN */}
        {activeTab === 'creative' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#F1EAD9] flex items-center gap-2">
              <Palette className="w-5 h-5 text-[#E0A83E]" /> Creative & Media Approval System
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {['Reference Photos', 'Selected Design', 'Quote Approved', 'Published'].map(columnStage => (
                <div key={columnStage} className="bg-[#223A2C] p-4 rounded-lg border border-[#F1EAD9]/15 flex flex-col justify-start min-h-[480px]">
                  <div className="flex items-center justify-between mb-4 border-b border-[#F1EAD9]/15 pb-2">
                    <span className="text-xs font-bold uppercase text-[#F1EAD9] tracking-wider">
                      {columnStage}
                    </span>
                    <span className="text-xs font-bold bg-[#1B2E22] text-[#E0A83E] px-2.5 py-0.5 rounded">
                      {tasks.filter(t => t.stage === columnStage).length}
                    </span>
                  </div>

                  <div className="space-y-3 flex-1">
                    {tasks.filter(t => t.stage === columnStage).map(task => (
                      <div key={task.id} className="bg-[#15140F] p-4 rounded border border-[#F1EAD9]/15 space-y-3">
                        <h4 className="font-serif text-sm font-bold text-[#F1EAD9]">{task.title}</h4>
                        <div className="text-[11px] text-[#D9CFB6] flex items-center justify-between">
                          <span>{task.type}</span>
                          <strong className="text-[#E0A83E]">{task.budget}</strong>
                        </div>
                        <p className="text-[11px] text-[#D9CFB6]/80 italic bg-[#1B2E22] p-2 rounded border border-[#F1EAD9]/10">
                          &quot;{task.notes}&quot;
                        </p>

                        <div className="flex items-center justify-between pt-2 border-t border-[#F1EAD9]/10 text-[10px]">
                          {columnStage !== 'Reference Photos' && (
                            <button 
                              onClick={() => moveTaskStage(task.id, 'Reference Photos')}
                              className="text-[#D9CFB6] hover:text-[#F1EAD9]"
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
                              className="text-[#E0A83E] font-bold hover:underline ml-auto"
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

        {/* TAB 3: QUOTE CALCULATOR */}
        {activeTab === 'quotes' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#223A2C] p-6 sm:p-8 rounded-lg border border-[#F1EAD9]/15">
              <h2 className="font-serif text-2xl font-bold text-[#F1EAD9] mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#E0A83E]" /> Custom Package Estimator
              </h2>

              <form onSubmit={handleCalculateQuote} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-[#D9CFB6] block mb-1">Client / Group Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Ananya Sharma Group"
                    value={quoteInput.clientName}
                    onChange={(e) => setQuoteInput({ ...quoteInput, clientName: e.target.value })}
                    className="w-full bg-[#15140F] border border-[#F1EAD9]/20 rounded px-4 py-2 text-sm text-[#F1EAD9] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-[#D9CFB6] block mb-1">Guests</label>
                    <input 
                      type="number" 
                      min="1"
                      value={quoteInput.guests}
                      onChange={(e) => setQuoteInput({ ...quoteInput, guests: e.target.value })}
                      className="w-full bg-[#15140F] border border-[#F1EAD9]/20 rounded px-4 py-2 text-sm text-[#F1EAD9] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#D9CFB6] block mb-1">Nights</label>
                    <input 
                      type="number" 
                      min="1"
                      value={quoteInput.nights}
                      onChange={(e) => setQuoteInput({ ...quoteInput, nights: e.target.value })}
                      className="w-full bg-[#15140F] border border-[#F1EAD9]/20 rounded px-4 py-2 text-sm text-[#F1EAD9] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#D9CFB6] block mb-1">Stay Rate Per Night (₹)</label>
                  <select
                    value={quoteInput.stayRate}
                    onChange={(e) => setQuoteInput({ ...quoteInput, stayRate: Number(e.target.value) })}
                    className="w-full bg-[#15140F] border border-[#F1EAD9]/20 rounded px-4 py-2 text-sm text-[#F1EAD9] focus:outline-none cursor-pointer"
                  >
                    <option value={700}>Budget Alpine Tent (₹700/night)</option>
                    <option value={1200}>Standard Glamping Tent (₹1,200/night)</option>
                    <option value={1950}>Authentic Eco-Cottage (₹1,950/night)</option>
                    <option value={2200}>Luxury Geodesic Dome (₹2,200/night)</option>
                  </select>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="text-xs font-semibold text-[#D9CFB6] block">Package Add-Ons</label>
                  
                  <label className="flex items-center gap-3 bg-[#15140F] p-3 rounded border border-[#F1EAD9]/10 text-xs text-[#D9CFB6] cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={quoteInput.includeTransport}
                      onChange={(e) => setQuoteInput({ ...quoteInput, includeTransport: e.target.checked })}
                      className="accent-[#C1602D]"
                    />
                    Guwahati SUV Airport Convoy (+₹2,500/head)
                  </label>

                  <label className="flex items-center gap-3 bg-[#15140F] p-3 rounded border border-[#F1EAD9]/10 text-xs text-[#D9CFB6] cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={quoteInput.includePasses}
                      onChange={(e) => setQuoteInput({ ...quoteInput, includePasses: e.target.checked })}
                      className="accent-[#C1602D]"
                    />
                    Official VIP Festival Season Pass (+₹3,500/head)
                  </label>
                </div>

                <button 
                  type="submit"
                  className="w-full btn-rust py-3 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  Calculate Formal Quote
                </button>
              </form>
            </div>

            {/* Calculated Quote Sheet */}
            <div className="cream-paper-card p-6 sm:p-8 rounded-lg border-2 border-[#15140F] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-[#15140F]/20 pb-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C1602D]">
                    Quotation Sheet
                  </span>
                  {calculatedQuote && (
                    <span className="text-xs text-[#15140F] font-mono font-bold">
                      {calculatedQuote.quoteId}
                    </span>
                  )}
                </div>

                {calculatedQuote ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-[#15140F]">{calculatedQuote.clientName}</h3>
                      <p className="text-xs text-[#15140F]/70">{calculatedQuote.eventName} • {calculatedQuote.guests} Guests • {calculatedQuote.nights} Nights</p>
                    </div>

                    <div className="space-y-2 bg-[#1B2E22] text-[#F1EAD9] p-4 rounded text-xs">
                      <div className="flex justify-between">
                        <span>Stay Accommodation Total:</span>
                        <strong>₹{calculatedQuote.breakdown.totalStay.toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Transport & Convoys:</span>
                        <strong>₹{calculatedQuote.breakdown.totalTransport.toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Festival Passes:</span>
                        <strong>₹{calculatedQuote.breakdown.totalPasses.toLocaleString()}</strong>
                      </div>
                      <div className="flex justify-between text-[#E0A83E] pt-2 border-t border-[#F1EAD9]/15">
                        <span>5% Concierge & Setup Fee:</span>
                        <strong>₹{calculatedQuote.breakdown.serviceFee.toLocaleString()}</strong>
                      </div>
                    </div>

                    <div className="bg-[#E0A83E]/20 border border-[#E0A83E] p-4 rounded flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold text-[#15140F]">Grand Total</div>
                        <div className="text-2xl font-black text-[#15140F]">₹{calculatedQuote.breakdown.grandTotal.toLocaleString()}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase font-bold text-[#15140F]/70">Per Head</div>
                        <div className="text-lg font-bold text-[#C1602D]">₹{calculatedQuote.perHeadCost.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-16 text-[#15140F]/60 text-sm font-medium">
                    Fill in parameters on the left to compute costs.
                  </div>
                )}
              </div>

              {calculatedQuote && (
                <button
                  onClick={() => alert(`Quote ${calculatedQuote.quoteId} copied!`)}
                  className="btn-rust py-2.5 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 mt-6 cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Copy Quote for WhatsApp
                </button>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: INVENTORY */}
        {activeTab === 'inventory' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#F1EAD9] flex items-center gap-2">
              <Tent className="w-5 h-5 text-[#E0A83E]" /> Campsite & Stay Slots Manager
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campsites.map(camp => (
                <div key={camp.id} className="woodcut-panel p-5 rounded-lg border border-[#F1EAD9]/15 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#E0A83E] bg-[#15140F] px-3 py-1 rounded">
                      {camp.category}
                    </span>
                    <strong className="text-base text-[#F1EAD9] font-serif font-bold">{camp.priceLabel}</strong>
                  </div>

                  <h3 className="font-serif text-base font-bold text-[#F1EAD9]">{camp.name}</h3>
                  <div className="text-xs text-[#D9CFB6]">{camp.location} • {camp.availableSlots} Slots Available</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
