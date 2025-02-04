import Image from "next/image";
 
interface IcommunicateProps{
    icon:string;
    label:string;
    action?:()=>void;
}
const Communicate=({icon ,label }:IcommunicateProps)=>{
    return (
      <>
        <div className="flex gap-2 cursor-pointer">
          <Image src={icon} alt="contact eve" className="max-3xl:w-5" />
          <span
            className="text-white text-base 3xl:text-xl font-medium font-montserrat leading-10">
            {label}
          </span>
        </div>
      </>
    );
}
export default Communicate;