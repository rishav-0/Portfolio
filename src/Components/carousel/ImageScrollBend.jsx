import React, { useRef, useEffect } from 'react';
import './ImageScrollBend.css'; // Import your CSS file

const ImageScrollBend = ({ images }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const containerWidth = scrollContainer.offsetWidth;
      const scrollLeft = scrollContainer.scrollLeft;
      const centerOfView = scrollLeft + containerWidth / 2;

      Array.from(scrollContainer.children).forEach((image) => {
        const imageCenter = image.offsetLeft + image.offsetWidth / 2;
        const distanceToCenter = Math.abs(imageCenter - centerOfView);
        const maxDistance = containerWidth / 2; // Adjust for falloff

        const scale = 1 - (distanceToCenter / maxDistance) * 0.1; // Adjust for intensity
        const rotationY = (distanceToCenter / maxDistance) * 10 * (imageCenter > centerOfView ? 1 : -1); // Adjust for angle

        image.style.transform = `scale(${Math.max(0.9, scale)}) rotateY(${rotationY}deg)`;
      });
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to apply styles on load

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [images]);

  return (
    <div className="image-scroll-container no-scrollbar" ref={scrollContainerRef}>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} className="scroll-image border-2 border-white" />
      ))}
    </div>
  );
};

export default ImageScrollBend;