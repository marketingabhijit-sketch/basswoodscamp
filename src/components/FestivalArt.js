'use client';

export default function FestivalArt({ eventId }) {
  switch (eventId) {
    case 'ziro-2026':
      return (
        <svg className="w-full h-full object-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Background Sky */}
          <rect width="400" height="220" fill="#384D3E" />
          {/* Harvest Sunset Sun */}
          <circle cx="200" cy="85" r="48" fill="#DB9E30" opacity="0.9" />
          {/* Sun Rays */}
          <path d="M200 25V35M200 135V145M140 85H150M250 85H260" stroke="#DB9E30" strokeWidth="3" strokeLinecap="round" />
          {/* Ziro Valley Mountain Ridges */}
          <path d="M0 220L100 100L180 160L280 75L400 220H0Z" fill="#14241B" />
          {/* Layered Pine Trees */}
          <path d="M30 220L55 130L80 220H30Z" fill="#14241B" stroke="#DB9E30" strokeWidth="1" />
          <path d="M110 220L135 110L160 220H110Z" fill="#14241B" stroke="#DB9E30" strokeWidth="1" />
          <path d="M230 220L255 95L280 220H230Z" fill="#14241B" stroke="#DB9E30" strokeWidth="1" />
          <path d="M320 220L340 120L360 220H320Z" fill="#14241B" stroke="#DB9E30" strokeWidth="1" />
          {/* Terracotta Bonfire */}
          <path d="M190 220L200 180L210 220H190Z" fill="#C85A28" />
          <path d="M195 220L200 195L205 220H195Z" fill="#DB9E30" />
        </svg>
      );

    case 'cherry-blossom-2026':
      return (
        <svg className="w-full h-full object-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Highland Sky */}
          <rect width="400" height="220" fill="#4A6D7C" />
          {/* Highland Clouds / Sun */}
          <circle cx="310" cy="50" r="35" fill="#DB9E30" opacity="0.85" />
          {/* Meghalaya Hills */}
          <path d="M0 220C120 130 270 170 400 120V220H0Z" fill="#14241B" />
          <path d="M0 220C160 170 240 130 400 160V220H0Z" fill="#384D3E" opacity="0.8" />
          {/* Cherry Blossom Silhouette Branch */}
          <path d="M370 0C300 65 230 40 130 110" stroke="#C85A28" strokeWidth="6" strokeLinecap="round" />
          {/* Blossoms */}
          <circle cx="235" cy="55" r="16" fill="#F4EFE6" />
          <circle cx="205" cy="75" r="12" fill="#DB9E30" />
          <circle cx="175" cy="90" r="14" fill="#F4EFE6" />
          <circle cx="265" cy="40" r="18" fill="#DB9E30" />
          <circle cx="315" cy="20" r="14" fill="#F4EFE6" />
        </svg>
      );

    case 'hornbill-2026':
      return (
        <svg className="w-full h-full object-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Night Ink Base */}
          <rect width="400" height="220" fill="#14241B" />
          {/* Sun Disc in Terracotta */}
          <circle cx="200" cy="80" r="52" fill="#C85A28" opacity="0.95" />
          {/* Naga Tribal Heritage Hut */}
          <path d="M110 220L200 90L290 220H110Z" fill="#384D3E" stroke="#DB9E30" strokeWidth="2" />
          <path d="M135 220L200 115L265 220H135Z" fill="#14241B" />
          {/* Hornbill Crest Feather Arc */}
          <path d="M165 75C195 35 250 45 275 75C240 70 210 70 165 75Z" fill="#DB9E30" />
          {/* Tribal Fire Pit */}
          <path d="M185 220L200 185L215 220H185Z" fill="#DB9E30" />
        </svg>
      );

    case 'orange-fest-2026':
      return (
        <svg className="w-full h-full object-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sky */}
          <rect width="400" height="220" fill="#384D3E" />
          {/* Off-road River Stream */}
          <path d="M0 220C110 170 210 220 400 135V220H0Z" fill="#4A6D7C" />
          {/* Dambuk Orange Orchards */}
          <circle cx="95" cy="105" r="38" fill="#14241B" stroke="#DB9E30" strokeWidth="1.5" />
          <circle cx="95" cy="105" r="9" fill="#C85A28" />
          <circle cx="78" cy="95" r="7" fill="#DB9E30" />
          <circle cx="112" cy="115" r="7" fill="#C85A28" />

          <circle cx="305" cy="85" r="48" fill="#14241B" stroke="#DB9E30" strokeWidth="1.5" />
          <circle cx="295" cy="75" r="9" fill="#DB9E30" />
          <circle cx="325" cy="90" r="10" fill="#C85A28" />
          <circle cx="285" cy="100" r="8" fill="#DB9E30" />
        </svg>
      );

    case 'mechuka-2026':
      return (
        <svg className="w-full h-full object-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mist Slate Sky */}
          <rect width="400" height="220" fill="#4A6D7C" />
          {/* Himalayan Snow Peaks */}
          <path d="M0 220L90 75L160 155L260 45L400 220H0Z" fill="#14241B" />
          {/* Snow Caps in Canvas Parchment */}
          <path d="M90 75L112 110L72 110L90 75Z" fill="#F4EFE6" />
          <path d="M260 45L288 90L232 90L260 45Z" fill="#F4EFE6" />
          {/* Paraglider Arc */}
          <path d="M135 35C175 10 215 10 255 35" stroke="#C85A28" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <svg className="w-full h-full object-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="220" fill="#384D3E" />
          <path d="M0 220L200 55L400 220H0Z" fill="#14241B" />
        </svg>
      );
  }
}
