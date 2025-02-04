import Image from "next/image";
import ic_phone from "@/assets/icons/phone.svg";

export default function Phone() {
  return (
    <a
      href='tel:+97145497350'
      className='text-white text-base xl:text-lg 3xl:text-xl font-medium font-montserrat leading-9 flex gap-3 absolute top-24 right-16 3xl:right-24'>
      <Image src={ic_phone} alt='Phone number' className='max-3xl:w-5' /> +971
      45 497 350
    </a>
  );
}
