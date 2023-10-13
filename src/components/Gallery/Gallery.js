'use client';

import Image from 'next/image';
import styles from './Gallery.module.css'
import { useState, useEffect } from 'react';


export default function Gallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageContainer}>
        <Image src={mainImage} alt="Main Image" layout="fill" objectFit="contain"/>
      </div>

      <div className={`${styles.thumbnails}`}>
        {images.map((image, index) => (
          <div key={index} className={styles.thumbnailContainer} onClick={() => setMainImage(image)}>
            <Image src={image} alt={`Thumbnail ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
}