'use client';

import styles from './Home.module.css'
import { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faMusic, faCode, faCube, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";
import Projects from './(Rings)/apps/page.js';
import Connect from './(Rings)/connect/page.js';
import Music from './(Rings)/music/page.js';
import Design from './(Rings)/3d-design/page.js';
import About from './(Rings)/about/page.js';

const rings = [
  {
    header: 'ABOUT',
    text: ['Select this ring to', 'learn more about me'],
    color: 'blueGlow',
    pageTheme: 'ringPageBlue',
    link: '/about',
    id: 'ring0',
    icon: faUser,
    Content: About,
  },
  {
    header: 'CONNECT',
    text: ['Select this ring to', 'connect with me'],
    color: 'purpleGlow',
    pageTheme: 'ringPagePurple',
    link: '/connect',
    id: 'ring1',
    icon: faMessage,
    Content: Connect,
  },
  {
    header: 'CODE',
    text: ['Select this ring to', 'see my web and mobile', 'software projects'],
    color: 'greenGlow',
    pageTheme: 'ringPageGreen',
    link: '/apps',
    id: 'ring2',
    icon: faCode,
    Content: Projects,
  },
  {
    header: 'MUSIC',
    text: ['Select this ring to see my ', 'musical projects'],
    color: 'redGlow',
    pageTheme: 'ringPageRed',
    link: '/music',
    id: 'ring3',
    icon: faMusic,
    Content: Music,
  },
  {
    header: '3D DESIGN',
    text: ['Select this ring to', 'see the art I create', 'from 3D models and', 'woodworking'],
    color: 'yellowGlow',
    pageTheme: 'ringPageYellow',
    link: '/3d-design',
    id: 'ring4',
    icon: faCube,
    Content: Design,
  },
]

const defaultActiveRing = rings.findIndex(({ link }) => link === '/apps');

export default function Home() {
  const pathname = usePathname();
  const [activeRing, setActiveRing] = useState(defaultActiveRing);
  const [zoomedRing, setZoomedRing] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [isRingContentVisible, setIsRingContentVisible] = useState(false);
  const [ringScrollProgress, setRingScrollProgress] = useState(0);
  const [hasRingScrollableContent, setHasRingScrollableContent] = useState(false);

  const [dragProgress, setDragProgress] = useState(0); // 0..1
  const [, setDragDirection] = useState(0); // -1 (left), 1 (right)
  const [isDragging, setIsDragging] = useState(false);
  const [isSettling, setIsSettling] = useState(false);
  const [interactionFromRing, setInteractionFromRing] = useState(null);
  const [interactionToRing, setInteractionToRing] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchDeltaRef = useRef({ x: 0, y: 0 });
  const didSwipeRef = useRef(false);
  const settleTimeoutRef = useRef(null);
  const contentTimeoutRef = useRef(null);
  const routeTransitionTimeoutRef = useRef(null);
  const ringContentScrollRef = useRef(null);
  const rafRef = useRef(null);
  const pendingTouchRef = useRef(null);
  const activeRingRef = useRef(defaultActiveRing);
  const selectedRouteRef = useRef(null);
  const hasSyncedRouteRef = useRef(false);

  useEffect(() => {
    activeRingRef.current = activeRing;
  }, [activeRing]);

  useEffect(() => {
    selectedRouteRef.current = selectedRoute;
  }, [selectedRoute]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = () => setIsMobile(mq.matches);

    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const updateRingScrollProgress = useCallback(() => {
    const scrollEl = ringContentScrollRef.current;
    if (!scrollEl) return;

    const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
    setHasRingScrollableContent(maxScroll > 1);
    setRingScrollProgress(maxScroll > 0 ? scrollEl.scrollTop / maxScroll : 0);
  }, []);

  useEffect(() => {
    updateRingScrollProgress();
    window.addEventListener('resize', updateRingScrollProgress);

    return () => window.removeEventListener('resize', updateRingScrollProgress);
  }, [selectedRoute, isRingContentVisible, updateRingScrollProgress]);

  const syncRouteState = useCallback((nextPathname) => {
    const routeIndex = rings.findIndex(({ link }) => (
      nextPathname === link
      || nextPathname.startsWith(`${link}/`)
    ));

    if (contentTimeoutRef.current) {
      window.clearTimeout(contentTimeoutRef.current);
      contentTimeoutRef.current = null;
    }

    if (routeTransitionTimeoutRef.current) {
      window.clearTimeout(routeTransitionTimeoutRef.current);
      routeTransitionTimeoutRef.current = null;
    }

    if (routeIndex === -1) {
      hasSyncedRouteRef.current = true;
      selectedRouteRef.current = null;
      setZoomedRing(null);
      setSelectedRoute(null);
      setIsRingContentVisible(false);
      return;
    }

    const ring = rings[routeIndex];
    const currentActiveRing = activeRingRef.current;
    const shouldAnimateRouteChange = hasSyncedRouteRef.current && currentActiveRing !== routeIndex;

    hasSyncedRouteRef.current = true;

    if (shouldAnimateRouteChange) {
      const forwardDistance = (routeIndex - currentActiveRing + rings.length) % rings.length;
      const backwardDistance = (currentActiveRing - routeIndex + rings.length) % rings.length;

      activeRingRef.current = routeIndex;
      selectedRouteRef.current = ring.link;
      setSelectedRoute(ring.link);
      setIsRingContentVisible(false);
      setZoomedRing(null);
      setInteractionFromRing(currentActiveRing);
      setInteractionToRing(routeIndex);
      setDragDirection(forwardDistance <= backwardDistance ? -1 : 1);
      setDragProgress(0);
      setIsSettling(true);
      setActiveRing(routeIndex);

      window.requestAnimationFrame(() => {
        setDragProgress(1);
      });

      const settleMs = 1000;
      routeTransitionTimeoutRef.current = window.setTimeout(() => {
        setIsSettling(false);
        setDragProgress(0);
        setDragDirection(0);
        setInteractionFromRing(null);
        setInteractionToRing(null);
        setZoomedRing(ring.id);
        setIsRingContentVisible(true);
        routeTransitionTimeoutRef.current = null;
      }, settleMs);

      return;
    }

    activeRingRef.current = routeIndex;
    selectedRouteRef.current = ring.link;
    setActiveRing(routeIndex);
    setZoomedRing(ring.id);
    setSelectedRoute(ring.link);
    setIsRingContentVisible(true);
  }, []);

  useEffect(() => {
    syncRouteState(pathname);
  }, [pathname, syncRouteState]);

  useEffect(() => {
    const syncFromHistory = () => syncRouteState(window.location.pathname);

    const resetToRings = () => {
      if (contentTimeoutRef.current) {
        window.clearTimeout(contentTimeoutRef.current);
        contentTimeoutRef.current = null;
      }

      setIsRingContentVisible(false);
      setSelectedRoute(null);
      setZoomedRing(null);
      setRingScrollProgress(0);
      setHasRingScrollableContent(false);
    };

    window.addEventListener('popstate', syncFromHistory);
    window.addEventListener('ringPageBackToRings', resetToRings);

    return () => {
      window.removeEventListener('popstate', syncFromHistory);
      window.removeEventListener('ringPageBackToRings', resetToRings);
      if (contentTimeoutRef.current) {
        window.clearTimeout(contentTimeoutRef.current);
      }
      if (routeTransitionTimeoutRef.current) {
        window.clearTimeout(routeTransitionTimeoutRef.current);
      }
    };
  }, [syncRouteState]);


  const handleRingClick = (ringElement, url) => {
    setZoomedRing(ringElement);
    setSelectedRoute(url);
    setIsRingContentVisible(false);

    if (contentTimeoutRef.current) {
      window.clearTimeout(contentTimeoutRef.current);
    }

    contentTimeoutRef.current = window.setTimeout(() => {
      window.history.pushState({ ringRoute: url }, '', url);
      setIsRingContentVisible(true);
    }, 850);
  }

  const handleRingBack = () => {
    if (contentTimeoutRef.current) {
      window.clearTimeout(contentTimeoutRef.current);
      contentTimeoutRef.current = null;
    }

    window.history.pushState({ ringRoute: null }, '', '/');
    setIsRingContentVisible(false);
    setSelectedRoute(null);
    setZoomedRing(null);
    setRingScrollProgress(0);
    setHasRingScrollableContent(false);
  }

  const handleNextRing = () => {
    if (zoomedRing) return;
    if (isDragging || isSettling) return;

    const fromRing = activeRing;
    const toRing = (fromRing + 1) % rings.length;

    setInteractionFromRing(fromRing);
    setInteractionToRing(toRing);
    setDragDirection(-1);
    setDragProgress(0);
    setIsSettling(true);
    setActiveRing(toRing);

    if (settleTimeoutRef.current) {
      window.clearTimeout(settleTimeoutRef.current);
      settleTimeoutRef.current = null;
    }

    window.requestAnimationFrame(() => {
      setDragProgress(1);
    });

    const settleMs = 1000;
    settleTimeoutRef.current = window.setTimeout(() => {
      setIsSettling(false);
      setDragProgress(0);
      setDragDirection(0);
      setInteractionFromRing(null);
      setInteractionToRing(null);
    }, settleMs);
  }

  const handlePreviousRing = () => {
    if (zoomedRing) return;
    if (isDragging || isSettling) return;

    const fromRing = activeRing;
    const toRing = (fromRing - 1 + rings.length) % rings.length;

    setInteractionFromRing(fromRing);
    setInteractionToRing(toRing);
    setDragDirection(1);
    setDragProgress(0);
    setIsSettling(true);
    setActiveRing(toRing);

    if (settleTimeoutRef.current) {
      window.clearTimeout(settleTimeoutRef.current);
      settleTimeoutRef.current = null;
    }

    window.requestAnimationFrame(() => {
      setDragProgress(1);
    });

    const settleMs = 1000;
    settleTimeoutRef.current = window.setTimeout(() => {
      setIsSettling(false);
      setDragProgress(0);
      setDragDirection(0);
      setInteractionFromRing(null);
      setInteractionToRing(null);
    }, settleMs);
  }

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const lerp = (a, b, t) => a + (b - a) * t;

  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const getRoleForIndex = (index, centerIndex) => {
    const prev1 = (centerIndex - 1 + rings.length) % rings.length;
    const prev2 = (centerIndex - 2 + rings.length) % rings.length;
    const next1 = (centerIndex + 1) % rings.length;
    const next2 = (centerIndex + 2) % rings.length;

    if (index === centerIndex) return 'active';
    if (index === next1) return 'inactiveRight';
    if (index === next2) return 'farRightInactive';
    if (index === prev1) return 'inactiveLeft';
    if (index === prev2) return 'farLeftInactive';
    return 'hidden';
  }

  const isOffscreenRole = (role) => (
    role === 'farLeftInactive'
    || role === 'farRightInactive'
    || role === 'hidden'
  );

  const getOffscreenRoleForSide = (role) => {
    if (role === 'inactiveLeft') return 'farLeftInactive';
    if (role === 'inactiveRight') return 'farRightInactive';
    return role;
  }

  const getTransitionRoles = (fromRole, toRole) => {
    if (isOffscreenRole(fromRole) && (toRole === 'inactiveLeft' || toRole === 'inactiveRight')) {
      return [getOffscreenRoleForSide(toRole), toRole];
    }

    if ((fromRole === 'inactiveLeft' || fromRole === 'inactiveRight') && isOffscreenRole(toRole)) {
      return [fromRole, getOffscreenRoleForSide(fromRole)];
    }

    return [fromRole, toRole];
  }

  const layout = isMobile
    ? {
        active: { top: 15, left: 27, size: 75, mt: -14, ml: -14, opacity: 1, z: 2, fontSize: 2 },
        inactiveLeft: { top: 22, left: -25, size: 30, mt: -7.5, ml: 0, opacity: 1, z: -1, fontSize: 1 },
        inactiveRight: { top: 22, left: 88, size: 30, mt: -7.5, ml: 7.5, opacity: 1, z: -1, fontSize: 1 },
        farLeftInactive: { top: 38, left: -100, size: 30, mt: -7.5, ml: -7.5, opacity: 0, z: -2, fontSize: 1 },
        farRightInactive: { top: 38, left: 150, size: 30, mt: -7.5, ml: -7.5, opacity: 0, z: -2, fontSize: 1 },
        hidden: { top: 38, left: 150, size: 30, mt: -7.5, ml: -7.5, opacity: 0, z: -3, fontSize: 1 },
      }
    : {
        active: { top: 50, left: 50, size: 28, mt: -14, ml: -14, opacity: 1, z: 2, fontSize: 2 },
        inactiveLeft: { top: 50, left: -7.5, size: 15, mt: -7.5, ml: 0, opacity: 1, z: -1, fontSize: 1 },
        inactiveRight: { top: 50, left: 86, size: 15, mt: -7.5, ml: 7.5, opacity: 1, z: -1, fontSize: 1 },
        farLeftInactive: { top: 50, left: -100, size: 15, mt: -7.5, ml: -7.5, opacity: 0, z: -2, fontSize: 1 },
        farRightInactive: { top: 50, left: 150, size: 15, mt: -7.5, ml: -7.5, opacity: 0, z: -2, fontSize: 1 },
        hidden: { top: 50, left: 150, size: 15, mt: -7.5, ml: -7.5, opacity: 0, z: -3, fontSize: 1 },
      };

  const getInterpolatedRingStyle = (index) => {
    const isInteracting = isDragging || isSettling;
    if (!isInteracting) return undefined;

    const fromRing = interactionFromRing ?? activeRing;
    const toRing = interactionToRing ?? fromRing;

    const rawFromRole = getRoleForIndex(index, fromRing);
    const rawToRole = getRoleForIndex(index, toRing);
    const [fromRole, toRole] = getTransitionRoles(rawFromRole, rawToRole);

    const from = layout[fromRole] ?? layout.hidden;
    const to = layout[toRole] ?? layout.hidden;
    const t = clamp(dragProgress, 0, 1);
    const isOffscreenStartReposition = !isDragging && t === 0 && rawFromRole !== fromRole;

    return {
      top: `${lerp(from.top, to.top, t)}%`,
      left: `${lerp(from.left, to.left, t)}%`,
      width: `${lerp(from.size, to.size, t)}vw`,
      height: `${lerp(from.size, to.size, t)}vw`,
      marginTop: `${lerp(from.mt, to.mt, t)}vw`,
      marginLeft: `${lerp(from.ml, to.ml, t)}vw`,
      fontSize: `${lerp(from.fontSize, to.fontSize, t)}vw`,
      opacity: lerp(from.opacity, to.opacity, t),
      zIndex: Math.round(lerp(from.z, to.z, t)),
      transition: isDragging || isOffscreenStartReposition
        ? 'none'
        : 'top 1000ms cubic-bezier(0.22, 1, 0.36, 1), left 1000ms cubic-bezier(0.22, 1, 0.36, 1), width 1000ms cubic-bezier(0.22, 1, 0.36, 1), height 1000ms cubic-bezier(0.22, 1, 0.36, 1), margin 1000ms cubic-bezier(0.22, 1, 0.36, 1), font-size 1000ms cubic-bezier(0.22, 1, 0.36, 1), opacity 800ms ease',
    };
  }

  const getContentStyle = (index, kind) => {
    const isInteracting = isDragging || isSettling;

    const fromRing = interactionFromRing ?? activeRing;
    const toRing = interactionToRing ?? fromRing;

    const fromIsActive = getRoleForIndex(index, fromRing) === 'active';
    const toIsActive = getRoleForIndex(index, toRing) === 'active';

    if (!isInteracting) {
      // Let CSS drive the steady state; we only force hidden when not active.
      return fromIsActive ? undefined : { opacity: 0 };
    }

    const t = easeOut(clamp(dragProgress, 0, 1));
    const fromOpacity = fromIsActive ? 1 : 0;
    const toOpacity = toIsActive ? 1 : 0;
    const opacity = lerp(fromOpacity, toOpacity, t);

    const activeFactor = clamp(lerp(fromIsActive ? 1 : 0, toIsActive ? 1 : 0, t), 0, 1);

    // Override CSS-driven text sizes during interaction so the content reaches
    // its active size at the same time as the ring reaches center.
    const fontSize = (() => {
      if (kind === 'header') {
        if (!isMobile) return `${4 * activeFactor}vw`;

        // Blend 0.75rem (inactive) -> 8vw (active).
        const inactiveRem = 0.75;
        const activeVw = 8;
        return `calc(${inactiveRem * (1 - activeFactor)}rem + ${activeVw * activeFactor}vw)`;
      }

      if (kind === 'text') {
        if (!isMobile) return `${2 * activeFactor}vw`;

        // Blend 0rem (inactive) -> 1.25rem (active).
        const activeRem = 1.25;
        return `calc(${activeRem * activeFactor}rem)`;
      }

      return undefined;
    })();

    const headerMargins = (() => {
      if (kind !== 'header') return {};

      // Match CSS behavior:
      // - Inactive: `.ring h1 { margin: 1vw; }`
      // - Active: `.activeRing h1 { margin: 0; margin-bottom: 1rem; }`
      const marginVw = lerp(1, 0, activeFactor);
      const bottomVw = lerp(1, 0, activeFactor);
      const bottomRem = lerp(0, 1, activeFactor);

      return {
        marginTop: `${marginVw}vw`,
        marginLeft: `${marginVw}vw`,
        marginRight: `${marginVw}vw`,
        marginBottom: `calc(${bottomVw}vw + ${bottomRem}rem)`,
      };
    })();

    return {
      opacity,
      fontSize,
      ...headerMargins,
      transition: isDragging
        ? 'none'
        : 'opacity 1000ms cubic-bezier(0.22, 1, 0.36, 1), font-size 1000ms cubic-bezier(0.22, 1, 0.36, 1), margin 1000ms cubic-bezier(0.22, 1, 0.36, 1)',
    };
  }

  const handleTouchStart = (e) => {
    if (zoomedRing) return;
    if (!e.touches || e.touches.length !== 1) return;

    if (settleTimeoutRef.current) {
      window.clearTimeout(settleTimeoutRef.current);
      settleTimeoutRef.current = null;
    }

    const t = e.touches[0];
    didSwipeRef.current = false;
    setIsDragging(false);
    setIsSettling(false);
    setDragProgress(0);
    setDragDirection(0);
    setInteractionFromRing(activeRing);
    setInteractionToRing(activeRing);
    touchStartRef.current = { x: t.clientX, y: t.clientY };
    touchDeltaRef.current = { x: 0, y: 0 };
  }

  const handleTouchMove = (e) => {
    if (zoomedRing) return;
    if (!e.touches || e.touches.length !== 1) return;

    const t = e.touches[0];
    const dx = t.clientX - touchStartRef.current.x;
    const dy = t.clientY - touchStartRef.current.y;
    touchDeltaRef.current = { x: dx, y: dy };

    const isHorizontal = Math.abs(dx) > 5 && Math.abs(dx) > Math.abs(dy);
    if (!isHorizontal && !isDragging) return;

    didSwipeRef.current = true;
    if (!isDragging) setIsDragging(true);

    pendingTouchRef.current = { dx, dy };
    if (rafRef.current) return;

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      const pending = pendingTouchRef.current;
      if (!pending) return;

      const maxDrag = Math.min(260, window.innerWidth * 0.33);
      const clampedDx = clamp(pending.dx, -maxDrag, maxDrag);
      const dir = clampedDx === 0 ? 0 : clampedDx < 0 ? -1 : 1;
      setDragDirection(dir);
      setDragProgress(Math.abs(clampedDx) / maxDrag);

      const baseRing = interactionFromRing ?? activeRing;
      if (dir === 0) setInteractionToRing(baseRing);
      else setInteractionToRing((baseRing + (dir === -1 ? 1 : -1) + rings.length) % rings.length);
    });
  }

  const handleTouchEnd = () => {
    const { x: dx, y: dy } = touchDeltaRef.current;

    if (!didSwipeRef.current) return;

    setIsDragging(false);
    pendingTouchRef.current = null;
    if (rafRef.current) {
      window.cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    // Only treat as a swipe if it is primarily horizontal.
    const swipeThreshold = 70;
    const isPrimarilyHorizontal = Math.abs(dx) >= Math.abs(dy) * 1.2;

    const settleMs = 1000;
    const dir = dx === 0 ? 0 : dx < 0 ? -1 : 1;
    const baseRing = interactionFromRing ?? activeRing;
    const nextRing = (baseRing + (dir === -1 ? 1 : -1) + rings.length) % rings.length;
    const isCommit = Math.abs(dx) >= swipeThreshold && isPrimarilyHorizontal && dir !== 0;

    setInteractionFromRing(baseRing);
    setInteractionToRing(isCommit ? nextRing : baseRing);
    setIsSettling(true);
    setDragDirection(dir);

    if (isCommit) {
      setActiveRing(nextRing);
    }
    // Finish the interpolation to the end state, or snap back.
    window.requestAnimationFrame(() => {
      setDragProgress(isCommit ? 1 : 0);
    });

    if (settleTimeoutRef.current) {
      window.clearTimeout(settleTimeoutRef.current);
      settleTimeoutRef.current = null;
    }

    settleTimeoutRef.current = window.setTimeout(() => {
      // Clear interaction state; when committed, dragProgress=1 matches nextRing state,
      // so resetting to 0 is visually seamless.
      setIsSettling(false);
      setDragProgress(0);
      setDragDirection(0);
      setInteractionFromRing(null);
      setInteractionToRing(null);
    }, settleMs);
  }

  const selectedRing = rings.find(({ link }) => link === selectedRoute);
  const SelectedContent = selectedRing?.Content;
  const selectedRingTheme = selectedRing?.pageTheme ?? 'ringPageGreen';

  return (
    <main id={styles.home}>
        {/* Turbulence filters that displace the ring border layers so they
            ebb/flow organically. The displacement `scale` breathes via SMIL,
            while the conic gradient + layer rotation (CSS) make the wobble
            travel around the ring. */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true" focusable="false">
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
        <div
          className={`${styles.homeContainer} ${selectedRoute ? styles.homeContentMode : ''}`}
          key='homeContainer'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <FontAwesomeIcon icon={faChevronLeft} className={styles.leftNav} onClick={handlePreviousRing}/>
          <FontAwesomeIcon icon={faChevronRight} className={styles.rightNav} onClick={handleNextRing} />
          <div className='backgroundRing yellowGlow m c1'>
            <FontAwesomeIcon icon={faCube} className={styles.ringIcon} />

          </div>
          <div className='backgroundRing purpleGlow m c2'>
            <FontAwesomeIcon icon={faMessage} className={styles.ringIcon} />
          </div>
          <div className='backgroundRing redGlow l c3'>
            <FontAwesomeIcon icon={faMusic} className={styles.ringIcon} />
          </div>
          <div className='backgroundRing greenGlow m c4'>
            <FontAwesomeIcon icon={faCode} className={styles.ringIcon} />
          </div>
          <div className='backgroundRing purpleGlow m c5'>
            <FontAwesomeIcon icon={faMessage} className={styles.ringIcon} />
          </div>
          <div className={`${styles.ringGrid} ${isDragging || isSettling ? styles.ringInteractionLocked : ''}`}>
            {rings.map((ring, index) => {
              let ringClass;
              let textClass = "";  // kept for future styling

              const visualCenter = (isDragging || isSettling)
                ? (interactionFromRing ?? activeRing)
                : activeRing;

              const prev1 = (visualCenter - 1 + rings.length) % rings.length;
              const prev2 = (visualCenter - 2 + rings.length) % rings.length;
              const next1 = (visualCenter + 1) % rings.length;
              const next2 = (visualCenter + 2) % rings.length;

              if (index === visualCenter) {
                ringClass = styles.activeRing;
                textClass = styles['fade-in-text'];
              } else if (index === next1) {
                ringClass = styles.inactiveRight;
              } else if (index === next2) {
                ringClass = styles.farRightInactive;
              } else if (index === prev1) {
                ringClass = styles.inactiveLeft;
              } else if (index === prev2) {
                ringClass = styles.farLeftInactive;
              } else {
                ringClass = styles.hidden;
              }

              const isSelectableRing = !zoomedRing && !isDragging && !isSettling && index === activeRing;

              return (
                <Fragment key={ring.link}>

                  <div
                    onClick={() => {
                      if (didSwipeRef.current) return;
                      if (!isSelectableRing) return;
                      handleRingClick(ring.id, ring.link);
                    }}
                    className={`${styles.ring} ${styles[ring.color]} ${ringClass} ${isSelectableRing ? styles.selectableRing : styles.nonSelectableRing} ${zoomedRing === ring.id ? styles.ringZoom : ''}`}
                    style={getInterpolatedRingStyle(index)}
                    id={ring.id}>

                    <div className={`${styles.ringBorder} ${styles.ringBorderA}`} aria-hidden="true"></div>
                    <div className={`${styles.ringBorder} ${styles.ringBorderB}`} aria-hidden="true"></div>

                    <div className={styles.ringContainer}>

                      {ring.icon && (
                        <FontAwesomeIcon
                          icon={ring.icon}
                          className={styles.ringIcon}
                          style={zoomedRing === ring.id ? { opacity: 0, color: 'rgba(0, 0, 0, 0)' } : undefined}
                        />
                      )}
                      <h1 className={`${styles.ringHeader} ${textClass}`} style={getContentStyle(index, 'header')}>{ring.header}</h1>
                      {ring.text.map((text, i) => {
                        return (
                          <p className={`${styles.ringText} ${textClass}`} style={getContentStyle(index, 'text')} key={i}>{text}</p>
                        )
                      })}

                    </div>


                  </div>
                   <div className={styles.greenGlowBorder}></div>
                </Fragment>
              );
            })}
          </div>
          {SelectedContent && (
            <div className={`${styles.homeRingPageContent} ${isRingContentVisible ? styles.homeRingPageContentVisible : ''} ringPageViewport ${selectedRingTheme}`}>
              <div
                className={`ringPageScrollArc ${hasRingScrollableContent ? 'ringPageScrollArcVisible' : ''}`}
                style={{
                  '--ring-scroll-progress-angle': `${5 + ringScrollProgress * 55}deg`,
                  '--ring-scroll-progress-distance': `${ringScrollProgress * 50}dvh`,
                }}
                aria-hidden="true"
              ></div>
              <div
                className={`ringPageContentScroll ${styles.homeRingPageContentScroll}`}
                ref={ringContentScrollRef}
                onScroll={updateRingScrollProgress}
              >
                <button className='ringPageBackButton' type='button' onClick={handleRingBack}>
                  <span aria-hidden="true">‹</span>
                  Back
                </button>
                <SelectedContent />
              </div>
            </div>
          )}
        </div>
    </main>
  )
}
