'use client';

import Image from 'next/image';
import styles from './Gallery.module.css'
import { useState, useEffect } from 'react';

export default function Gallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);
  const [isModalOpen, setModalOpen] = useState(false); // New state for modal

  const closeModal = () => setModalOpen(false);

  const openModal = () => setModalOpen(true);

  return (
    <div className={styles.gallery}>
      {/* Main Image */}
      <div className={styles.mainImageContainer} onClick={openModal}> {/* Open modal when main image is clicked */}
        <Image src={mainImage} alt="Main Image" layout="fill" objectFit="contain"/>
      </div>

      {/* Thumbnails */}
      <div className={`${styles.thumbnails}`}>
        {images.map((image, index) => (
          <div key={index} className={styles.thumbnailContainer} onClick={() => setMainImage(image)}>
            <Image src={image} alt={`Thumbnail ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal}>
            <Image src={mainImage} alt="Modal Main Image" layout="responsive" width={800} height={800} />
          </div>
        </div>
      )}
    </div>
  );
}