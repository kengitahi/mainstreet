import { Lexend, Inter } from "next/font/google";
import "./globals.css";

import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',

});

export const metadata = {
  title: {
    default: "MainStreet Digital - Your Business, Our Digital Expertise",
    template: "%s - MainStreet Digital",
  },
  description: "MainStreet Digital crafts custom, high-impact web solutions that capture your brand's essence and help businesses thrive online.",
  openGraph: {
    title: 'MainStreet Digital - Your Business, Our Digital Expertise',
    description: "MainStreet Digital crafts custom, high-impact web solutions that capture your brand's essence and help businesses thrive online.",
    url: 'https://mainstreetdigital.netlify.app/',
    siteName: 'MainStreet Digital',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lexend.variable}`}>
        <script>0</script>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
