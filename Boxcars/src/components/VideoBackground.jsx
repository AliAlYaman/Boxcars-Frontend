// src/components/VideoBackground.jsx
import React, { useState, useEffect } from "react";

const videos = [
  {
    src: '/assets/videos/Mercedes-Benz CLE Coupe ＂Shaped by Desire＂ Commercial.mp4',
    title: 'Mercedes-Benz CLE Coupe',
    description: 'Shaped by Desire',
  },
  {
    src: '/assets/videos/Mercedes - AMG GT Cinematic Car Commercial _ Blender 2.92.mp4',
    title: 'Mercedes-AMG GT',
    description: 'Performance Meets Luxury',
  },
  {
    src: '/assets/videos/Corvette CINEMATIC Car Commercial I Blender.mp4',
    title: 'Corvette',
    description: 'American Icon Reimagined',
  }
];

export const VideoBackground = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const video = document.getElementById('bgVideo');
    if (video) {
      video.play().catch((error) => console.error("Video play failed:", error));
    }
  }, [currentVideo]);

  const handleVideoEnd = () => {
    setOpacity(0); // Start fading out the video
    setTimeout(() => {
      setCurrentVideo((prevIndex) => (prevIndex + 1) % videos.length); // Switch video
      setOpacity(1); // Fade back in the new video
    }, 500); // Duration matches the fade transition
  };

  const goToVideo = (index) => {
    if (index !== currentVideo) {
      setOpacity(0); // Fade out
      setTimeout(() => {
        setCurrentVideo(index); // Switch video
        setOpacity(1); // Fade back in
      }, 500);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Black background during transitions */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out bg-black`}
        style={{ opacity: opacity === 0 ? 1 : 0 }}
      ></div>

      {/* Video Background */}
      <video
        id="bgVideo"
        key={videos[currentVideo].src}
        className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ease-in-out"
        style={{ opacity }}
        autoPlay
        muted
        onEnded={handleVideoEnd}
      >
        <source src={videos[currentVideo].src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-4 ">
        <div className="text-center text-white max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {videos[currentVideo].title}
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            {videos[currentVideo].description}
          </p>
          <button className="bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-opacity-80 transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToVideo(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentVideo === index
                ? 'bg-white'
                : 'bg-gray-500 hover:bg-gray-300'
            }`}
            aria-label={`Go to video ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
