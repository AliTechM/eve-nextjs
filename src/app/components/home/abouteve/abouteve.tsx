// "use client";
// import ic_review from "@/assets/icons/review.svg";
// import ic_passport from "@/assets/icons/passport-icon.svg";
// import ic_global from "@/assets/icons/global-economy.svg";
// import img_about from "@/assets/images/abouteve.png";
// import Image from "next/image";
// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useRef } from "react";
// import { useInView } from "framer-motion";
// import Aboutlabel from "./aboutlabel";

// export default function AboutEve() {
//   const ref = useRef(null);

//   const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

//   const controls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       controls.start("visible");
//     }
//   }, [isInView, controls]);

//   const containerVariants = {
//     hidden: {
//       opacity: 0,
//     },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const childVariants = {
//     hidden: {
//       opacity: 0,
//       y: 20,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <>
    
//       <section className='grid xl:grid-cols-2 bg-[#131f33] general-padding gap-20 2xl:gap-48 pt-44 pb-80 '>
//         <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true, amount: 0.3 }}
//          className='flex flex-col justify-center max-xl:order-2'>
//           <h2 className='inner-head mb-11'>About eve</h2>
//           <p className='text-white text-xs md:text-sm 3xl:text-lg font-normal font-montserrat text-left !leading-7 !3xl:leading-9 mb-11'>
//             EVE is a forward-thinking investment company focused on real estate,
//             dedicated to helping clients maximize their returns through tailored
//             property solutions. Our expertise spans profitable property
//             acquisitions, strategic flips to enhance value, and comprehensive
//             mortgage management.
//             <br></br>
//             At EVE, we also empower clients seeking citizenship through
//             investment, offering pathways that combine financial growth with
//             residency benefits. With our deep knowledge of property markets, we
//             guide clients to achieve steady income and capital growth,
//             transforming real estate investment into a smooth, profitable
//             journey.
//           </p>

//           <button className='w-56 h-16 3xl:w-64 3xl:h-20 bg-black/10 rounded-2xl border-2 border-white text-white text-base 3xl:text-lg font-medium font-inter'>
//             Contact us
//           </button>
//        </motion.div>
//         <div className='max-xl:order-1'>
//           <div className='relative md:w-4/5 xl:w-full flex justify-center md:justify-end'>
//             <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true, amount: 0.3 }}
//         >

//             <Image src={img_about} alt='about eve'  />
//         </motion.div>

//             <motion.div
//               ref={ref}
//               className='absolute top-24 3xl:top-10 left-1/4 xl:left-0'
//               variants={containerVariants}
//               initial='hidden'
//               animate={controls}>
//               <motion.div variants={childVariants}>
//                 <Aboutlabel
//                   text='Satisfied clients'
//                   icon={ic_review}
//                   number='+100'
//                 />
//               </motion.div>

//               <motion.div variants={childVariants} className='-ms-12'>
//                 <Aboutlabel
//                   text='Successful Citizenship Approvals'
//                   icon={ic_passport}
//                   number='+50'
//                 />
//               </motion.div>

//               <motion.div variants={childVariants}>
//                 <Aboutlabel
//                   text='Investments in 4+ Global Markets'
//                   icon={ic_global}
//                   number='+4'
//                 />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
"use client";
import ic_review from "@/assets/icons/review.svg";
import ic_passport from "@/assets/icons/passport-icon.svg";
import ic_global from "@/assets/icons/global-economy.svg";
import img_about from "@/assets/images/abouteve.png";
import Image from "next/image";
import { useRef } from "react";
import Aboutlabel from "./aboutlabel";

export default function AboutEve() {
  const ref = useRef(null);

  return (
    <>
      <section className='grid xl:grid-cols-2 bg-[#131f33] general-padding gap-20 2xl:gap-48 pt-32 pb-64 '>
        <div className='flex flex-col justify-center max-xl:order-2'>
          <h2 className='inner-head mb-11'>About eve</h2>
          <p className='text-white text-xs md:text-sm 3xl:text-lg font-normal font-montserrat text-left !leading-7 !3xl:leading-9 mb-11'>
            EVE is a forward-thinking investment company focused on real estate,
            dedicated to helping clients maximize their returns through tailored
            property solutions. Our expertise spans profitable property
            acquisitions, strategic flips to enhance value, and comprehensive
            mortgage management.
            <br />
            At EVE, we also empower clients seeking citizenship through
            investment, offering pathways that combine financial growth with
            residency benefits. With our deep knowledge of property markets, we
            guide clients to achieve steady income and capital growth,
            transforming real estate investment into a smooth, profitable
            journey.
          </p>

          <button className='w-56 h-16 3xl:w-64 3xl:h-20 bg-black/10 rounded-2xl border-2 border-white text-white text-base 3xl:text-lg font-medium font-inter'>
            Contact us
          </button>
        </div>
        <div className='max-xl:order-1'>
          <div className='relative md:w-4/5 xl:w-full flex justify-center md:justify-end'>
            <div>
              <Image src={img_about} alt='about eve' />
            </div>

            <div
              ref={ref}
              className='absolute top-24 3xl:top-10 left-1/4 xl:left-0'>
              <div>
                <Aboutlabel
                  text='Satisfied clients'
                  icon={ic_review}
                  number='+100'
                />
              </div>

              <div className='-ms-12'>
                <Aboutlabel
                  text='Successful Citizenship Approvals'
                  icon={ic_passport}
                  number='+50'
                />
              </div>

              <div>
                <Aboutlabel
                  text='Investments in 4+ Global Markets'
                  icon={ic_global}
                  number='+4'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
