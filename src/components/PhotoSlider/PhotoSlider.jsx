'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './PhotoSlider.module.css';

export default function PhotoSlider({
  images,
  aspectRatio = '3 / 2',
  altBase = 'Photo',
  className = '',
}) {
  const safeImages = useMemo(() => (Array.isArray(images) ? images.filter(Boolean) : []), [images]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const touchStartRef = useRef(null);

  const canNavigate = safeImages.length > 1;
  const activeSrc = safeImages[activeIndex];

  function goNext() {
    if (!canNavigate) return;
    setActiveIndex((i) => (i + 1) % safeImages.length);
  }

  function goPrev() {
    if (!canNavigate) return;
    setActiveIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(Boolean(mql.matches));
    update();
    mql.addEventListener?.('change', update);
    return () => mql.removeEventListener?.('change', update);
  }, []);

  function onTouchStart(e) {
    if (!canNavigate) return;
    const t = e.touches?.[0];
    if (!t) return;
    touchStartRef.current = { x: t.clientX, y: t.clientY };
  }

  function onTouchEnd(e) {
    if (!canNavigate) return;
    const start = touchStartRef.current;
    touchStartRef.current = null;
    const t = e.changedTouches?.[0];
    if (!start || !t) return;

    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;

    if (Math.abs(dx) < 50) return;
    if (Math.abs(dx) < Math.abs(dy) * 1.2) return;

    if (dx > 0) goPrev();
    else goNext();
  }

  if (safeImages.length === 0) {
    return (
      <div className={`${styles.root} ${className}`}>
        <div className={styles.empty}>
          <p className={styles.emptyText}>Add photos to show here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.root} ${className}`}>
      <div
        className={styles.frame}
        style={{ aspectRatio }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <Image
          src={activeSrc}
          alt={`${altBase} ${activeIndex + 1}`}
          fill
          sizes="(max-width: 768px) 92vw, 420px"
          className={styles.image}
          priority={activeIndex === 0}
        />

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.navButton}
            onClick={isMobile ? undefined : goPrev}
            disabled={!canNavigate || isMobile}
            tabIndex={isMobile ? -1 : 0}
            aria-hidden={isMobile}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={isMobile ? undefined : goNext}
            disabled={!canNavigate || isMobile}
            tabIndex={isMobile ? -1 : 0}
            aria-hidden={isMobile}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      </div>

      {canNavigate && (
        <div className={styles.dots} aria-label="Photo slider dots">
          {safeImages.map((_, i) => (
            <button
              key={i}
              type="button"
              className={i === activeIndex ? styles.dotActive : styles.dot}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
