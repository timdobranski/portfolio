import './globals.css';
import Header from './Header.js';
import background from '../../public/images/portfolio-background.svg';
import Image from 'next/image';
import { Josefin_Sans } from '@next/font/google';
import Link from 'next/link';
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;


const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100']
});

export const metadata = {
    title: 'Tim Dobranski',
    description: 'A collection of projects and professional accomplishments',
    metadataBase: new URL('http://3.23.230.122/'),
    locale: 'en_US',
    type: 'website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id='app' className={josefin.className}>

          <Header />
        {children}
          <div className='grid '>
          <Link href='/' className='card'>
                <h2>HOME</h2>
            </Link>
            <a href='/Projects' className='card'>
              <h2>PROJECTS</h2>
            </a>
            <a href='' className='card'>
              <h2>RESUME</h2>
            </a>
            <Link href='/About' className='card'>
              <h2>ABOUT ME</h2>
            </Link>
            <Link href='/Connect' className='card'>
                <h2>CONNECT</h2>
            </Link>
          </div>
      </body>
    </html>
  )
}
