import React, { useState, useEffect, useRef } from "react";
import slidesData from "../slides.json"; // Import the JSON file

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        changeSlide((prevIndex) => (prevIndex + 1) % slidesData.length);
      }
    }, 5000); // Change slide every 5000ms (5 seconds)

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const currentSlide = slidesData[currentIndex];

  // Function to handle slide transition smoothly (slide and fade)
  const changeSlide = (newIndex) => {
    setIsTransitioning(true);
    const container = containerRef.current;

    // Start fading out and sliding out the current slide
    container.style.transition = "transform 1s ease-out, opacity 1s ease-out";
    container.style.transform = "translateX(-100%)"; // Slide current slide out
    container.style.opacity = 0;

    setTimeout(() => {
      setCurrentIndex(newIndex); // Update the slide after fading out
      container.style.transition = "none"; // Disable transition during slide change
      container.style.transform = "translateX(100%)"; // Start the new slide off-screen to the right
      container.style.opacity = 1; // Reset opacity for new slide

      // Slide the new image into view
      setTimeout(() => {
        container.style.transition = "transform 1s ease-out, opacity 1s ease-out";
        container.style.transform = "translateX(0)"; // Slide the new slide into view
        setIsTransitioning(false); // Allow the next transition
      }, 0);
    }, 1000); // Wait for 1 second before switching slide
  };

  return (
    <section className="w-full h-screen bg-[#f9f9f9] flex items-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center px-8 py-16">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <h3 className="text-lg font-semibold text-[#e63946] uppercase mb-2">{currentSlide.subtitle}</h3>
          <h1 className="text-5xl font-extrabold leading-tight text-[#437C8A] mb-4">
            <span className="text-black">{currentSlide.title.split(" ")[0]}</span> <br />
            <span className="text-[red]">{currentSlide.title.split(" ")[1]}</span>
          </h1>
          <p className="text-gray-600 text-xl mb-6 max-w-lg">{currentSlide.description}</p>
          <button className="px-8 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-[#d43e40] transition duration-300">Shop Now</button>
        </div>
        {/* Right: Image */}
        <div
          ref={containerRef}
          className="flex-1 flex justify-end mt-8 md:mt-0"
          style={{
            transition: "transform 1s ease-out, opacity 1s ease-out",
            transform: "translateX(0)", // Initial position in view
            opacity: 1, // Initially visible
          }}
        >
          <img src={currentSlide.image} alt="Indomie" className="w-[340px] md:w-[500px] object-contain" style={{ maxHeight: 420 }} />
        </div>
      </div>
    </section>
  );
}
