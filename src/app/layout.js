import './globals.css';

export const metadata = {
  title: 'Bass Woods Camp | Northeast India 2026 Festival Campsites & Eco Glamping',
  description: 'Premier Northeast India travel & festival camping consultants for Ziro Festival of Music, Hornbill Festival, Shillong Cherry Blossom, Orange Fest Dambuk, and Mechuka Adventure. Budget tents ₹500 to Luxury Geodesic Domes ₹2,000+.',
  keywords: ['Bass Woods', 'Ziro Festival 2026', 'Hornbill Festival 2026', 'Shillong Cherry Blossom', 'Campsites Northeast India', 'Glamping Ziro', 'Camping NAGALAND'],
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className="bg-[#070a0f] text-gray-100 antialiased selection:bg-[#8cff00] selection:text-black">
        {children}
      </body>
    </html>
  );
}
