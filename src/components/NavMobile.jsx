import React from "react";

// import Link
import { HashLink as Link } from "react-router-hash-link";

const NavMobile = ({ click }) => {
  return (
    <div className="w-full h-full bg-dark text-light">
      <ul className="h-full flex flex-col justify-center items-center gap-y-10 text-2xl">
        <li>
          <Link to={"/#home"} onClick={click}>
            Home
          </Link>
        </li>
        <li>
          <Link to={"/#skills"} onClick={click}>
            Skills
          </Link>
        </li>
        <li>
          <Link to={"/#works"} onClick={click}>
            Works
          </Link>
        </li>
        <li>
          <Link to={"/#touch"} onClick={click}>
            Contact
          </Link>
        </li>
        <li>
          <Link to={"/projects"} onClick={click}>
            Projects
          </Link>
        </li>
        <li>
          <Link to={"/about"} onClick={click}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
