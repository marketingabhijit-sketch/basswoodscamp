'use client';

export default function FestivalArt({ eventId }) {
  switch (eventId) {
    case 'ziro-2026':
      return (
        <svg className="w-full h-full" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="220" fill="#223A2C" />
          {/* Moon / Sunset */}
          <circle cx="200" cy="90" r="45" fill="#E0A83E" opacity="0.8" />
          {/* Mountains */}
          <path d="M0 220L100 110L180 170L280 80L400 220H0Z" fill="#1B2E22" />
          {/* Pine Silhouettes */}
          <path d="M40 220L60 140L80 220H40Z" fill="#15140F" />
          <path d="M120 220L140 120L160 220H120Z" fill="#15140F" />
          <path d="M220 220L245 100L270 220H220Z" fill="#15140F" />
          <path d="M310 220L330 130L350 220H310Z" fill="#15140F" />
          {/* Bonfire Glow */}
          <circle cx="200" cy="190" r="15" fill="#C1602D" />
          <path d="M195 190L200 175L205 190H195Z" fill="#E0A83E" />
        </svg>
      );

    case 'cherry-blossom-2026':
      return (
        <svg className="w-full h-full" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="220" fill="#1B2E22" />
          {/* Highland Hills */}
          <path d="M0 220C120 140 280 180 400 130V220H0Z" fill="#223A2C" />
          <path d="M0 220C150 180 250 140 400 170V220H0Z" fill="#5C7C93" opacity="0.5" />
          {/* Cherry Blossom Branch */}
          <path d="M350 0C280 60 220 40 140 100" stroke="#C1602D" strokeWidth="6" strokeLinecap="round" />
          <circle cx="240" cy="55" r="14" fill="#F1EAD9" />
          <circle cx="210" cy="75" r="10" fill="#E0A83E" />
          <circle cx="180" cy="90" r="12" fill="#F1EAD9" />
          <circle cx="270" cy="40" r="16" fill="#E0A83E" />
          <circle cx="310" cy="20" r="12" fill="#F1EAD9" />
        </svg>
      );

    case 'hornbill-2026':
      return (
        <svg className="w-full h-full" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="220" fill="#15140F" />
          {/* Sun disc */}
          <circle cx="200" cy="80" r="50" fill="#C1602D" opacity="0.9" />
          {/* Naga Tribal Hut Outline */}
          <path d="M120 220L200 100L280 220H120Z" fill="#223A2C" />
          <path d="M140 220L200 120L260 220H140Z" fill="#1B2E22" />
          {/* Hornbill Beak / Crest Graphic */}
          <path d="M170 80C200 40 250 50 270 80C240 75 210 75 170 80Z" fill="#E0A83E" />
          {/* Fire pit */}
          <path d="M185 220L200 190L215 220H185Z" fill="#E0A83E" />
        </svg>
      );

    case 'orange-fest-2026':
      return (
        <svg className="w-full h-full" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="220" fill="#1B2E22" />
          {/* River Stream */}
          <path d="M0 220C100 180 200 220 400 140V220H0Z" fill="#5C7C93" />
          {/* Orange Orchard Trees */}
          <circle cx="100" cy="110" r="35" fill="#223A2C" />
          <circle cx="100" cy="110" r="8" fill="#C1602D" />
          <circle cx="85" cy="100" r="6" fill="#E0A83E" />
          <circle cx="115" cy="120" r="6" fill="#C1602D" />

          <circle cx="300" cy="90" r="45" fill="#223A2C" />
          <circle cx="290" cy="80" r="8" fill="#E0A83E" />
          <circle cx="320" cy="95" r="9" fill="#C1602D" />
          <circle cx="280" cy="105" r="7" fill="#E0A83E" />
        </svg>
      );

    case 'mechuka-2026':
      return (
        <svg className="w-full h-full" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="220" fill="#5C7C93" />
          {/* Snow Himalayan Peaks */}
          <path d="M0 220L90 80L160 160L260 50L400 220H0Z" fill="#1B2E22" />
          {/* Snow Caps */}
          <path d="M90 80L110 115L75 115L90 80Z" fill="#F1EAD9" />
          <path d="M260 50L285 95L235 95L260 50Z" fill="#F1EAD9" />
          {/* Paraglider Arc */}
          <path d="M140 40C180 15 220 15 260 40" stroke="#E0A83E" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <svg className="w-full h-full" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="220" fill="#223A2C" />
          <path d="M0 220L200 60L400 220H0Z" fill="#1B2E22" />
        </svg>
      );
  }
}
