'use client'
import Image from 'next/image';

import port1 from '@/assets/port.jpg';
import port2 from '@/assets/port1.jpg';
import port3 from '@/assets/port3.jpg';
import port4 from '@/assets/port4.png';
import port5 from '@/assets/port5.jpg';
// import tomatoSaladImg from '@/assets/tomato-salad.jpg'; 
import classes from './image-slideshow.module.css';
import { useEffect, useState } from 'react';

const images = [
  { image: port1, alt: 'Port picture' },
  { image: port2, alt: 'A delicious, spicy curry' },
  { image: port3, alt: 'Steamed dumplings' },
  { image: port4, alt: 'A delicious pizza' },
  { image: port5, alt: 'A delicious schnitzel' },
//   { image: tomatoSaladImg, alt: 'A delicious tomato salad' }, 
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}