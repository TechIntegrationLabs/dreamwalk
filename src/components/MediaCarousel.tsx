import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import YouTube from 'react-youtube';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  videoId?: string;
  title: string;
  description: string;
  source: string;
  date: string;
}

const getYouTubeId = (url: string): string => {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match ? match[1] : '';
};

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: 'video',
    src: 'https://img.youtube.com/vi/Fy4iiueJiFY/maxresdefault.jpg',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=Fy4iiueJiFY'),
    title: 'DreamWalk Park - A New Adventure in Entertainment',
    description: 'Step into a world where dreams come to life. DreamWalk Park combines cutting-edge technology with immersive storytelling to create an unforgettable experience.',
    source: 'DreamWalk Official',
    date: 'December 2024'
  },
  {
    id: 2,
    type: 'video',
    src: 'https://img.youtube.com/vi/ZvJeck1Njgc/maxresdefault.jpg',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=ZvJeck1Njgc'),
    title: 'Behind the Magic: DreamWalk Park',
    description: 'Get an exclusive look behind the scenes of Utah County\'s most innovative entertainment destination. See how technology and creativity merge to create something truly unique.',
    source: 'DreamWalk Insider',
    date: 'December 2024'
  },
  {
    id: 3,
    type: 'video',
    src: 'https://img.youtube.com/vi/EZpv1X0HMuw/maxresdefault.jpg',
    videoId: getYouTubeId('https://www.youtube.com/watch?v=EZpv1X0HMuw'),
    title: 'The Vision of DreamWalk',
    description: 'Discover the creative vision behind DreamWalk Park and how it\'s setting a new standard for immersive entertainment.',
    source: 'DreamWalk Official',
    date: 'December 2024'
  },
  {
    id: 4,
    type: 'image',
    src: 'https://bloximages.chicago2.vip.townnews.com/heraldextra.com/content/tncms/assets/v3/editorial/8/8f/88f8f8f8-8f8f-8f8f-8f8f-8f8f8f8f8f8f/8f8f8f8f8f8f8f8f.jpg',
    title: 'Get to Know DreamWalk Park: Utah County\'s Newest Entertainment Adventure',
    description: 'Herald Extra takes an in-depth look at DreamWalk Park, exploring how this innovative entertainment venue is transforming the landscape of family entertainment in Utah County.',
    source: 'Herald Extra',
    date: 'December 5, 2024'
  }
];

const MediaCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const playerRefs = useRef<{ [key: number]: any }>({});
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup function for players
  const cleanupPlayers = () => {
    if (isPlaying !== null && playerRefs.current[isPlaying]) {
      try {
        playerRefs.current[isPlaying].pauseVideo();
      } catch (error) {
        console.error('Error pausing video:', error);
      }
    }
    setIsPlaying(null);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      cleanupPlayers();
    };
  }, []);

  const nextSlide = () => {
    cleanupPlayers();
    setActiveIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    cleanupPlayers();
    setActiveIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const handleMouseEnter = (id: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    if (mediaItems[id].type === 'video') {
      // Add a small delay before showing the video to prevent rapid toggling
      hoverTimeoutRef.current = setTimeout(() => {
        cleanupPlayers();
        setIsPlaying(id);
      }, 200);
    }
  };

  const handleMouseLeave = (id: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    if (mediaItems[id].type === 'video') {
      hoverTimeoutRef.current = setTimeout(() => {
        cleanupPlayers();
      }, 200);
    }
  };

  const youtubeOpts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      mute: 1,
      playsinline: 1,
      loop: 1,
    },
  };

  return (
    <section className="py-12 sm:py-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 z-10 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 z-10 transform -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Media Items */}
          <div className="relative aspect-video overflow-hidden rounded-lg sm:rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {mediaItems.map((item) => (
                <div
                  key={item.id}
                  className="min-w-full relative"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={() => handleMouseLeave(item.id)}
                >
                  {item.type === 'video' ? (
                    <div className="relative w-full h-full">
                      {isPlaying === item.id ? (
                        <YouTube
                          videoId={item.videoId}
                          opts={{
                            ...youtubeOpts,
                            playerVars: {
                              ...youtubeOpts.playerVars,
                              playsinline: 1
                            }
                          }}
                          onReady={(event) => {
                            playerRefs.current[item.id] = event.target;
                          }}
                          className="w-full h-full"
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Title and Description */}
          <div className="mt-4 sm:mt-6 text-center px-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 hover:text-purple-400 transition-colors">
              {mediaItems[activeIndex].title}
            </h3>
            
            <div className="bg-gray-900/95 p-4 sm:p-6 rounded-lg">
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                {mediaItems[activeIndex].description}
              </p>
              <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                <span>{mediaItems[activeIndex].source}</span>
                <span>{mediaItems[activeIndex].date}</span>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-1.5 sm:space-x-2 mt-4 sm:mt-6">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  cleanupPlayers();
                  setActiveIndex(index);
                }}
                className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-purple-500 w-4 sm:w-6'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCarousel;
