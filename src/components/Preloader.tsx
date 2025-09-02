import { useEffect, useState } from "react";

interface PreloaderProps {
  onLoadingComplete: () => void;
}

export const Preloader = ({ onLoadingComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500);
          }, 800);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary via-primary to-primary/90 flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-accent rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-accent rounded-full animate-pulse animation-delay-200"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-accent rounded-full animate-pulse animation-delay-400"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 border border-accent rounded-full animate-pulse animation-delay-600"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center px-8 max-w-md mx-auto">
        {/* Logo Container */}
        <div className="relative mb-8">
          <div className="absolute -inset-4 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <img 
              src="/work/logo2.png" 
              alt="Kumar Gaurav Interiors" 
              className="h-16 md:h-20 w-auto object-contain animate-fade-in"
            />
          </div>
        </div>

        {/* Company Name */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 animate-slide-up animation-delay-200">
          Kumar Gaurav
        </h1>
        <p className="text-accent text-lg md:text-xl font-medium mb-8 animate-slide-up animation-delay-400">
          Interior Designs
        </p>

        {/* Loading Progress */}
        <div className="w-full max-w-xs mx-auto mb-6 animate-slide-up animation-delay-600">
          <div className="flex justify-between text-white/80 text-sm mb-2">
            <span>Loading Experience</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-accent to-accent-hover h-full rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-white/70 text-sm animate-slide-up animation-delay-800">
          <div className="flex items-center justify-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce animation-delay-75"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce animation-delay-200"></div>
            </div>
            <span>Preparing your space</span>
          </div>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-white/60 text-sm animate-fade-in animation-delay-800">
          Transforming spaces, creating dreams
        </p>
      </div>
    </div>
  );
};
