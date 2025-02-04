"use client"; 
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import React from "react";

const LanguageSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLocale = (locale: string) => {
    router.replace(pathname, { locale: locale });
  };

  return (
    <div className='text-white text-sm md:text-base 3xl:text-xl font-extrabold font-inter uppercase flex items-center h-full gap-2 3xl:gap-5'>
      <button
        onClick={() => switchLocale("en")}
        disabled={currentLocale === "en"}
        className={`${currentLocale === "en" ? "" : "active-lang"}`}>
        EN
      </button>
      <button
        onClick={() => switchLocale("ru")}
        disabled={currentLocale === "ru"}
        className={`${currentLocale === "ru" ? "" : "active-lang"}`}>
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
