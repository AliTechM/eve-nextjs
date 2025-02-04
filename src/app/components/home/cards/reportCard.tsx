"use client";
import ic_arrow from "@/assets/icons/diagonal-arrow.svg";
import ic_line from "@/assets/icons/underline.svg";
import Image from "next/image";
import GeneralAnimatedModal from "../../utility/GeneralModal";
import { useModal } from "@/app/context/modalContext";
import ModalReport from "../modal/modalReport";
import { motion } from "framer-motion";

export default function ReportCard() {
  const {  openModal  } = useModal();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className='general-padding bg-[#131f33]'
        onClick={openModal}>
        <div className="report_back  bg-no-repeat w-full h-56 3xl:h-72 flex justify-center md:justify-end items-center
         md:pe-32 bg-[#2e448a] rounded-2xl">
          <div className='flex flex-col items-center'>
            <h4 className='text-white text-base sm:text-xl md:text-2xl 3xl:text-4xl font-bold font-montserrat capitalize leading-10 roi-heading'>
              Get your tailored ROI report
            </h4>
            <Image src={ic_line} alt='report' className='me-10' />
          </div>
          <button className='bg-white rounded-full w-20 3xl:w-24 h-20 3xl:h-24 flex justify-center items-center ms-12'>
            <Image src={ic_arrow} alt='eve report' />
          </button>
        </div>
      </motion.div>
      <GeneralAnimatedModal
        width='w-auto'
        height='h-auto'
        position={{ bottom: true, center: true }}
        className='bg-white max-xl:w-10/12 w-11/12 rounded-2xl shadow-lg'>
        <ModalReport />
      </GeneralAnimatedModal>
      ;
    </>
  );
}
