import '../../app/globals.css';
import Link from 'next/link';


export default function Header() {
  return (
    <div className='header-container'>
      <Link href='/'>
        <h1 className='title '>TIM DOBRANSKI</h1>
      </Link>
      <p className='description '>Software developer, musician, educator, and dog dad to Aria</p>
    </div>
  )
}
