import Header from '../components/Header/Header';
import { Josefin_Sans } from '@next/font/google';
import Link from 'next/link';
import Script from 'next/script';
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from '../components/Footer/Footer';
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;


// const josefin = Josefin_Sans({
//   subsets: ['latin'],
//   weight: ['100']
// });

export const metadata = {
  title: 'Tim Dobranski',
  description: 'A collection of projects and professional accomplishments by software developer Tim Dobranski',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='app' >
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SLYXEWB0XE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SLYXEWB0XE');
          `}
        </Script>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  )
}
