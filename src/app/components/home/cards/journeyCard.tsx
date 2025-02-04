"use client";
import Communicate from "../../utility/communication";
import ic_whatsapp from "@/assets/icons/whatsapp.svg";
import ic_telegram from "@/assets/icons/telegram.svg";
import ic_mail from "@/assets/icons/mail.svg";
import { motion } from "framer-motion";
import Link from "next/link";

export default function JourneyCard() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.3 }}
        className="general-padding -mt-36 lg:-mt-28"
      >
        <div
          className=" w-full lg:h-48 3xl:h-60  bg-[#293f84] rounded-2xl flex max-lg:flex-col max-lg:gap-7 justify-between items-center max-lg:py-10 px-5 lg:px-20 
           journey_back"
        >
          <h3 className="text-white text-lg xl:text-3xl 3xl:text-4xl font-bold font-montserrat leading-10 max-w-96">
            Start your <br className="max-lg:hidden"></br>investment journey
          </h3>
          <div className="flex max-lg:flex-col gap-7 3xl:gap-20">
            <Link href="mailto:info@eve-solution.com">
              <Communicate icon={ic_mail} label="info@eve-solution.com" />
            </Link>
            <Link href="https://wa.me/+971555604152" target="_blank">
              <Communicate
                icon={ic_whatsapp}
                label="+971 55 560 4152
"
              />
            </Link>
            <Link href={"https://t.me/+971555604152"} target="_blank">
              <Communicate
                icon={ic_telegram}
                label="+971 55 560 4152
"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
