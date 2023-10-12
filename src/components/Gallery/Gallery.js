'use client';

import Image from 'next/image';
import styles from './Gallery.module.css'
import { useState } from 'react';

export default function Gallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageContainer}>
        <Image src={mainImage} alt="Main Image" layout="fill" objectFit="contain"
        onClick={() => setIsModalOpen(true)}/>
      </div>

      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <div key={index} className={styles.thumbnailContainer} onClick={() => setMainImage(image)}>
            <Image src={image} alt={`Thumbnail ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={()=>{setIsModalOpen(false)}}>
          <div className={styles.modalContent}>
          <Image src={mainImage} alt="Modal View" layout="fill" objectFit="contain" />
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}