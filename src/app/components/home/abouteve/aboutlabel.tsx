import Image from "next/image";
 
interface IaboutProps{
    icon:string;
    number:string;
    text:string;
}
export default function Aboutlabel({icon,text,number}:IaboutProps){
    return (
      <>
        <div className='w-56 3xl:w-72 h-24 3xl:h-32 flex gap-4 items-center bg-[#293f84] rounded-2xl py-6 ps-6 pe-2 mb-12 3xl:mb-20'>
          <div>
            <Image src={icon} alt="about eve" />
          </div>
          <div>
            <p className='text-white text-xl 3xl:text-2xl font-bold font-montserrat leading-8'>
              {number}
            </p>
            <p
              className="text-white text-xs 3xl:text-base font-normal font-montserrat leading-5 3xl:leading-7">
              {text}
            </p>
          </div>
        </div>
      </>
    );
}