"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState, useRef, useEffect } from "react";
import ic_drager from "@/assets/icons/be4After.svg";

interface BeforeAfterSliderProps {
  beforeImage: string | StaticImageData;
  afterImage: string | StaticImageData;
  beforeAlt?: string;
  afterAlt?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (isResizing && sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = (x / rect.width) * 100;
      const bounded = Math.max(0, Math.min(100, percent));
      setPosition(bounded);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  const stopResizing = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    // if (window) {
      if (isResizing) {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", stopResizing);
        window.addEventListener("touchmove", handleTouchMove, {
          passive: false,
        });
        window.addEventListener("touchend", stopResizing);
      }

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", stopResizing);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", stopResizing);
      };
    // }
  }, [isResizing, handleMouseMove, handleTouchMove]);

  return (
    <div className="w-full max-w-4xl mx-auto before-after-slider">
      <div
        ref={sliderRef}
        className="relative h-96 overflow-hidden rounded-lg cursor-col-resize touch-none"
        onMouseDown={(e) => {
          e.preventDefault();
          setIsResizing(true);
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          setIsResizing(true);
        }}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <Image
            src={beforeImage}
            alt={beforeAlt}
            fill
            className="object-fit"
            draggable="false"
            priority
          />
        </div>

        {/* after Image */}
        <div
          className="absolute inset-0 overflow-hidden select-none"
          style={{ width: `${position}%` }}
        >
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            className="object-fit"
            draggable="false"
            priority
          />
        </div>

        {/* slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-24 bg-transparent rounded-full shadow-lg flex items-center justify-center">
            <Image src={ic_drager} alt="drag" priority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
