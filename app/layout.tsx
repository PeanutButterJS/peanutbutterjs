import type { Metadata } from 'next';
import { Sora, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layout/Footer';

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'PeanutButterJS — Smooth code. Fast delivery.',
    template: '%s | PeanutButterJS',
  },
  description:
    'Practical frontend engineering tutorials focused on scalable React systems, performance, and fast production delivery.',
  keywords: [
    'React',
    'TypeScript',
    'Next.js',
    'Frontend',
    'JavaScript',
    'Performance',
    'Architecture',
  ],
  authors: [{ name: 'PeanutButterJS' }],
  openGraph: {
    type: 'website',
    title: 'PeanutButterJS — Smooth code. Fast delivery.',
    description:
      'Practical frontend engineering tutorials focused on scalable React systems, performance, and fast production delivery.',
    siteName: 'PeanutButterJS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeanutButterJS',
    description: 'Smooth code. Fast delivery.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background text-text antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
