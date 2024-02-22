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
        <link
          rel="preload"
          as="image"
          href="https://images.unsplash.com/photo-1578986568501-a6c637652d24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
        />
      </head>
      <body
        className={`${inter.variable} ${lora.variable} flex min-h-screen flex-col justify-stretch font-sans text-gray-900`}
      >
        <nav className="grow-0 bg-primary p-4">
          <a className="flex-variable mx-auto flex items-center justify-between" href="/">
            <div className="mr-6 flex flex-shrink-0 items-center text-white">
              <Image src="/logo.png" width="36" height="36" alt="Perspective logo" />
            </div>

            <div className="flex w-auto flex-grow items-center font-display text-xl text-white">
              Funnel Preview
            </div>
          </a>
        </nav>

        {children}
      </body>
    </html>
  );
}
