import React, { useEffect, useState } from "react";

const ScrollUp = () => {
  const [isScroll, isScrollState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 450 ? isScrollState(true) : isScrollState(false);
    });
  });

  return (
    <a
      href="#"
      className={`${
        isScroll ? "bottom-24 xl:bottom-16" : "-bottom-1/2"
      } w-10 h-10 bg-light dark:bg-[#272727] shadow-md flex justify-center items-center rounded z-10 fixed right-4 xl:right-8 hover:-translate-y-2 duration-300 btnHover overflow-hidden`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 33 56"
        fill=""
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:scale-125 fill-blue group-hover:fill-light transition duration-300 rotate-90"
      >
        <path
          d="M31.1458 1.45835C31.8749 2.18751 32.2395 3.05085 32.2395 4.04835C32.2395 5.0439 31.8749 5.90626 31.1458 6.63543L9.78117 28L31.2187 49.4375C31.8992 50.1181 32.2395 50.9688 32.2395 51.9896C32.2395 53.0104 31.8749 53.8854 31.1458 54.6146C30.4166 55.3438 29.5533 55.7083 28.5558 55.7083C27.5602 55.7083 26.6978 55.3438 25.9687 54.6146L1.46866 30.0417C1.177 29.75 0.969916 29.434 0.847416 29.0938C0.726861 28.7535 0.666582 28.3889 0.666582 28C0.666582 27.6111 0.726861 27.2465 0.847416 26.9063C0.969916 26.566 1.177 26.25 1.46866 25.9583L26.0416 1.38543C26.7221 0.704874 27.5602 0.364595 28.5558 0.364595C29.5533 0.364595 30.4166 0.729179 31.1458 1.45835Z"
          fill=""
        />
      </svg>
    </a>
  );
};

export default ScrollUp;
