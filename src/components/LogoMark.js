'use client';

export default function LogoMark({ className = "w-10 h-10" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Woodcut Stamp Outer Ring */}
      <circle cx="50" cy="50" r="46" fill="#14241B" stroke="#DB9E30" strokeWidth="2" strokeDasharray="90 4" />
      
      {/* Sun / Harvest Disc */}
      <circle cx="68" cy="22" r="7" fill="#DB9E30" />
      
      {/* Woodblock Mountain Silhouette in Warm Harvest Gold */}
      <path 
        d="M16 64L36 28L52 48L68 22L86 64H16Z" 
        fill="#DB9E30" 
        fillOpacity="0.15"
        stroke="#DB9E30" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Inner Mountain Lines */}
      <path 
        d="M36 28L44 40M68 22L74 34M52 48L60 64" 
        stroke="#DB9E30" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />

      {/* Terracotta River & Soundwave Curves */}
      <path 
        d="M12 73C22 68 30 78 40 73C50 68 60 78 70 73C80 68 88 75 92 73" 
        stroke="#C85A28" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
      />

      <path 
        d="M18 82C26 78 34 84 44 80C54 76 64 84 74 80C82 78 86 80 88 80" 
        stroke="#C85A28" 
        strokeWidth="2.5" 
        strokeDasharray="4 3" 
        strokeLinecap="round" 
      />

      {/* Pine Tree Silhouette Marks */}
      <path d="M22 64L26 56L30 64H22Z" fill="#14241B" stroke="#DB9E30" strokeWidth="1.5" />
      <path d="M72 64L76 54L80 64H72Z" fill="#14241B" stroke="#DB9E30" strokeWidth="1.5" />
    </svg>
  );
}
