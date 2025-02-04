"use client";
import { Link } from "@/i18n/routing";
import React from "react";

interface Ilinks {
  Linktext: string;
  LinkNav?: string;
  disable?: boolean;
}

const CustomLinks: React.FC<Ilinks> = ({
  Linktext = "",
  LinkNav = "",
  disable,
}) => {
  return (
    <>
      <Link
        href={LinkNav}
        // onClick={(e) => {
        //   if (disable) e.preventDefault();
        // }}
        className={`flex items-center justify-start   font-normal font-montserrat  w-full leading-8        
        4xl:h-10
        3xl:text-base
        text-xs
        md:h-7
        wrap
        ${disable ? "text-[#2A3F85A6]" : "text-[#04080f]"}
        `}
      >
        {Linktext}
      </Link>
    </>
  );
};
export default CustomLinks;
