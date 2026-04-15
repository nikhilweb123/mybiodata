"use client";

import { useRef } from 'react';
import Image from 'next/image';
import img1 from './biodata-photo-1.jpg';
import img2 from './biodata-photo-2.jpg';

const images = [img1, img2];

export default function PhotoGallery() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <h2 style={{ marginBottom: '1.5rem' }}><i className="fa-solid fa-camera"></i> Photos</h2>

      <div style={{ position: 'relative', flex: 1, minHeight: '500px', width: '100%', borderRadius: '1rem', overflow: 'hidden' }}>

        <button
          onClick={scrollLeft}
          className="gallery-nav-btn left-btn"
          aria-label="Scroll Left"
          style={{ zIndex: 20, position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }}
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>

        <div
          ref={scrollContainerRef}
          className="gallery-scroll-container"
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            padding: 0,
            margin: 0,
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            overflowY: 'hidden',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory'
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 100%',
                height: '100%',
                scrollSnapAlign: 'start',
                position: 'relative'
              }}
            >
              <Image
                src={img}
                alt={`Biodata Photo ${index + 1}`}
                fill
                placeholder="blur"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="gallery-nav-btn right-btn"
          aria-label="Scroll Right"
          style={{ zIndex: 20, position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>

      </div>
    </section>
  );
}
