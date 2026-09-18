'use client';

export default function LogoMark({ className = "w-10 h-10" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background soft circle optional */}
      <circle cx="50" cy="50" r="46" fill="#223A2C" stroke="#F1EAD9" strokeWidth="1.5" strokeOpacity="0.2" />
      
      {/* Hand-drawn Mountain Silhouette in Mustard Gold */}
      <path 
        d="M18 64L38 32L52 50L68 26L86 64H18Z" 
        stroke="#E0A83E" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      <path 
        d="M38 32L45 42M68 26L74 36" 
        stroke="#E0A83E" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
      />

      {/* Underneath River / Soundwave Line in Rust Burnt Orange */}
      <path 
        d="M14 74C22 70 30 78 40 74C50 70 60 78 70 74C80 70 88 76 92 74" 
        stroke="#C1602D" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
      />

      <path 
        d="M20 82C28 78 36 84 46 80C56 76 66 84 76 80C82 78 86 80 88 80" 
        stroke="#C1602D" 
        strokeWidth="2" 
        strokeDasharray="4 3" 
        strokeLinecap="round" 
      />

      {/* Sun / Sound Peak Accent */}
      <circle cx="68" cy="20" r="3" fill="#E0A83E" />
    </svg>
  );
}
