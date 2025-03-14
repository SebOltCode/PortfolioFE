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
        }, 1000); //
      }, 4000);
    };

    startSlideshow();

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    };
  }, [currentIndex, images.length]);

  return (
    <div className="image-slideshow-container">
      <div className="slideshow-image">
        <img
          src={images[currentIndex]}
          alt={`Profile ${currentIndex + 1}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: isTransitioning ? 0 : 1,
            transition: "opacity 1s ease-in-out",
            zIndex: 2,
          }}
        />

        <img
          src={images[prevIndex]}
          alt={`Profile ${prevIndex + 1}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
};

export default ImageSlideshow;
