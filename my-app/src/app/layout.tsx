import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Candela Buttigliero, guionista y directora',
  description: 'Guionista y analista de guion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/static/images/logocopy.png' type='image/png' />
        <link rel='apple-touch-icon' href='/static/images/logocopy.png' />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
