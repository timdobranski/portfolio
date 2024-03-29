import Header from '../components/Header/Header';
import { Josefin_Sans } from '@next/font/google';
import Link from 'next/link';
import { config } from "@fortawesome/fontawesome-svg-core";
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
        <Header />

        {children}
        <div className='footerGrid '>
          <Link href='/' className='footerLink'>
            <h2>HOME</h2>
          </Link>
          <Link href='/Rings/Projects' className='footerLink'>
            <h2>PROJECTS</h2>
          </Link>
          <Link href='/Rings/Resume' className='footerLink'>
            <h2>RESUME</h2>
          </Link>
          <Link href='/Rings/About' className='footerLink'>
            <h2>ABOUT ME</h2>
          </Link>
          <Link href='/Rings/Connect' className='footerLink'>
            <h2>CONNECT</h2>
          </Link>
        </div>
      </body>
    </html>
  )
}
