// Carousel.js

import { useState } from "react";
import { motion } from "framer-motion";

const Carousel = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for Next, -1 for Prev

  const handlePrev = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
    setDirection(-1); // Set direction to -1 for Prev
  };

  const handleNext = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
    setDirection(1); // Set direction to 1 for Next
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-center group items-center duration-300">
        <button
          className="absolute hover:scale-110 group opacity-0 group-hover:opacity-100 duration-300 z-20  left-0 top-1/2 transform -translate-y-1/2  px-3 py-1 rounded-lg text-white"
          onClick={handlePrev}
        >
          <svg
            fill="#525252"
            height="30px"
            width="30px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            // xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <polygon points="12,17 11,17 11,15 9,15 9,13 21,13 21,11 9,11 9,9 11,9 11,7 12,7 12,5 9,5 9,7 7,7 7,9 5,9 5,10 4,10 4,11 3,11 3,13 4,13 4,14 5,14 5,15 7,15 7,17 9,17 9,19 12,19 "></polygon>{" "}
            </g>
          </svg>
        </button>
        <button
          className="absolute z-20 hover:scale-110 group opacity-0 group-hover:opacity-100 duration-300 right-0 top-1/2 transform -translate-y-1/2  px-3 py-1 rounded-lg text-white"
          onClick={handleNext}
        >
          <svg
            fill="#525252"
            width="30px"
            height="30px"
            version="1.1"
            id="Layer_1"
            viewBox="0 0 24 24"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <polygon points="12,7 13,7 13,9 15,9 15,11 3,11 3,13 15,13 15,15 13,15 13,17 12,17 12,19 15,19 15,17 17,17 17,15 19,15 19,14 20,14 20,13 21,13 21,11 20,11 20,10 19,10 19,9 17,9 17,7 15,7 15,5 12,5 "></polygon>{" "}
            </g>
          </svg>
        </button>
        <motion.div
          className="w-full min-w-[100px] h-64 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          key={currentImage}
        >
          <motion.img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="w-full h-full object-cover"
            initial={{ x: direction === 1 ? "100%" : "-100%" }}
            animate={{ x: "0" }}
            exit={{ x: direction === 1 ? "-100%" : "100%" }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
