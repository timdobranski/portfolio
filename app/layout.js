import './globals.css';
import Header from '../components/Header/Header';
import Script from 'next/script';
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from '../components/Footer/Footer';
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;


const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tim Dobranski',
  url: siteUrl,
  jobTitle: 'Software Developer',
  sameAs: [
    'https://www.linkedin.com/in/timdobranski',
    'https://github.com/timdobranski',
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Tim Dobranski',
    template: '%s | Tim Dobranski',
  },
  description: 'Portfolio of software engineering, music, teaching, and 3D design projects by Tim Dobranski.',
  openGraph: {
    title: 'Tim Dobranski',
    description: 'Portfolio of software engineering, music, teaching, and 3D design projects by Tim Dobranski.',
    url: siteUrl,
    siteName: 'Tim Dobranski',
    images: ['/opengraph-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tim Dobranski',
    description: 'Portfolio of software engineering, music, teaching, and 3D design projects by Tim Dobranski.',
    images: ['/twitter-image.png'],
  },
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
        <Script
          id="person-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  )
}
