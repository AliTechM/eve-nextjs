interface Icard {
  isDark?: boolean;
  num: string;
  title: string;
  desc: string;
}
export default function BenfitCard({ num, title, desc }: Icard) {
  return (
    <div
      className={
        "relative  p-4 rounded-xl hover:text-white hover:bg-[#2A3F85] text-[#141F34] bg-white h-[240px] mt-6 text-left benefitCard"
      }
    >
      <div
        className={
          "absolute -top-8 left-6 p-4 rounded-full text-white bg-[#2A3F85] font-semibold"
        }
      >
        {num}
      </div>
      <h6 className="mb-2 text-[22px] font-semibold mt-6">{title}</h6>
      <p className="text-sm md:text-lg">{desc}</p>
    </div>
  );
}
