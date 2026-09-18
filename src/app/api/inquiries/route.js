import { NextResponse } from 'next/server';
import { INITIAL_LEADS } from '@/lib/mockData';

// In-memory persistent state during server runtime
let leadsStore = [...INITIAL_LEADS];

export async function GET() {
  return NextResponse.json({ success: true, leads: leadsStore });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newLead = {
      id: `lead-${Date.now()}`,
      name: body.name || "Anonymous Traveler",
      phone: body.phone || "Not provided",
      email: body.email || "",
      event: body.event || "General Northeast Camping Consultation",
      stayPreference: body.stayPreference || "Standard Glamping (₹1,000-₹1,500)",
      guests: body.guests || "2 Guests",
      budget: body.budget || "₹700 - ₹2,000+",
      status: "New",
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
      notes: body.notes || "Submitted via Website Lead Capture Popup Modal"
    };

    leadsStore.unshift(newLead);
    return NextResponse.json({ success: true, lead: newLead });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
