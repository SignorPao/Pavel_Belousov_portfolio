import React from "react";

import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <section
      id="skills"
      className="section bg-light dark:bg-dark text-dark dark:text-light"
    >
      <div className="wrapper">
        {/* title */}
        <h2 className="uppercase text-blue font-medium tracking-wide mb-10">
          My skills
        </h2>

        {/* skills charts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 50 : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              );
            }}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 80 : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              );
            }}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 60 : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              );
            }}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 90 : 0;
              return (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              );
            }}
          </VisibilitySensor>
        </div>
      </div>
    </section>
  );
};

export default Skills;
