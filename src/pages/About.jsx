import React from "react";

// import image
import AboutImg from "../assets/about-2.png";

const About = () => {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      {/* about top */}
      <div className="h-fit bg-header bg-cover bg-dark/10 dark:bg-dark/90 bg-blend-multiply dark:bg-blend-color-burn pt-32 overflow-hidden">
        <div className="wrapper w-full h-full flex flex-col gap-y-8 lg:flex-row lg:justify-center">
          {/* title */}
          <div className="flex-1 flex items-center justify-center lg:justify-start">
            <h1 className="text-blue font-light text-6xl lg:text-7xl xl:text-8xl capitalize">
              About me
            </h1>
          </div>

          {/* image */}
          <div className="flex-1 h-full w-full flex items-center justify-center lg:justify-end">
            <img
              src={AboutImg}
              alt="about hero"
              className="object-cover h-full md:h-[50vh] lg:h-[30vh] xl:h-[40vh] max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
