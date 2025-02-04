/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import img_home from "@/assets/images/home.png";
import img_home_gold from "@/assets/images/home-gold.png";
import img_passport from "@/assets/images/passport.png";
import img_key from "@/assets/images/key.png";
import { SubCircle } from "./subCircle";
import ic_uae from "@/assets/icons/uae.svg";
import ic_portugal from "@/assets/icons/portugal.svg";
import ic_usa from "@/assets/icons/usa.svg";
import ic_spain from "@/assets/icons/spain.svg";
import ic_bali from "@/assets/icons/bali.svg";
import CircleButton from "./circle";
import GeneralAnimatedModal from "../../utility/ConciergeGneneralModal";
import ConciergeModal from "../modal/ConciergeModal";

export default function Operations({ exploreRef }: any) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCircle, setActiveCircle] = useState<string | null>(null);
  // const { openConciergeModal } = useConciergeModal();
  const [openConciergeModal, setOpenConciergeModal] = useState(false);

  const handleStartClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCircleClick = (circleName: string) => {
    setActiveCircle(activeCircle === circleName ? null : circleName);
  };

  return (
    <>
      <section
        className="start_back bg-cover bg-center pb-44  h-[75svh] xl:h-[100svh] w-full 
      flex justify-center items-center general-padding overflow-hidden 
    bg-[#131f33]"
        id="start"
        ref={exploreRef}
      >
        <div className="flex justify-between w-11/12 relative">
          {/* Crossed Line (initially visible, disappears after start is clicked) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: isExpanded ? 1.5 : 0 }}
            className="absolute w-full border-t-2 border-[#3980af] top-[50%] z-10"
          />

          {/* Circle Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative z-20"
          >
            <span className="icons-label absolute -top-10 3xl:-top-16 -left-3/4 3xl:-left-1/2 w-72">
              Investment Properties
            </span>
            <CircleButton
              icon={img_home}
              onClick={() => handleCircleClick("investment")}
            />
            <AnimatePresence>
              {activeCircle === "investment" && (
                <motion.div
                  initial={{ opacity: 0, y: -70 }}
                  // whileInView={{ transform: "translateY(-50px)", y: 0 }}

                  // initial={{ opacity: 0, y: -10, x: 500 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: -70 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-72 xl:w-96 -left-2/3 xl:-left-full mt-3"
                >
                  <div className="flex justify-center flex-wrap gap-4 w-full">
                    <SubCircle text="UAE" link="/investment" icon={ic_uae} />
                    <SubCircle text="USA" link="/investment" icon={ic_usa} />
                    <SubCircle
                      text={`Bali\n(soon)`}
                      link="/investment"
                      icon={ic_bali}
                    />
                    <SubCircle
                      text={`Spain\n(soon)`}
                      link="/investment"
                      icon={ic_spain}
                    />
                    <SubCircle
                      text={`Portugal\n(soon)`}
                      link="/investment"
                      icon={ic_portugal}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative z-20"
          >
            <span className="icons-label absolute -top-10 3xl:-top-16 -left-3/4 3xl:-left-1/2 w-72">
              Mortgage Solutions
            </span>
            <CircleButton
              icon={img_home_gold}
              onClick={() => handleCircleClick("mortgage")}
            />
            <AnimatePresence>
              {activeCircle === "mortgage" && (
                <motion.div
                  initial={{ opacity: 0, y: -70 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: -70 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-80 -left-3/4 mt-3"
                >
                  <div className="flex justify-center flex-wrap gap-4 w-full">
                    <SubCircle text="UAE" link="/mortgage" icon={ic_uae} />
                    <SubCircle
                      text="USA"
                      link="/mortgage?currency=usa"
                      icon={ic_usa}
                    />
                    <SubCircle
                      text={`Spain\n(soon)`}
                      link="/mortgage?currency=spain"
                      icon={ic_spain}
                    />
                    <SubCircle
                      text={`Portugal\n(soon)`}
                      link="/mortgage?currency=potugal"
                      icon={ic_portugal}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ***************           start       **************  */}
          <motion.div
            initial={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            className="relative z-20"
          >
            <CircleButton
              title="start"
              onClick={handleStartClick}
              isStartActive={isExpanded}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative z-20"
          >
            <span className="icons-label absolute -top-14 3xl:-top-20 -left-3/4 3xl:-left-1/2 w-72">
              Citizenship Through<br></br>Investment
            </span>
            <CircleButton
              icon={img_passport}
              onClick={() => handleCircleClick("citizenship")}
            />
            <AnimatePresence>
              {activeCircle === "citizenship" && (
                <motion.div
                  initial={{ opacity: 0, y: -70 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: -70 }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-80 -left-3/4 mt-3"
                >
                  <div className="flex justify-center flex-wrap gap-4 w-full">
                    <SubCircle
                      text={`Bali\n(soon)`}
                      link="/citizenship"
                      icon={ic_bali}
                    />
                    <SubCircle
                      text={`Spain\n(soon)`}
                      link="/citizenship"
                      icon={ic_spain}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="relative z-20"
            onClick={() => {
              setOpenConciergeModal((prevValue) => !prevValue);
            }}
          >
            <span className="icons-label absolute -top-10 3xl:-top-16 -left-3/4 3xl:-left-1/2 w-72">
              Concierge Services
            </span>
            <CircleButton icon={img_key} />
          </motion.div>
        </div>
      </section>
      <GeneralAnimatedModal
        width="w-auto"
        height="h-auto"
        position={{ bottom: true, center: true }}
        className="bg-white max-xl:w-10/12 w-11/12 rounded-2xl shadow-lg"
        isOpen={openConciergeModal}
        closeModal={() => setOpenConciergeModal(false)}
      >
        <ConciergeModal />
      </GeneralAnimatedModal>
    </>
  );
}
