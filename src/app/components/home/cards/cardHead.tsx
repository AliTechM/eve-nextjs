import Image from "next/image";
interface IcardHead {
  iconC: string;
  textC: string;
  headC: string;
}
export default function CardHead({ iconC, textC, headC }: IcardHead) {
  return (
    <>
      <div className='flex max-lg:flex-col  max-lg:text-center items-center lg:items-start gap-2 3xl:gap-5'>
        <Image src={iconC} alt="Eve" />
        <div className='text-white font-montserrat '>
          <h2 className='text-sm 3xl:text-lg font-bold leading-8'>{headC}</h2>
          <p className='text-white text-xs 3xl:text-base font-normal leading-8'>{textC}</p>
        </div>
      </div>
    </>
  );
}
