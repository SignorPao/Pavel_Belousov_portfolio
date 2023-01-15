import React from "react";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCube } from "swiper";
import "swiper/css/effect-cube";

// import data
import { worksMobileCarouselData } from "../data";

const WorksMobileCarousel = () => {
  return (
    <Swiper
      modules={[EffectCube]}
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
      className="w-full h-full"
    >
      {worksMobileCarouselData.map((item, index) => {
        // destructure item
        const { image, code, demo } = item;

        return (
          <SwiperSlide
            key={index}
            className="bg-grey h-full w-full select-none flex flex-col gap-y-4 p-8"
          >
            {/* image */}
            <div className="w-full overflow-hidden flex items-center justify-center">
              <img
                src={image}
                alt="works"
                className="object-cover h-full max-w-full"
              />
            </div>

            {/* buttons */}
            <div className="w-full flex flex-col items-center justify-center gap-y-6">
              <a
                href={code}
                className="btn text-light btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo
              </a>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorksMobileCarousel;
