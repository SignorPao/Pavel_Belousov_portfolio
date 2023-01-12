import React from "react";

// import components
import WorksCarousel from "./WorksCarousel";
import WorksMobileCarousel from "./WorksMobileCarousel";

// import data
import { worksCaouselData } from "../data";

const Works = () => {
  return (
    <section id="works" className="bg-blue section">
      {/* title */}
      <div className="wrapper">
        <h2 className="uppercase text-dark font-medium tracking-wide mb-10 text-center lg:text-left lg:text-xl">
          My Recent Works
        </h2>
      </div>

      {/* mobile carousel */}
      <div className="md:hidden bg-green-300 h-[400px] w-full">
        <WorksMobileCarousel worksCaouselData={worksCaouselData} />
      </div>

      {/* pc caousel */}
      <div className="hidden md:flex bg-pink-300 h-[400px] w-full">
        <WorksCarousel worksCaouselData={worksCaouselData} />
      </div>
    </section>
  );
};

export default Works;
