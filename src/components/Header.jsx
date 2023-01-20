import React from "react";

// import Link
import { HashLink as Link } from "react-router-hash-link";

// import hero image
import HeroImg from "../assets/hero-2.webp";

// import CV
import CV from "../assets/Pavel_Belousov_CV_2.pdf";

// import typing animation
import { TypeAnimation } from "react-type-animation";

// i18next
import { useTranslation } from "react-i18next";

const Header = () => {
  // translation
  const {t} = useTranslation()

  return (
    <header className="bg-header bg-cover bg-dark/10 dark:bg-dark/90 bg-blend-multiply dark:bg-blend-color-burn h-fit xl:h-screen bg-move">
      <div className="wrapper flex flex-col lg:flex-row justify-between h-full">
        {/* image */}
        <div className="flex-1 lg:flex-[60%] xl:flex-[58%] pt-16 lg:pt-0 w-full h-full flex items-center justify-center border-b border-grey/30 dark:border-grey lg:border-none">
          <img
            src={HeroImg}
            alt="hero"
            className="object-cover md:h-[60vh] lg:h-auto xl:h-screen"
          />
        </div>

        {/* text */}
        <div className="flex-1 lg:flex-[40%] xl:flex-[42%] px-4 py-8 flex flex-col gap-y-6 justify-center items-center lg:items-start text-center lg:text-left">
          {/* title */}
          <h1 className="text-blue font-light text-3xl md:text-4xl lg:text-7xl xl:text-8xl">
            {/* Pavel Belousov */}
            {t('header__title')}
          </h1>

          {/* subtitle */}
          <div className="text-dark dark:text-light font-medium text-xl md:text-3xl lg:text-4xl">
            <TypeAnimation
              // sequence={["Web developer", 3000, "Content creator", 3000]}
              sequence={[
                `${t('header__subtitle_1')}`,
                3000,
                `${t('header__subtitle_2')}`,
                3000,
              ]}
              cursor={true}
              repeat={Infinity}
              speed={1}
            />
          </div>

          {/* description */}
          <div className="text-dark/90 dark:text-light/50 font-light text-base leading-6 lg:text-lg xl:text-xl">
            {t('header__description')}
          </div>

          {/* buttons */}
          <div className="flex flex-col gap-y-6 items-center justify-center md:flex-row md:gap-x-4 lg:flex-col lg:items-start xl:flex-row">
            <a href={CV} download className="btn btn-primary btnHover">
              {/* Download CV */}
              {t('header__btn_1')}
            </a>
            <Link to={"about"} className="btn btn-secondary btnHover">
              {/* Know Me */}
              {t('header__btn_2')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
