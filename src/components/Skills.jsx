import React from "react";

// import react visibility sensor
import VisibilitySensor from "react-visibility-sensor";

// import progressbar
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// import icons
import HTML from "../assets/html-5.png";
import CSS from "../assets/css-3.png";
import JS from "../assets/js.png";
import ReactLogo from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Node from "../assets/node.png";
import Express from "../assets/express.png";
import MongoDB from "../assets/mongodb.png";

const Skills = () => {
  return (
    <section
      id="skills"
      className="section bg-light dark:bg-dark text-dark dark:text-light -mt-[1px]"
    >
      <div className="wrapper">
        {/* title */}
        <h2 className="uppercase text-blue font-medium tracking-wide mb-10 text-center lg:text-left lg:text-xl">
          My skills
        </h2>

        {/* skills charts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-20">
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 95 : 0;
              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathTransitionDuration: 3,
                    pathColor: "#FC490B",
                  })}
                >
                  <img src={HTML} alt="html" style={{ width: 80 }} />
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 85 : 0;
              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathTransitionDuration: 3,
                    pathColor: "#2196F3",
                  })}
                >
                  <img src={CSS} alt="css" style={{ width: 80 }} />
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 55 : 0;
              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathTransitionDuration: 3,
                    pathColor: "#FFDF00",
                  })}
                >
                  <img src={JS} alt="js" style={{ width: 80 }} />
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 50 : 0;
              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathTransitionDuration: 3,
                    pathColor: "#61DAFB",
                  })}
                >
                  <img src={ReactLogo} alt="react" style={{ width: 80 }} />
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 70 : 0;
              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathTransitionDuration: 3,
                    pathColor: "#06B6D4",
                  })}
                >
                  <img src={Tailwind} alt="tailwind" style={{ width: 80 }} />
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 30 : 0;
              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathTransitionDuration: 3,
                    pathColor: "#339933",
                  })}
                >
                  <img src={Node} alt="node" style={{ width: 80 }} />
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 40 : 0;
              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathTransitionDuration: 3,
                    pathColor: "#2A86FF",
                  })}
                >
                  <img src={Express} alt="express" style={{ width: 80 }} />
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>

          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? 30 : 0;
              return (
                <CircularProgressbarWithChildren
                  value={percentage}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathTransitionDuration: 3,
                    pathColor: "#47A248",
                  })}
                >
                  <img src={MongoDB} alt="mongodb" style={{ width: 50 }} />
                </CircularProgressbarWithChildren>
              );
            }}
          </VisibilitySensor>
        </div>
      </div>
    </section>
  );
};

export default Skills;
