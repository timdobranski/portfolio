'use client';

import styles from './Home.module.css'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faMusic, faCode, faGraduationCap, faWrench, faMessage } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [activeRing, setActiveRing] = useState(1);
  const [zoomedRing, setZoomedRing] = useState(null);

  const [dragProgress, setDragProgress] = useState(0); // 0..1
  const [dragDirection, setDragDirection] = useState(0); // -1 (left), 1 (right)
  const [isDragging, setIsDragging] = useState(false);
  const [isSettling, setIsSettling] = useState(false);
  const [interactionFromRing, setInteractionFromRing] = useState(null);
  const [interactionToRing, setInteractionToRing] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const touchStartRef = useRef({ x: 0, y: 0 });
  const touchDeltaRef = useRef({ x: 0, y: 0 });
  const didSwipeRef = useRef(false);
  const settleTimeoutRef = useRef(null);
  const rafRef = useRef(null);
  const pendingTouchRef = useRef(null);

  const router = useRouter();
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = () => setIsMobile(mq.matches);

    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const rings = [
    {
      header: 'CONNECT',
      text: ['Select this ring to', 'connect with me'],
      color: 'purpleGlow',
      link: '/connect',
      id: 'ring0',
      icon: faMessage
    },
    {
      header: 'APPS',
      text: ['Select this ring to', 'see my web and mobile', 'software projects'],
      color: 'greenGlow',
      link: '/apps',
      id: 'ring1',
      icon: faCode
    },
    {
      header: 'MUSIC',
      text: ['Select this ring to see my ', 'musical projects'],
      color: 'redGlow',
      link: '/music',
      id: 'ring2',
      icon: faMusic
    },
    {
      header: 'LESSONS',
      text: ['Select this ring to learn', 'more about my guitar', 'lessons'],
      color: 'blueGlow',
      link: '/lessons',
      id: 'ring3',
      icon: faGraduationCap
    },
    {
      header: '3D DESIGN',
      text: ['Select this ring to', 'see the art I create', 'from 3D models and', 'woodworking'],
      color: 'yellowGlow',
      link: '/3d-design',
      id: 'ring4',
      icon: faWrench
    },
  ]


  const handleRingClick = (ringElement, url) => {
    setZoomedRing(ringElement);
    setTimeout(() => {
      router.push(url);
    }, 1000);
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

  const layout = isMobile
    ? {
        active: { top: 15, left: 27, size: 75, mt: -14, ml: -14, opacity: 1, z: 2 },
        inactiveLeft: { top: 22, left: -25, size: 30, mt: -7.5, ml: 0, opacity: 1, z: -1 },
        inactiveRight: { top: 22, left: 88, size: 30, mt: -7.5, ml: 7.5, opacity: 1, z: -1 },
        farLeftInactive: { top: 38, left: -100, size: 30, mt: -7.5, ml: -7.5, opacity: 0, z: -2 },
        farRightInactive: { top: 38, left: 150, size: 30, mt: -7.5, ml: -7.5, opacity: 0, z: -2 },
        hidden: { top: 38, left: 150, size: 30, mt: -7.5, ml: -7.5, opacity: 0, z: -3 },
      }
    : {
        active: { top: 37, left: 50, size: 28, mt: -14, ml: -14, opacity: 1, z: 2 },
        inactiveLeft: { top: 38, left: -7.5, size: 15, mt: -7.5, ml: 0, opacity: 1, z: -1 },
        inactiveRight: { top: 38, left: 86, size: 15, mt: -7.5, ml: 7.5, opacity: 1, z: -1 },
        farLeftInactive: { top: 38, left: -100, size: 15, mt: -7.5, ml: -7.5, opacity: 0, z: -2 },
        farRightInactive: { top: 38, left: 150, size: 15, mt: -7.5, ml: -7.5, opacity: 0, z: -2 },
        hidden: { top: 38, left: 150, size: 15, mt: -7.5, ml: -7.5, opacity: 0, z: -3 },
      };

  const getInterpolatedRingStyle = (index) => {
    const isInteracting = isDragging || isSettling;
    if (!isInteracting) return undefined;

    const fromRing = interactionFromRing ?? activeRing;
    const toRing = interactionToRing ?? fromRing;

    const fromRole = getRoleForIndex(index, fromRing);
    const toRole = getRoleForIndex(index, toRing);

    const from = layout[fromRole] ?? layout.hidden;
    const to = layout[toRole] ?? layout.hidden;
    const t = clamp(dragProgress, 0, 1);

    return {
      top: `${lerp(from.top, to.top, t)}%`,
      left: `${lerp(from.left, to.left, t)}%`,
      width: `${lerp(from.size, to.size, t)}vw`,
      height: `${lerp(from.size, to.size, t)}vw`,
      marginTop: `${lerp(from.mt, to.mt, t)}vw`,
      marginLeft: `${lerp(from.ml, to.ml, t)}vw`,
      opacity: lerp(from.opacity, to.opacity, t),
      zIndex: Math.round(lerp(from.z, to.z, t)),
      transition: isDragging
        ? 'none'
        : 'top 1000ms cubic-bezier(0.22, 1, 0.36, 1), left 1000ms cubic-bezier(0.22, 1, 0.36, 1), width 1000ms cubic-bezier(0.22, 1, 0.36, 1), height 1000ms cubic-bezier(0.22, 1, 0.36, 1), margin 1000ms cubic-bezier(0.22, 1, 0.36, 1), opacity 800ms ease',
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
    const scale = lerp(fromIsActive ? 1 : 0.98, toIsActive ? 1 : 0.98, t);

    const activeFactor = clamp(lerp(fromIsActive ? 1 : 0, toIsActive ? 1 : 0, t), 0, 1);

    // Mobile has CSS that hard-sets inactive font sizes (e.g. text = 0rem).
    // Override those during interaction so incoming rings can grow/reveal gradually.
    const fontSize = (() => {
      if (!isMobile) return undefined;

      if (kind === 'header') {
        // Blend 0.75rem (inactive) -> 8vw (active)
        const inactiveRem = 0.75;
        const activeVw = 8;
        return `calc(${inactiveRem * (1 - t)}rem + ${activeVw * t}vw)`;
      }

      if (kind === 'text') {
        // Blend 0rem (inactive) -> 1.25rem (active)
        const activeRem = 1.25;
        return `calc(${activeRem * t}rem)`;
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
      transform: `scale(${scale})`,
      fontSize,
      ...headerMargins,
      transition: isDragging
        ? 'none'
        : 'opacity 700ms ease, transform 700ms ease, font-size 700ms ease, margin 700ms ease',
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
    const maxDrag = typeof window !== 'undefined' ? Math.min(260, window.innerWidth * 0.33) : 220;
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


  return (
    <main id={styles.home}>
      <AnimatePresence >

        {/* <svg style={{position: 'absolute', width: 0, height: 0}}>
          <filter id="water">
            <feTurbulence  id='sea-filter' baseFrequency='0.005' numOctaves="5" seed='0' />
            <feDisplacementMap  id='displacement' in="SourceGraphic" in2='noise' scale="7"/>
          </filter>
          <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="90s" keyTimes="0;0.5;1" values="0.02 0.02;0.03 0.03;0.02 0.02" repeatCount="indefinite"/>

        </svg> */}
        <div
          className={styles.homeContainer}
          key='homeContainer'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <FontAwesomeIcon icon={faChevronLeft} className={styles.leftNav} onClick={handlePreviousRing}/>
          <FontAwesomeIcon icon={faChevronRight} className={styles.rightNav} onClick={handleNextRing} />
          <div className='backgroundRing yellowGlow m c1'>
            <FontAwesomeIcon icon={faWrench} className={styles.ringIcon} />

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
          <div className='backgroundRing blueGlow m c5'>
            <FontAwesomeIcon icon={faGraduationCap} className={styles.ringIcon} />
          </div>
          <div className={styles.ringGrid}>
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

              return (
                <>

                  <div
                    onClick={() => {
                      if (didSwipeRef.current) return;
                      handleRingClick(ring.id, ring.link);
                    }}
                    key={ring.link}
                    className={`${styles.ring} ${styles[ring.color]} ${ringClass} ${zoomedRing === ring.id ? styles.ringZoom : ''}`}
                    style={getInterpolatedRingStyle(index)}
                    id={ring.id}>

                    <div className={styles.ringContainer}>

                      {ring.icon && <FontAwesomeIcon icon={ring.icon} className={styles.ringIcon} />}
                      <h1 className={`${styles.ringHeader} ${textClass}`} style={getContentStyle(index, 'header')}>{ring.header}</h1>
                      {ring.text.map((text, i) => {
                        return (
                          <p className={`${styles.ringText} ${textClass}`} style={getContentStyle(index, 'text')} key={i}>{text}</p>
                        )
                      })}

                    </div>


                  </div>
                   <div className={styles.greenGlowBorder}></div>
                </>
              );
            })}
          </div>
        </div>
      </AnimatePresence>
    </main>
  )
}
