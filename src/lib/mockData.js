export const INITIAL_EVENTS = [
  {
    id: "ziro-2026",
    title: "Ziro Festival of Music 2026",
    dates: "Sept 24 – Sept 27, 2026",
    location: "Ziro Valley, Arunachal Pradesh",
    centerOfAttraction: "Indie Soundscapes, Apatani Tribal Heritage, Rice Beer & Sunset Jams",
    vibe: "Forest Pines & Bonfire Amber",
    tagline: "India's Greatest Outdoor Eco-Music Gathering",
    badge: "Official Bass Camp Partner",
    priceStarting: "₹700",
    image: "/festival-palette.png",
    features: ["Bass Woods Sunset Stage", "Eco-Alpine Tents", "Local Food & Brews", "Group Convoy Shuttle"]
  },
  {
    id: "cherry-blossom-2026",
    title: "Shillong Cherry Blossom Festival 2026",
    dates: "Nov 20 – Nov 21, 2026",
    location: "New Shillong Highland Grounds, Meghalaya",
    centerOfAttraction: "Pink Cherry Canopy, Global Headliners & Cloudland Glamping",
    vibe: "Slate Blue & Sunset Gold",
    tagline: "The Highland Music Extravaganza",
    badge: "Trending 2026",
    priceStarting: "₹1,200",
    image: "/dome-palette.png",
    features: ["Highland Luxury Domes", "Sunset Viewpoints", "Cosplay & Street Food", "Shillong Transfers"]
  },
  {
    id: "hornbill-2026",
    title: "Hornbill Festival 2026",
    dates: "Dec 1 – Dec 10, 2026",
    location: "Kisama Heritage Village, Nagaland",
    centerOfAttraction: "17 Naga Tribes Cultural Showcases, Hornbill International Rock Fest",
    vibe: "Tribal Fire & Dark Charcoal",
    tagline: "The Legendary Festival of Festivals",
    badge: "Bucketlist Experience",
    priceStarting: "₹850",
    image: "/hero-palette.png",
    features: ["Naga Fire Pit Camping", "Rock Concert VIP Access", "Traditional Craft Tours", "24/7 Security"]
  },
  {
    id: "orange-fest-2026",
    title: "Orange Festival of Adventure & Music 2026",
    dates: "Dec 15 – Dec 18, 2026",
    location: "Dambuk, Arunachal Pradesh",
    centerOfAttraction: "4x4 Dirt Track Off-Roading, River Rafting & Orange Grove Mainstage",
    vibe: "Burnt Terracotta & River Slate",
    tagline: "Where Extreme Off-Roading Meets Underground Music",
    badge: "Adventure Pick",
    priceStarting: "₹1,500",
    image: "/festival-palette.png",
    features: ["4x4 SUV Escorts", "Orange Orchard Campsites", "River Rafting Gear", "Bonfire Barbecue"]
  },
  {
    id: "mechuka-2026",
    title: "Mechuka Adventure Festival 2026",
    dates: "Nov 12 – Nov 15, 2026",
    location: "Mechuka Valley, Arunachal Pradesh",
    centerOfAttraction: "Snow-Capped Himalayan Valleys, Paragliding & Starlit Acoustic Nights",
    vibe: "High Altitude Forest Peace",
    tagline: "Touch the Clouds at India's Frontier Valley",
    badge: "Hidden Gem",
    priceStarting: "₹1,950",
    image: "/dome-palette.png",
    features: ["Panoramic Glass Domes", "Acoustic Fire Jams", "Paragliding Passes", "Custom Chef Meals"]
  }
];

export const INITIAL_CAMPSITES = [
  {
    id: "camp-1",
    name: "Bass Woods Geodesic Dome",
    category: "Luxury Domes",
    price: 2200,
    priceLabel: "₹2,200 / night",
    rating: 4.9,
    location: "Ziro Valley Pine Ridge",
    image: "/dome-palette.png",
    amenities: ["Geodesic Heated Dome", "Ensuite Washroom", "Bass Sound System", "Stargazing Skylight", "Breakfast Included"],
    vibe: "Luxury Sunset Glamping",
    availableSlots: 8
  },
  {
    id: "camp-2",
    name: "Pine River Alpine Backpacker Tent",
    category: "Alpine Tents",
    price: 700,
    priceLabel: "₹700 / night",
    rating: 4.7,
    location: "Kisama Creek Side",
    image: "/hero-palette.png",
    amenities: ["Waterproof Alpine Tent", "Thermal Sleeping Bag", "Communal Firepit", "Charging Station", "Shared Washrooms"],
    vibe: "Budget Backpacker Essential",
    availableSlots: 25
  },
  {
    id: "camp-3",
    name: "Apatani Tribal Wooden Cottage",
    category: "Cottages",
    price: 1950,
    priceLabel: "₹1,950 / night",
    rating: 4.85,
    location: "Hong Village, Ziro",
    image: "/festival-palette.png",
    amenities: ["Handcrafted Pine Interior", "Hot Water Shower", "Private Balcony", "Local Organic Feast", "Guided Trek"],
    vibe: "Authentic Tribal Living",
    availableSlots: 4
  },
  {
    id: "camp-4",
    name: "Wildwood Overland Pitch (BYOT)",
    category: "Campsites",
    price: 500,
    priceLabel: "₹500 / night",
    rating: 4.6,
    location: "Dambuk River Bed",
    image: "/hero-palette.png",
    amenities: ["Bring Your Own Tent Pitch", "24/7 Perimeter Security", "Clean Water Supply", "Barbecue Grill Slot"],
    vibe: "Raw Off-Grid Adventure",
    availableSlots: 40
  },
  {
    id: "camp-5",
    name: "Cloudland Glasshouse Villa",
    category: "Villas",
    price: 2500,
    priceLabel: "₹2,500 / night",
    rating: 5.0,
    location: "Highland Heights, Shillong",
    image: "/dome-palette.png",
    amenities: ["Private Luxury Villa", "Glass Wall Views", "Private Chauffeur SUV", "BBQ Chef On Demand", "Sound System"],
    vibe: "VIP Ultra Luxury",
    availableSlots: 2
  },
  {
    id: "camp-6",
    name: "Cosmic Glamp Twin Tent",
    category: "Alpine Tents",
    price: 1200,
    priceLabel: "₹1,200 / night",
    rating: 4.8,
    location: "Mechuka River Valley",
    image: "/festival-palette.png",
    amenities: ["Pre-Pitched Double Mattress", "Solar Lanterns", "Bonfire Access", "Highland Tea Station"],
    vibe: "Comfortable Glamping",
    availableSlots: 15
  }
];

export const INITIAL_LEADS = [
  {
    id: "lead-101",
    name: "Ananya Sharma",
    phone: "+91 98765 43210",
    email: "ananya.s@gmail.com",
    event: "Ziro Festival of Music 2026",
    stayPreference: "Luxury Geodesic Dome (₹2,200/night)",
    guests: "4 Guests",
    budget: "₹2,000+",
    status: "Quoted",
    timestamp: "2026-09-18 21:15",
    notes: "Requested private jeep convoy from Guwahati Airport & vegetarian meals."
  },
  {
    id: "lead-102",
    name: "Rohan Mukherjee",
    phone: "+91 98112 87654",
    email: "rohan.m@techstudio.io",
    event: "Hornbill Festival 2026",
    stayPreference: "Pine River Alpine Backpacker (₹700/night)",
    guests: "2 Guests",
    budget: "₹700 - ₹1,500",
    status: "New",
    timestamp: "2026-09-18 22:40",
    notes: "Interested in festival rock concert passes and sleeping bag rentals."
  },
  {
    id: "lead-103",
    name: "Priya & Friends",
    phone: "+91 97422 11980",
    email: "priya.verma@designco.in",
    event: "Shillong Cherry Blossom 2026",
    stayPreference: "Cloudland Glasshouse Villa (₹2,500/night)",
    guests: "6 Guests",
    budget: "₹2,000+",
    status: "Booked",
    timestamp: "2026-09-18 19:05",
    notes: "Advance ₹5,000 received for 3 nights stay + VIP concert zone."
  }
];

export const INITIAL_CREATIVE_PIPELINE = [
  {
    id: "crt-1",
    title: "Ziro 2026 Sunset Campsite Teaser Reel",
    stage: "Selected Design",
    type: "Instagram Reel & Banner",
    referencePhotos: ["/festival-palette.png"],
    targetDate: "2026-10-05",
    budget: "₹18,000",
    designer: "Bass Woods Creative Crew",
    notes: "Uses official color palette: forest green, burnt terracotta, and sunset gold."
  },
  {
    id: "crt-2",
    title: "Hornbill Festival Luxury Dome Walkthrough",
    stage: "Reference Photos",
    type: "Video Tour & Motion Ad",
    referencePhotos: ["/dome-palette.png"],
    targetDate: "2026-10-15",
    budget: "₹25,000",
    designer: "Wildwood Motion Studio",
    notes: "High-resolution drone shot over Kisama heritage ridge."
  },
  {
    id: "crt-3",
    title: "Orange Fest Dambuk 4x4 Off-Road Convoy Poster",
    stage: "Quote Approved",
    type: "Print Poster & Website Banner",
    referencePhotos: ["/hero-palette.png"],
    targetDate: "2026-09-30",
    budget: "₹12,500",
    designer: "Visual Vibe Team",
    notes: "Quotation finalized for 50 printed banners + meta ad push."
  },
  {
    id: "crt-4",
    title: "Cherry Blossom Festival Glamping Catalog PDF",
    stage: "Published",
    type: "Digital Lookbook",
    referencePhotos: ["/dome-palette.png"],
    targetDate: "2026-09-10",
    budget: "₹8,000",
    designer: "In-House Operations",
    notes: "Live on website and sent to WhatsApp leads."
  }
];
