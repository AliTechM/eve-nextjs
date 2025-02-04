/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export interface ModalPosition {
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  center?: boolean;
}

export interface ModalProps {
  children: React.ReactNode;
  title?: string;
  position?: ModalPosition;
  width?: string;
  height?: string;
  className?: string;
  isOpen:boolean;
  closeModal:any; 
}

const ConciergeGeneralModal = ({
  children,
  title,
  closeModal,
  isOpen,
  position = { center: true },
  width = "max-w-[705px]",
  height = "max-h-[772px]",

  className = "",
}: ModalProps) => {
  //   const { isOpen, closeModal } = useModal();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeModal]);

  const getPositionClasses = () => {
    if (position.center)
      return "inset-0 flex items-center justify-center max-xl:w-11/12";
    const classes = ["fixed"];
    if (position.bottom) classes.push("bottom-4");
    if (position.top) classes.push("top-4");
    if (position.left) classes.push("left-4");
    if (position.right) classes.push("right-4");
    if (position.bottom && !position.left && !position.right) {
      classes.push("left-1/2 -translate-x-1/2");
    }
    return classes.join(" ");
  };

  const getAnimationVariants = () => {
    if (position.bottom) {
      return { hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } };
    }
    if (position.top) {
      return { hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } };
    }
    if (position.left) {
      return { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } };
    }
    if (position.right) {
      return { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } };
    }
    return {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    };
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            onClick={closeModal}
            className="fixed  inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* centered modal container */}
          <div
            className={`3xl:right-60 lg:right-28 lg:left-28 right-6 3xl:left-60 left-6 fixed inset-0 flex items-center justify-center z-50 `}
            onClick={closeModal}
          >
            {/* click propagation prevention */}

            <motion.div
              variants={getAnimationVariants()}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`${getPositionClasses()} z-50  `}
              onClick={(e) => e.stopPropagation()} //  modal clicks from closing it
            >
              <div className={`relative  ${width} ${height} ${className} `}>
                {title && (
                  <div className="p-4 border-b">
                    <h2 className="text-xl font-semibold">{title}</h2>
                  </div>
                )}
                <button
                  className="absolute rounded-full p-3 bg-[#1C2D67] text-white top-8 right-8 "
                  style={{ zIndex: "99" }}
                  onClick={closeModal}
                >
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.998 1.57861L1.17896 11.3978"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M1.17896 1.57886L10.9981 11.3979"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <div className="relative "> {children}</div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ConciergeGeneralModal;
