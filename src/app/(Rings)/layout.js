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
      scale: 0.005,
      opacity: 0,
    },
    in: {
      backgroundColor: 'transparent',
      scale: 1,
      opacity: 1,
    },
    out: {
      backgroundColor: 'black',
      scale: 0.5
    }
  };
  const overlayVariants = {
    initial: {
      opacity: 1,
      pointerEvents: 'all'
    },
    in: {
      opacity: 0,
      pointerEvents: 'none',
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
        transition={{ duration: 1.5, ease: [0.05, 0.85, 0.25, 1]}}
        style={{ transformOrigin: "top center" }}
        key={'zoomTransition'}
        className='transitionContainer'
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
            transition={{ duration: .5, delay: .5 }}
            key={'fadeTransition'}
          ></motion.div>
        {/* )
      } */}
      </AnimatePresence>
    </>
  )
}