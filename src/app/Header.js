'use client';

import './globals.css';
import { Josefin_Sans } from '@next/font/google';
import Link from 'next/link';
import Image from 'next/image';


export default function Header() {
  return (
    <div id='header-container'>
      <h1 className='title '>TIM DOBRANSKI</h1>
      <p className='description '>Software developer, musician, educator, and dog dad to Aria</p>
    </div>
  )
}
