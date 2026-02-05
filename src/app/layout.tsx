import type { Metadata } from 'next';
import { Montserrat, Montserrat_Alternates } from 'next/font/google';
import './globals.css';

import Header from './../components/layout/Header/Header';
import { Socials } from '@/components/ui/socials/Socials';
import { Footer } from '@/components/layout/Footer/Footer';
import GoogleTranslate from './../components/GoogleTranslate';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const montserratAlt = Montserrat_Alternates({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat-alt',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Академ Строй',
  description: 'Строительная компания в Казахстане',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={`${montserrat.variable} ${montserratAlt.variable}`}>
        <GoogleTranslate />
        <Header />
        <Socials />
        {children}
        <Footer />
      </body>
    </html>
  );
}
