import React, { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// import components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

// page scroll to top
const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Home = () => {
  return (
    <div id="home" className="overflow-hidden font-primary">
      <Wrapper>
        <Nav />
        <Outlet />
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Home;
