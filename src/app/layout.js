import './globals.css';

export const metadata = {
  title: 'Bass Woods Camp | Northeast India Festival Camping & Glamping Consultancy',
  description: 'Premier Northeast India travel & festival camping consultants for Ziro Festival of Music, Hornbill Festival, Shillong Cherry Blossom, Orange Fest Dambuk, and Mechuka Adventure. Budget tents ₹500 to Luxury Geodesic Domes ₹2,000+.',
  keywords: ['Bass Woods', 'Ziro Festival 2026', 'Hornbill Festival 2026', 'Shillong Cherry Blossom', 'Campsites Northeast India', 'Glamping Ziro'],
  icons: {
    icon: '/emblem.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/emblem.png" />
      </head>
      <body className="bg-[#14251B] text-[#F5EFE6] antialiased selection:bg-[#C85A28] selection:text-[#F5EFE6]">
        {children}
      </body>
    </html>
  );
}
