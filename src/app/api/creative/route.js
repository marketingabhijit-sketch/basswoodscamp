import { NextResponse } from 'next/server';
import { INITIAL_CREATIVE_PIPELINE } from '@/lib/mockData';

let creativeStore = [...INITIAL_CREATIVE_PIPELINE];

export async function GET() {
  return NextResponse.json({ success: true, tasks: creativeStore });
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (body.action === 'UPDATE_STAGE') {
      const taskIndex = creativeStore.findIndex(t => t.id === body.id);
      if (taskIndex !== -1) {
        creativeStore[taskIndex].stage = body.newStage;
      }
      return NextResponse.json({ success: true, tasks: creativeStore });
    }

    const newTask = {
      id: `crt-${Date.now()}`,
      title: body.title || "New Creative Campaign",
      stage: body.stage || "Reference Photos",
      type: body.type || "Social Reel & Visual",
      referencePhotos: body.referencePhotos || ["https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400"],
      targetDate: body.targetDate || "2026-10-15",
      budget: body.budget || "₹15,000",
      designer: body.designer || "Creative Team",
      notes: body.notes || "Reference photos uploaded for quotation & approval."
    };
    creativeStore.unshift(newTask);
    return NextResponse.json({ success: true, task: newTask });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
