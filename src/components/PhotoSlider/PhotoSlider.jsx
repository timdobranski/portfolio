'use client';

import { useMemo, useState } from 'react';
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
      <div className={styles.frame} style={{ aspectRatio }}>
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
            onClick={goPrev}
            disabled={!canNavigate}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={goNext}
            disabled={!canNavigate}
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
