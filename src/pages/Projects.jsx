import React from "react";

// import data
import { projectsData } from "../data";

// i18next
import { useTranslation } from "react-i18next";

const Projects = () => {
  // translation
  const { t } = useTranslation();

  return (
    <div className="bg-light dark:bg-dark -mb-[1px]">
      <div className="wrapper pb-1 pt-32">
        {/* title */}
        <h2 className="uppercase text-blue font-medium tracking-wide mb-10 lg:text-xl flex items-center">
          {/* My Projects */}
          {t("projects__title")}
          <div className="w-12 h-[1px] lg:h-[1.6px] bg-blue ml-3" />
        </h2>

        {/* projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20 border-b border-grey/30 dark:border-grey">
          {projectsData.map((item, index) => {
            // destructure item
            const { image, code, demo } = item;

            return (
              <div
                key={index}
                className="w-full min-h-64 lg:min-h-80 p-3 lg:p-6 bg-grey flex flex-col gap-y-3 lg:gap-y-6 rounded"
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
                <div className="h-[20%] w-full flex items-center justify-center gap-x-4 lg:gap-x-6">
                  <a
                    href={code}
                    className="btn text-xs lg:text-lg text-light btn-secondary btnHover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Source code */}
                    {t("works__carousel_btn_1")}
                  </a>
                  <a
                    href={demo}
                    className="btn text-xs lg:text-lg btn-primary btnHover"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* Live demo */}
                    {t("works__carousel_btn_2")}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
