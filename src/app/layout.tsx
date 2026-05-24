import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ZN SYNERGIES | PROFESSIONAL LOGISTICS',
  description: 'Enterprise-grade global logistics with predictive intelligence and high-contrast precision.',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-black text-white overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}