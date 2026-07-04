'use client';

import BackgroundRings from '../../components/BackgroundRings/BackgroundRings.js';
import { usePathname, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import '../globals.css';

const ringThemeByRoute = [
  { path: '/about', className: 'ringPageBlue' },
  { path: '/connect', className: 'ringPagePurple' },
  { path: '/apps', className: 'ringPageGreen' },
  { path: '/music', className: 'ringPageRed' },
  { path: '/3d-design', className: 'ringPageYellow' },
];

const getRingThemeClass = (pathname) => (
  ringThemeByRoute.find(({ path }) => pathname === path || pathname.startsWith(`${path}/`))?.className
  ?? 'ringPageGreen'
);

export default function Background({children}) {
  const router = useRouter();
  const pathname = usePathname();
  const ringThemeClass = getRingThemeClass(pathname);
  const isAppsProjectPage = /^\/apps\/[^/]+$/.test(pathname);
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScrollableContent, setHasScrollableContent] = useState(false);

  const updateScrollProgress = useCallback(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
    setHasScrollableContent(maxScroll > 1);
    setScrollProgress(maxScroll > 0 ? scrollEl.scrollTop / maxScroll : 0);
  }, []);

  useEffect(() => {
    updateScrollProgress();
    window.addEventListener('resize', updateScrollProgress);

    return () => window.removeEventListener('resize', updateScrollProgress);
  }, [pathname, children, updateScrollProgress]);

  const pageVariants = {
    initial: {
      backgroundColor: 'black',
      opacity: 0,
    },
    in: {
      backgroundColor: 'transparent',
      opacity: 1,
    },
    out: {
      backgroundColor: 'black',
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
      <svg className='ringPageSvgFilters' aria-hidden="true" focusable="false">
        <defs>
          <filter id="liquidRingA" x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="2" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" xChannelSelector="R" yChannelSelector="G" scale="18">
              <animate attributeName="scale" values="12;28;16;30;12" dur="9s" repeatCount="indefinite" />
            </feDisplacementMap>
          </filter>
          <filter id="liquidRingB" x="-25%" y="-25%" width="150%" height="150%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02 0.014" numOctaves="2" seed="42" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" xChannelSelector="R" yChannelSelector="G" scale="22">
              <animate attributeName="scale" values="24;10;28;14;24" dur="7s" repeatCount="indefinite" />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>
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
          <div className={`ringPageViewport ${ringThemeClass}`}>
            <div className='ringPageFrame' aria-hidden="true">
              <div className='ringPageBorder ringPageBorderA'></div>
              <div className='ringPageBorder ringPageBorderB'></div>
            </div>
            <div
              className={`ringPageScrollArc ${hasScrollableContent ? 'ringPageScrollArcVisible' : ''}`}
              style={{
                '--ring-scroll-progress-angle': `${5 + scrollProgress * 55}deg`,
                '--ring-scroll-progress-distance': `${scrollProgress * 50}dvh`,
              }}
              aria-hidden="true"
            ></div>
            <div className='ringPageContentScroll' ref={scrollRef} onScroll={updateScrollProgress}>
              {!isAppsProjectPage && (
                <button className='ringPageBackButton' type='button' onClick={() => router.push('/')}>
                  <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
                  <span className='ringPageBackLabelFull'>Back to rings</span>
                  <span className='ringPageBackLabelShort'>Back</span>
                </button>
              )}
              {children}
            </div>
          </div>
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