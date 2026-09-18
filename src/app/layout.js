import './globals.css';
import { Fraunces, Inter } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Bass Woods Camp | Northeast India Festival Camping & Glamping Consultancy',
  description: 'Boutique travel consultancy for Northeast India music festivals (Ziro, Hornbill, Shillong Cherry Blossom, Orange Fest, Mechuka). Curated campsites, glamping domes, cottages, and eco-transfers.',
  keywords: ['Bass Woods', 'Ziro Festival 2026', 'Hornbill Festival 2026', 'Shillong Cherry Blossom', 'Northeast India Camping', 'Glamping Ziro'],
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className="bg-[#F6F1E7] text-[#1B2E22] font-sans antialiased selection:bg-[#C1602D] selection:text-[#F6F1E7]">
        {children}
      </body>
    </html>
  );
}
