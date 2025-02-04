"use client";
import React, { useState, useRef, useEffect } from "react";
import ic_arrow from "@/assets/icons/selectArrow.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionImage = motion.create(Image);

interface Option {
  value: string;
  label: string;
  img?: string;
  link?: string;
  disabled?: boolean;
}

interface CustomDropdownProps {
  options: Option[];
  value?: string;
  color?: string;
  icon?: string;
  showIcon?: boolean;
  placeholder?: string;
  styleSelect?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  color,
  showIcon,
  icon,
  styleSelect,
  placeholder = "Select an option", // Default placeholder
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption] = useState<Option | null>(
    options.find((option) => option.value === value) || null
  );
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // const handleOptionClick = (option: Option) => {
  //   setSelectedOption(option);
  //   setIsOpen(false);
  // };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={`text-${color}  w-full 
        2xl:py-2 flex items-center          
        md:h-11
        md:py-0
        rounded-lg px-3
        3xl:text-sm
        text-xs
        transition-colors duration-200 ${styleSelect}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption &&
          selectedOption.img &&
          (showIcon ? (
            <Image
              src={selectedOption.img}
              alt={selectedOption.label}
              className="w-5 h-5 me-1"
            />
          ) : (
            ""
          ))}
        {selectedOption ? selectedOption.label : placeholder}{" "}
        {/* Display placeholder when no option is selected */}
        <MotionImage
          animate={{ rotate: isOpen ? 180 : 0 }}
          src={icon ? icon : ic_arrow}
          alt="select"
          className="ms-3"
        />
      </motion.button>

      {isOpen && (
        <motion.div
          className="absolute left-0 w-full bg-primary rounded shadow-md overflow-hidden text-sm 4xl:text-base text-primary menucontainer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {options.map((option) => (
            <Link
              onClick={(e) => {
                if (option?.disabled) e.preventDefault();
                else setIsOpen(false)
              }}
              key={option.value}
              href={"/en" + option.link || ""}
            >
              <motion.div
                key={option.value}
                className={`px-4 py-2 w-auto cursor-pointer flex items-center 
                ${
                  hoveredItem === option.value && option?.disabled
                    ? "bg-gray-50"
                    : "bg-white"
                } ${option?.disabled ? "text-gray-400" : ""}
                transition-colors duration-200`}
                onHoverStart={() => setHoveredItem(option.value)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: !option?.disabled ? 0.98 : 1 }}
                // onClick={() => handleOptionClick(option)}
              >
                {option.img &&
                  (showIcon ? (
                    <Image
                      src={option.img}
                      alt={option.label}
                      className="w-4 h-4 mr-2"
                    />
                  ) : (
                    ""
                  ))}
                {option.label}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default CustomDropdown;
