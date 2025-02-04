"use client";
import CardHead from "./cardHead";
import ic_bulding from "@/assets/icons/building.svg";
import ic_mortage from "@/assets/icons/mortage.svg";
import ic_personalize from "@/assets/icons/personalize.svg";
import { motion } from "framer-motion";
export function CardBanner() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='grid xl:grid-cols-3 gap-10 xl:gap-5 3xl:gap-12 bg-primary  rounded-xl p-14 3xl:mx-24 lg:mx-16 mx-10 -mt-[8vw] xl:-mt-[8%] max-xl:mb-9'>
        <CardHead
          iconC={ic_bulding}
          textC='
          From exclusive properties to tailored mortgage advice, we provide a full suite of services designed to make your investment journey seamless and successful.'
          headC='Comprehensive Investment Solutions'
        />
        <CardHead
          iconC={ic_mortage}
          textC='Unlock global mobility and enhance your lifestyle through our citizenship-by-investment programs, crafted to meet the needs of discerning investors.'
          headC='Global Citizenship Opportunities'
        />
        <CardHead
          iconC={ic_personalize}
          textC='Enjoy a stress-free experience with our dedicated concierge team, here to support you every step of the way—from property acquisition to settling into your new lifestyle.'
          headC='Personalized Concierge Service'
        />
      </motion.section>
    </>
  );
}
