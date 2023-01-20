import React from "react";

// import Link
import { HashLink as Link } from "react-router-hash-link";

// import image
import AboutImg from "../assets/about-2.webp";

// i18next
import { Trans, useTranslation } from "react-i18next";

const About = () => {
  // translation
  const { t } = useTranslation();

  return (
    <div className="bg-light dark:bg-dark -mb-[1px]">
      {/* about top */}
      <div className="h-fit bg-header bg-cover bg-dark/10 dark:bg-dark/90 bg-blend-multiply dark:bg-blend-color-burn pt-32 overflow-hidden">
        <div className="wrapper w-full h-full flex flex-col gap-y-8 md:flex-row">
          {/* title */}
          <div className="flex-1 flex items-center">
            <h1 className="text-dark dark:text-light font-light text-3xl md:text-4xl lg:text-7xl xl:text-8xl capitalize">
              {t("about__title")}
            </h1>
          </div>

          {/* image */}
          <div className="flex-1 h-full w-full flex items-center justify-center md:justify-end">
            <img
              src={AboutImg}
              alt="about hero"
              className="object-cover h-full md:h-[30vh] xl:h-[40vh] max-w-full"
            />
          </div>
        </div>
      </div>

      {/*  about content */}
      <div className="wrapper pb-1">
        <div className="pt-14 xl:pt-24 pb-20 border-b border-grey/30 dark:border-grey flex flex-col gap-y-16 md:flex-row md:gap-x-10 xl:gap-x-16 text-dark dark:text-light">
          {/* text */}
          <div className="md:flex-[65%] flex flex-col gap-y-6 lg:gap-y-10 xl:gap-y-12">
            {/* title */}
            <h2 className="text-blue font-light text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {t("hey")}
            </h2>

            {/* quote */}
            <div className="bg-lightGrey dark:bg-grey/80 py-6 px-8 border-l-4 border-blue">
              <p className="font-crimson italic text-2xl lg:text-3xl xl:text-4xl">
                {t("quote")}
              </p>
              <span className="text-xs lg:text-sm font-extralight text-dark/60 dark:text-light/40">
                {t("quote__author")}
              </span>
            </div>

            {/* description */}
            <div className="flex flex-col gap-y-4 lg:gap-y-6 font-light text-base lg:text-lg xl:text-xl">
              <p>
                {t("about__text_1")}{" "}
                <Trans i18nKey="about__text_2">
                  During this time I have created more than{" "}
                  <Link
                    to={"/projects"}
                    className="font-medium hover:underline"
                  >
                    20 websites
                  </Link>{" "}
                  and developed my own unique style, which, I am sure, can be of
                  interest to many people.
                </Trans>
              </p>
              <p>
                <Trans i18nKey="about__text_3">
                  Besides the mentioned{" "}
                  <Link to={"/#skills"} className="font-medium hover:underline">
                    web technologies
                  </Link>
                  , I have development experience using technologies such as
                  Saas, Less and Bootstrap.
                </Trans>
                {t("about__text_4")}
              </p>
              <p>{t("about__text_5")}</p>
              <p>{t("about__text_6")}</p>
            </div>
          </div>

          {/* contacts */}
          <div className="md:flex-[35%] flex flex-col gap-y-4">
            <h3 className="text-xl lg:text-3xl xl:text-4xl">
              {t("let's__talk")}
            </h3>
            <p className="font-light text-sm lg:text-base">
              {t("about__socials")}
            </p>
            <ul className="flex gap-x-4 xl:gap-x-8 items-center">
              <li>
                <a
                  href="https://www.linkedin.com/in/pavel-belousov-784963248/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dark:fill-light hover:fill-blue dark:hover:fill-blue transition duration-300"
                  >
                    <rect x="0" fill="none" width="20" height="20" />
                    <title>Linkedin</title>
                    <g>
                      <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z" />
                    </g>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/+79969587558"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                    fill="#171717"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dark:fill-light hover:fill-blue dark:hover:fill-blue transition duration-300"
                  >
                    <title>Whatsapp</title>
                    <path
                      d="M2 22L3.41152 16.8691C2.54422 15.3639 2.08876 13.6568 2.09099 11.9196C2.08095 6.44549 6.52644 2 11.99 2C14.6417 2 17.1315 3.02806 19.0062 4.9034C19.9303 5.82266 20.6627 6.91616 21.1611 8.12054C21.6595 9.32492 21.9139 10.6162 21.9096 11.9196C21.9096 17.3832 17.4641 21.8287 12 21.8287C10.3368 21.8287 8.71374 21.4151 7.26204 20.6192L2 22ZM7.49424 18.8349L7.79675 19.0162C9.06649 19.7676 10.5146 20.1644 11.99 20.1654C16.5264 20.1654 20.2263 16.4662 20.2263 11.9291C20.2263 9.73176 19.3696 7.65554 17.8168 6.1034C17.0533 5.33553 16.1453 4.72636 15.1453 4.31101C14.1452 3.89565 13.0728 3.68232 11.99 3.68331C7.44343 3.6839 3.74476 7.38316 3.74476 11.9202C3.74476 13.4724 4.17843 14.995 5.00502 16.3055L5.19645 16.618L4.35982 19.662L7.49483 18.8354L7.49424 18.8349Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.52024 7.76662C9.33885 7.35303 9.13737 7.34298 8.96603 7.34298C8.81477 7.33294 8.65288 7.33294 8.48154 7.33294C8.32083 7.33294 8.04845 7.39321 7.81684 7.64549C7.58464 7.89719 6.95007 8.49217 6.95007 9.71167C6.95007 10.9318 7.83693 12.1111 7.95805 12.2724C8.07858 12.4337 9.67149 15.0139 12.192 16.0124C14.2883 16.839 14.712 16.6777 15.1657 16.6269C15.6189 16.5767 16.6275 16.0325 16.839 15.4476C17.0405 14.8733 17.0405 14.3693 16.9802 14.2682C16.9199 14.1678 16.748 14.1069 16.5064 13.9758C16.2541 13.8552 15.0446 13.2502 14.813 13.1693C14.5808 13.0889 14.4195 13.0487 14.2582 13.2904C14.0969 13.5427 13.623 14.0969 13.4724 14.2582C13.3306 14.4195 13.1799 14.4396 12.9377 14.3185C12.686 14.1979 11.8895 13.9356 10.9418 13.0889C10.2056 12.4331 9.71167 11.6171 9.56041 11.3755C9.41979 11.1232 9.54032 10.992 9.67149 10.8709C9.78257 10.7604 9.92378 10.579 10.0449 10.4378C10.1654 10.296 10.2056 10.1855 10.2966 10.0242C10.377 9.86292 10.3368 9.71167 10.2765 9.59114C10.2157 9.48006 9.74239 8.25997 9.52024 7.76603V7.76662Z"
                      fill=""
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://telegram.me/signor_Pao"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="30px"
                    height="30px"
                    viewBox="0 0 48 48"
                    fill="#171717"
                    xmlns="http://www.w3.org/2000/svg"
                    className="dark:fill-light hover:fill-blue dark:hover:fill-blue transition duration-300"
                  >
                    <title>Telegram</title>
                    <path
                      d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"
                      fill=""
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
