import './globals.css';
import background from '../../public/images/portfolio-background.svg';
import Image from 'next/image';
import { Josefin_Sans } from '@next/font/google';



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
        <div id='header-container'>
          <h1 className='title '>TIM DOBRANSKI</h1>
          <p className='description '>Software developer, musician, educator, and dog dad to Aria</p>
          <div className='grid '>
            <a href='' className='card'>
              <h2>PROJECTS</h2>
            </a>
            <a href='' className='card'>
              <h2>RESUME</h2>
            </a>
            <a href='' className='card'>
              <h2>ABOUT ME</h2>
            </a>
            <a href='' className='card'>
              <h2>CONNECT</h2>
            </a>
          </div>

        </div>
        {children}
      </body>
    </html>
  )
}
