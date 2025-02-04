import Image from "next/image";
import { Link } from "@/i18n/routing";

interface IsubCircle {
  icon: string;
  text: string;
  link: string;
}
export function SubCircle({ icon, text, link }: IsubCircle) {
  return (
    <div className='flex flex-col'>
      {/* icon + circle  */}
      <div
        className='w-[100px] h-[100px] bg-gradient-to-b from-[#3b56b2] to-[#3a52a4] rounded-full shadow 
      border border-[#3b56b0] flex justify-center items-center'>
        <Link href={link}>
          <Image src={icon} alt={text} />
        </Link>
      </div>
      <p className='text-center text-white text-base xl:text-xl font-bold font-montserratleading-tight'>
        {text.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
