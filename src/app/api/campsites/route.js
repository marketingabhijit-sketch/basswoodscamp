import { NextResponse } from 'next/server';
import { INITIAL_CAMPSITES } from '@/lib/mockData';

let campsitesStore = [...INITIAL_CAMPSITES];

export async function GET() {
  return NextResponse.json({ success: true, campsites: campsitesStore });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newCamp = {
      id: `camp-${Date.now()}`,
      name: body.name,
      category: body.category || "Alpine Tents",
      price: Number(body.price) || 1000,
      priceLabel: `₹${body.price} / night`,
      rating: 5.0,
      location: body.location || "Northeast India",
      image: body.image || "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800",
      amenities: body.amenities || ["Bonfire", "Security", "Breakfast"],
      vibe: body.vibe || "Wild Adventure",
      availableSlots: Number(body.availableSlots) || 10
    };
    campsitesStore.unshift(newCamp);
    return NextResponse.json({ success: true, campsite: newCamp });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
