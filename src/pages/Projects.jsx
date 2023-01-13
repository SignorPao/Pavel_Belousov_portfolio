import React from "react";

// import data
import { projectsData } from "../data";

const Projects = () => {
  return (
    <div className="min-h-screen bg-light dark:bg-dark">
      <div className="wrapper section pt-32">
        {/* title */}
        <h2 className="uppercase text-blue font-medium tracking-wide mb-10 text-center lg:text-left lg:text-xl">
          My Projects
        </h2>

        {/* projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((item, index) => {
            // destructure item
            const { image, code, demo } = item;

            return (
              <div key={index} className="w-full min-h-64 lg:min-h-80 p-3 lg:p-6 bg-grey flex flex-col gap-y-3 lg:gap-y-6 rounded">
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
                    className="btn text-xs lg:text-lg text-light btn-secondary"
                    target="_blank"
                  >
                    Source code
                  </a>
                  <a href={demo} className="btn text-xs lg:text-lg btn-primary" target="_blank">
                    Live demo
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
