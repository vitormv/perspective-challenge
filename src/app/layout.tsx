import './globals.css';
import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const lora = Lora({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: 'Funnel Preview Tool',
  description: 'Generate previews of your funnels with ease.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={`${inter.variable} ${lora.variable} font-sans`}>
        <nav className="bg-gray-700 p-4">
          <div className="container mx-auto flex items-center justify-between flex-variable">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <Image src="/logo.png" width="36" height="36" alt="Perspective logo" />
            </div>

            <div className="flex-grow flex items-center w-auto text-white font-display text-xl">
              Funnel Preview
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
