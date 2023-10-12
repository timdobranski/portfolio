import './globals.css';
import { Josefin_Sans } from '@next/font/google';
import Link from 'next/link';
import Image from 'next/image';


export default function Header() {
  return (
    <div id='header-container'>
      <Link href='/'>
        <h1 className='title '>TIM DOBRANSKI</h1>
      </Link>
      <p className='description '>Software developer, musician, educator, and dog dad to Aria</p>
    </div>
  )
}
