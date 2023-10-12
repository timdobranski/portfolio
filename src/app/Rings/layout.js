'use client';

import BackgroundRings from '../../components/BackgroundRings/BackgroundRings.js';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import '../globals.css';

export default function Background({children}) {
  const searchParams = useSearchParams();
  const noTransition = searchParams.get('noTransition');
  console.log('transition', noTransition);
  const pageVariants = {
    initial: {
      backgroundColor: 'black',
      scale: 0.5
    },
    in: {
      backgroundColor: 'transparent', // or your desired final color
      scale: 1
    },
    out: {
      backgroundColor: 'black',
      scale: 1.1
    }
  };
  const overlayVariants = {
    initial: {
      opacity: 1,
      pointerEvents: 'all'
    },
    in: {
      opacity: 0,
      pointerEvents: 'none'
    },
    out: {
      opacity: 1,
      pointerEvents: 'all'
    }
  };


  return (
    <>
      <BackgroundRings />
      <AnimatePresence >
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: .5 }}
        style={{ transformOrigin: "top center" }}
        key={'zoomTransition'}
        >
        {children}
        </motion.div>

        {/* {
        noTransition !== 'true' && ( */}
          <motion.div
            className='overlay'
            initial="initial"
            animate="in"
            exit="out"
            variants={overlayVariants}
            transition={{ duration: .5 }}
            key={'fadeTransition'}
          ></motion.div>
        {/* )
      } */}
      </AnimatePresence>
    </>
  )
}