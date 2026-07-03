'use client';

import Image from 'next/image';
import styles from './Gallery.module.css'
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Gallery({ images = [] }) {
  const safeImages = Array.isArray(images) ? images.filter(Boolean) : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const activeImage = safeImages[activeIndex] ?? null;
  const canNavigate = safeImages.length > 1;

  const selectImage = (index) => {
    setActiveIndex(index);
  };

  const openModal = () => {
    if (!activeImage) return;
    setModalOpen(true);
  };

  const closeModal = useCallback(() => setModalOpen(false), []);

  const goPrev = useCallback(() => {
    if (!canNavigate) return;
    setActiveIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
  }, [canNavigate, safeImages.length]);

  const goNext = useCallback(() => {
    if (!canNavigate) return;
    setActiveIndex((i) => (i + 1) % safeImages.length);
  }, [canNavigate, safeImages.length]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeModal();
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isModalOpen, closeModal, goPrev, goNext]);

  if (!activeImage) return null;

  const modal = isModalOpen && isClient
    ? createPortal(
        <div className={styles.modalOverlay} onClick={closeModal} role="presentation">
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-label={`Screenshot ${activeIndex + 1} of ${safeImages.length}`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Close image viewer"
            />

            {canNavigate && (
              <button
                type="button"
                className={`${styles.navButton} ${styles.navPrev}`}
                onClick={goPrev}
                aria-label="Previous image"
              >
                ‹
              </button>
            )}

            {/* Native img keeps mixed aspect ratios within the viewport without a fixed frame. */}
            <img
              src={activeImage}
              alt={`Project screenshot ${activeIndex + 1}`}
              className={styles.modalImage}
            />

            {canNavigate && (
              <button
                type="button"
                className={`${styles.navButton} ${styles.navNext}`}
                onClick={goNext}
                aria-label="Next image"
              >
                ›
              </button>
            )}

            {canNavigate && (
              <p className={styles.modalCounter}>
                {activeIndex + 1} / {safeImages.length}
              </p>
            )}
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <div className={styles.gallery}>
      <button
        type="button"
        className={styles.mainImageButton}
        onClick={openModal}
        aria-label="View larger image"
      >
        <div className={styles.mainImageContainer}>
          <Image
            src={activeImage}
            alt={`Project screenshot ${activeIndex + 1}`}
            fill
            sizes="(max-width: 768px) 92vw, 40vw"
            className={styles.mainImage}
            priority={activeIndex === 0}
          />
        </div>
      </button>

      <div className={styles.thumbnails} role="listbox" aria-label="Project screenshots">
        {safeImages.map((image, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={image}
              type="button"
              role="option"
              aria-selected={isActive}
              aria-label={`Show screenshot ${index + 1}`}
              className={`${styles.thumbnailButton} ${isActive ? styles.thumbnailActive : ''}`}
              onClick={() => selectImage(index)}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width: 600px) 30vw, 18vw"
                className={styles.thumbnailImage}
              />
            </button>
          );
        })}
      </div>

      {modal}
    </div>
  );
}
