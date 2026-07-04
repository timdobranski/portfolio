'use client';

import BackgroundRings from '../../components/BackgroundRings/BackgroundRings.js';
import Home from '../page.js';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

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
  const shouldUseCarouselShell = ringThemeByRoute.some(({ path }) => pathname === path);
  const isAppsRoute = pathname === '/apps' || pathname.startsWith('/apps/');
  const isAppsProjectPage = /^\/apps\/[^/]+$/.test(pathname);
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasScrollableContent, setHasScrollableContent] = useState(false);

  const handleBackNavigation = useCallback(() => {
    if (isAppsRoute && window.history.length > 1) {
      router.back();
      return;
    }

    router.push('/');
  }, [isAppsRoute, router]);

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

  if (shouldUseCarouselShell) {
    return <Home />;
  }

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
      <div className='transitionContainer' style={{ transformOrigin: "top center" }}>
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
                <button className='ringPageBackButton' type='button' onClick={handleBackNavigation}>
                  <span aria-hidden="true">‹</span>
                  <span className='ringPageBackLabelFull'>{isAppsRoute ? 'Back' : 'Back to rings'}</span>
                  <span className='ringPageBackLabelShort'>Back</span>
                </button>
              )}
              {children}
            </div>
          </div>
      </div>

        {/* {
        noTransition !== 'true' && ( */}
          <div className='overlay'></div>
        {/* )
      } */}
    </>
  )
}