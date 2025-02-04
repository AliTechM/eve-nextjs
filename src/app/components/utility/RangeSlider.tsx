/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useCallback } from "react";

const RangeSlider = ({ setStartRange, setEndRange }: any) => {
  const [values, setValues] = useState([80000, 600000]); // Default values
  const [isDragging, setIsDragging] = useState<null | "min" | "max">(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const MAX_VALUE = 1000000; // Set max value to 1,000,000

  const getPercentage = useCallback((value: number) => {
    // Change max to 1,000,000
    return (value / MAX_VALUE) * 100;
  }, []);

  const handleMouseDown = (event: React.MouseEvent, type: "min" | "max") => {
    event.preventDefault();
    setIsDragging(type);
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isDragging || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      let percentage = ((event.clientX - rect.left) / rect.width) * 100;

      // Constrain the percentage between 0 and 100
      percentage = Math.min(Math.max(percentage, 0), 100);

      let newValue = Math.round((percentage / 100) * MAX_VALUE); // Update max value to 1,000,000

      // Round to nearest 1000
      newValue = Math.round(newValue / 1000) * 1000;

      setValues((prev) => {
        const newValues = [...prev];
        if (isDragging === "min") {
          // Ensure the min thumb doesn't exceed max value minus 1000
          newValues[0] = Math.min(newValue, prev[1] - 1000);
        } else {
          // Ensure the max thumb doesn't go below min value plus 1000
          newValues[1] = Math.max(newValue, prev[0] + 1000);
        }
        return newValues;
      });
    },
    [isDragging]
  );

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      setStartRange(values[0]);
      setEndRange(values[1]);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove]);

  return (
    <div className="w-[95%] mb-12">
      <div
        ref={sliderRef}
        className="relative h-[2px] bg-gray-200 rounded-full cursor-pointer"
      >
        {/* Track fill */}
        <div
          className="absolute w-[95%] h-full bg-primary rounded-full"
          style={{
            left: `${getPercentage(values[0])}%`,
            width: `${getPercentage(values[1] - values[0])}%`,
          }}
        />

        {/* Minimum thumb */}
        <div
          className="absolute -mt-[6px] cursor-grab active:cursor-grabbing"
          style={{ left: `${getPercentage(values[0])}%` }}
          onMouseDown={(e) => handleMouseDown(e, "min")}
          role="slider"
          aria-valuenow={values[0]}
        >
          {/* Solid thumb */}
          <div
            className={`absolute bg-primary w-3 h-3 rounded-full transform -translate-x-1/2 transition-shadow duration-200
            ${isDragging === "min" ? "border border-white" : ""}`}
          />
          {/* Value box */}
          <div className="absolute w-40 h-14 bg-[url('../../assets/icons/thumb.svg')] bg-contain bg-no-repeat -top-8 -left-[4.6rem] transform -translate-y-1/2 transition-opacity duration-200">
            <div className="flex justify-center items-center pt-3">
              <span className="text-white text-base 2xl:text-lg font-semibold font-inter leading-tight">
                {values[0]}
              </span>
              <span className="text-white/60 text-sm font-normal font-inter leading-tight">
                (AED)
              </span>
            </div>
          </div>
        </div>

        {/* Maximum thumb */}
        <div
          className="absolute -mt-[6px] cursor-grab active:cursor-grabbing"
          style={{ left: `${getPercentage(values[1])}%` }}
          onMouseDown={(e) => handleMouseDown(e, "max")}
          role="slider"
          aria-valuenow={values[1]}
        >
          {/* Solid thumb */}
          <div
            className={`absolute w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 transition-shadow duration-200
            ${isDragging === "max" ? "border border-white" : ""}`}
          />
          {/* Value box */}
          <div className="absolute w-40 h-14 bg-[url('../../assets/icons/thumb.svg')] bg-contain bg-no-repeat -top-8 -left-[4.6rem] transform -translate-y-1/2 transition-opacity duration-200">
            <div className="flex justify-center items-center pt-3">
              <span className="text-white text-base 2xl:text-lg font-semibold font-inter leading-tight">
                {values[1]}
              </span>
              <span className="text-white/60 text-sm font-normal font-inter leading-tight">
                (AED)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
