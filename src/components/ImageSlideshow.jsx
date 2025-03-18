import { useState, useEffect, useRef } from "react";

const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(images.length - 1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef(null);
  const transitionTimerRef = useRef(null);

  useEffect(() => {
    const startSlideshow = () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);

      timerRef.current = setTimeout(() => {
        setPrevIndex(currentIndex);
        const nextIndex = (currentIndex + 1) % images.length;
        setIsTransitioning(true);

        transitionTimerRef.current = setTimeout(() => {
          setCurrentIndex(nextIndex);
          setIsTransitioning(false);
        }, 1000);
      }, 4000);
    };

    startSlideshow();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    };
  }, [currentIndex, images.length]);

  return (
    <div className="relative w-full max-w-[900px] mx-auto aspect-square min-h-[240px] border-4 border-gray-300 dark:border-gray-700 shadow-lg rounded-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images[currentIndex]}
          alt={`Profile ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 z-20 rounded-full"
          style={{ opacity: isTransitioning ? 0 : 1 }}
        />

        <img
          src={images[prevIndex]}
          alt={`Profile ${prevIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover z-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default ImageSlideshow;
