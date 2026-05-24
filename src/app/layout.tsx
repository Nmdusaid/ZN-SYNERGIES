
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZN Synergies | Global Luxury Logistics',
  description: 'Enterprise-grade global logistics with predictive intelligence and seamless supply chain solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-background text-foreground overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
