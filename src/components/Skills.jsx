import React from "react";

// import VisibilitySensor from "react-visibility-sensor";
// import {
//   buildStyles,
//   CircularProgressbarWithChildren,
// } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";

// import progressbar
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

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
  const props1 = {
    percent: 95,
    colorSlice: "#FC490B",
    colorCircle: "#a1a1a130",
    size: 180,
    stroke: 7,
    speed: 60,
    number: false,
  };
  const props2 = {
    percent: 85,
    colorSlice: "#2196F3",
    colorCircle: "#a1a1a130",
    size: 180,
    stroke: 7,
    speed: 60,
    number: false,
  };
  const props3 = {
    percent: 55,
    colorSlice: "#FFDF00",
    colorCircle: "#a1a1a130",
    size: 180,
    stroke: 7,
    speed: 60,
    number: false,
  };
  const props4 = {
    percent: 50,
    colorSlice: "#61DAFB",
    colorCircle: "#a1a1a130",
    size: 180,
    stroke: 7,
    speed: 60,
    number: false,
  };
  const props5 = {
    percent: 70,
    colorSlice: "#06B6D4",
    colorCircle: "#a1a1a130",
    size: 180,
    stroke: 7,
    speed: 60,
    number: false,
  };
  const props6 = {
    percent: 30,
    colorSlice: "#339933",
    colorCircle: "#a1a1a130",
    size: 180,
    stroke: 7,
    speed: 60,
    number: false,
  };
  const props7 = {
    percent: 40,
    colorSlice: "#2A86FF",
    colorCircle: "#a1a1a130",
    size: 180,
    stroke: 7,
    speed: 60,
    number: false,
  };
  const props8 = {
    percent: 30,
    colorSlice: "#47A248",
    colorCircle: "#a1a1a130",
    size: 180,
    stroke: 7,
    speed: 60,
    number: false,
  };
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
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-y-10 xl:gap-y-20 select-none">
          <div className="w-[180px] h-[180px] relative m-auto">
            <CircularProgressBar {...props1} />
            <img
              src={HTML}
              alt="html"
              style={{ width: 80 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          <div className="w-[180px] h-[180px] relative m-auto">
            <CircularProgressBar {...props2} />
            <img
              src={CSS}
              alt="css"
              style={{ width: 80 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          <div className="w-[180px] h-[180px] relative m-auto">
            <CircularProgressBar {...props3} />
            <img
              src={JS}
              alt="js"
              style={{ width: 80 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          <div className="w-[180px] h-[180px] relative m-auto">
            <CircularProgressBar {...props4} />
            <img
              src={ReactLogo}
              alt="react"
              style={{ width: 80 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          <div className="w-[180px] h-[180px] relative m-auto">
            <CircularProgressBar {...props5} />
            <img
              src={Tailwind}
              alt="tailwind"
              style={{ width: 80 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          <div className="w-[180px] h-[180px] relative m-auto">
            <CircularProgressBar {...props6} />
            <img
              src={Node}
              alt="node"
              style={{ width: 80 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          <div className="w-[180px] h-[180px] relative m-auto">
            <CircularProgressBar {...props7} />
            <img
              src={Express}
              alt="express"
              style={{ width: 80 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          <div className="w-[180px] h-[180px] relative m-auto">
            <CircularProgressBar {...props8} />
            <img
              src={MongoDB}
              alt="mongodb"
              style={{ width: 50 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          
          {/* <VisibilitySensor>
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
          </VisibilitySensor> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
