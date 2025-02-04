import Image, { StaticImageData } from "next/image";
 
interface Iparent {
  icon?: string | StaticImageData;
  title?: string;

  onClick?: () => void;
  isStartActive?:boolean;
}
export default function CircleButton({ icon, title ,onClick , isStartActive=false}: Iparent) {
  return (
    <>
      <div
        onClick={onClick}
        className={`w-28 h-28 3xl:w-32 3xl:h-32 max-3xl:p-2 bg-gradient-to-b from-[#0c173e] to-[#233577] rounded-full border-4 cursor-pointer ${
          isStartActive ? "border-[#2384c5]" : "border-[#0c1637]"
        } 
        flex justify-center items-center z-20 duration-1000 ease-in-out`}>
        {title && (
          <p className='text-white/70 text-lg font-bold font-montserrat leading-8'>
            {title}
          </p>
        )}
        {icon && <Image src={icon} alt="eve options" />}
      </div>
    </>
  );
}
