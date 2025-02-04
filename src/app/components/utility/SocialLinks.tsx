"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";

interface Isocial {
  link: string;
  icon: string;
}
const SocialLinks: React.FC<Isocial> = ({ link = "", icon = "" }) => {
  return (
    <Link
      className=' 2xl:w-12 2xl:h-12  w-9 h-9  mx-1 rounded-full border border-promary flex justify-center items-center hover:shadow-md hover:shadow-primary duration-150'
      href={link}
      target='_blank'>
      <Image
        src={icon}
        alt='ViceKeeper Social media'
        className='2xl:w-7 2xl:h-7 w-5 h-5 '
      />
    </Link>
  );
};
export default SocialLinks;
