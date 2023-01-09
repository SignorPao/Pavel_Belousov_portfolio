import React from "react";

// import components
import Header from "../components/Header";
import Skills from "../components/Skills";
import Works from "../components/Works";
import GetInTouch from "../components/GetInTouch";

const Main = () => {
  return (
    <>
      <Header />
      <main className="">
        <Skills />
        <Works />
        <GetInTouch />
      </main>
    </>
  );
};

export default Main;
