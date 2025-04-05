import { useState, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className = "" }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 bg-dark ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        style={{ transition: "opacity 500ms" }}
      />
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={`w-full h-auto ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "opacity 500ms" }}
      />
    </div>
  );
};

export default LazyImage;
