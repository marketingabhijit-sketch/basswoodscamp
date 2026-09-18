import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const guests = Number(body.guests) || 2;
    const nights = Number(body.nights) || 3;
    const stayRatePerNight = Number(body.stayRate) || 1200;
    const includeTransport = body.includeTransport || false;
    const transportFeePerHead = includeTransport ? 2500 : 0;
    const includePasses = body.includePasses || false;
    const passFeePerHead = includePasses ? 3500 : 0;
    const includeMeals = body.includeMeals || false;
    const mealFeePerHeadPerDay = includeMeals ? 600 : 0;

    const totalStay = stayRatePerNight * nights * Math.ceil(guests / 2);
    const totalTransport = transportFeePerHead * guests;
    const totalPasses = passFeePerHead * guests;
    const totalMeals = mealFeePerHeadPerDay * nights * guests;
    const subtotal = totalStay + totalTransport + totalPasses + totalMeals;
    const serviceFee = Math.round(subtotal * 0.05); // 5% consultant & concierge fee
    const grandTotal = subtotal + serviceFee;

    const quotation = {
      quoteId: `BWQ-${Math.floor(100000 + Math.random() * 900000)}`,
      clientName: body.clientName || "Valued Traveler",
      eventName: body.eventName || "Northeast Festival Package",
      guests,
      nights,
      breakdown: {
        totalStay,
        totalTransport,
        totalPasses,
        totalMeals,
        subtotal,
        serviceFee,
        grandTotal
      },
      perHeadCost: Math.round(grandTotal / guests),
      generatedAt: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
    };

    return NextResponse.json({ success: true, quotation });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
