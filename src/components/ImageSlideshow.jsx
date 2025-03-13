import { useState, useEffect } from "react";

const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFadeState("fade-out");

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeState("fade-in");
      }, 1000);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="image-slideshow-container">
      <div className={`slideshow-image ${fadeState}`}>
        <img
          src={images[currentIndex]}
          alt={`Profile ${currentIndex + 1}`}
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-gray-700 shadow-lg"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ImageSlideshow;
