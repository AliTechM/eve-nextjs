"use client";
import Image from "next/image";

import ic_whatsapp from "@/assets/icons/whatsappDark.svg";
import { motion } from "framer-motion";
import Link from "next/link";

const WhatsAppButton = () => {
  return (
    <>
      <div className="fixed bottom-6  right-5 z-50 flex flex-col items-end">
        {/* WhatsApp Icon */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 500 }}
          className="w-[80px]  h-[80px] bg-white rounded-full flex justify-center cursor-pointer"
        >
          <Link className="pt-5" href={"https://wa.me/+971555604152"} target="_blank">
            <Image
              src={ic_whatsapp}
              alt="WhatsApp"
              className="w-[36px]"
            />
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default WhatsAppButton;
