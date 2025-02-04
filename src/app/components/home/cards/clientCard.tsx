import Image from "next/image";

interface Icard {
  isDark?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any;
  name: string;
  desc: string;
}
export default function ClientCard({ img, name, desc }: Icard) {
  return (
      <div
        className={
          "relative  p-4 rounded-xl text-[#141F34] bg-white h-[440px] mt-6 "
        }
      >
        <div
          className={
            "absolute -top-20 md:left-[32%] sm:left-[36%] clientCard rounded-full bg-[#364780] border-8 border-[#141F34]"
          }
        >
          <Image src={img} alt="image" width={130} height={130} />
        </div>

        <p className="text-base pt-20">{desc}</p>
        <h6 className="bottom-8 absolute m-auto w-full left-0 font-bold text-lg text-[#3D55A3] " >
          {name}
        </h6>
      </div>
  );
}
