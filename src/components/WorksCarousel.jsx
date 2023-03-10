import React from "react";

// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import data
import { worksCaouselData } from "../data";

// i18n
import { t } from "i18next";

const WorksCarousel = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      slidesPerView={"auto"}
      centeredSlides={"true"}
      spaceBetween={10}
      speed={500}
      loop={"true"}
      pagination={{
        type: "bullets",
        clickable: true,
      }}
      navigation={{
        nextEl: ".right",
        prevEl: ".left",
      }}
      breakpoints={{
        1024: {
          spaceBetween: 20,
        },
        1540: {
          spaceBetween: 30,
        },
      }}
      className="worksCarousel h-full w-full"
    >
      {worksCaouselData.map((item, index) => {
        // destructure item
        const { image, code, demo } = item;

        return (
          <SwiperSlide
            key={index}
            className="bg-grey h-full max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] 2xl:min-w-[700px] select-none flex flex-col gap-y-6 p-6 rounded"
          >
            {/* image */}
            <div className="h-[80%] w-full overflow-hidden flex items-center justify-center">
              <img
                src={image}
                alt="works"
                className="object-cover h-full max-w-full"
              />
            </div>

            {/* buttons */}
            <div className="h-[20%] w-full flex items-center justify-center gap-x-6">
              <a
                href={code}
                className="btn text-light btn-secondary btnHover"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Source code */}
                {t("works__carousel_btn_1")}
              </a>
              <a
                href={demo}
                className="btn btn-primary btnHover"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Live demo */}
                {t("works__carousel_btn_2")}
              </a>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorksCarousel;
