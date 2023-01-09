import React, { useEffect, useRef, useState } from "react";

// import Link
import { HashLink as Link } from "react-router-hash-link";

// import component
import NavMobile from "./NavMobile";

const Nav = () => {
  // nav state on scroll
  const [navState, isNavState] = useState(false);

  // navMobile state
  const [navMobile, setNavMobile] = useState(false);

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 1 ? isNavState(true) : isNavState(false);
    });
  });

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    if (navMobile) {
      document.body.classList.add("lock");
    } else {
      document.body.classList.remove("lock");
    }
    return;
  }, [navMobile]);

  // click outside to close mobile menu
  // const ref = useRef();
  // function useOnClickOutside(ref, handler) {
  //   useEffect(() => {
  //     const listener = (event) => {
  //       if (!ref.current || ref.current.contains(event.target)) {
  //         return;
  //       }
  //       handler(event);
  //     };
  //     document.addEventListener("mousedown", listener);
  //     document.addEventListener("touchstart", listener);
  //     return () => {
  //       document.removeEventListener("mousedown", listener);
  //       document.removeEventListener("touchstart", listener);
  //     };
  //   }, [ref, handler]);
  // }
  // useOnClickOutside(ref, () => setNavMobile(false));

  return (
    <nav
      className={`${
        navState ? "bg-white py-2 px-4 shadow-xl" : "py-6 px-8"
      } fixed top-0 left-0 w-full z-50 ease-in duration-200 select-none`}
    >
      <div className="flex items-center justify-between">
        {/* logo */}
        <Link
          to={"/#home"}
          className="z-50 text-blue font-semibold text-2xl"
          onClick={() => setNavMobile(false)}
        >
          PB
        </Link>

        {/* menu & dark/light mode */}
        <div className="flex gap-x-4 items-center">
          {/* nav: mobile - hidden | desktop - show */}
          <ul className="hidden md:flex md:gap-x-4">
            <li>
              <Link to={"/#home"}>Home</Link>
            </li>
            <li>
              <Link to={"/#skills"}>Skills</Link>
            </li>
            <li>
              <Link to={"/#works"}>Works</Link>
            </li>
            <li>
              <Link to={"/#touch"}>Contact</Link>
            </li>
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
          </ul>

          {/* dark/light mode */}
          <div>dark/light</div>

          {/* burger icon: mobile - show | desktop - hidden */}
          <button
            className="md:hidden z-50 w-12 h-12 bg-blue rounded-full grid place-items-center"
            onClick={() => setNavMobile((prev) => !prev)}
          >
            {navMobile ? (
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.21875 9.96875L2.09375 16.0937C1.86458 16.3229 1.57292 16.4375 1.21875 16.4375C0.864583 16.4375 0.572916 16.3229 0.34375 16.0937C0.114583 15.8646 0 15.5729 0 15.2188C0 14.8646 0.114583 14.5729 0.34375 14.3437L6.46875 8.21875L0.34375 2.09375C0.114583 1.86458 0 1.57292 0 1.21875C0 0.864583 0.114583 0.572916 0.34375 0.34375C0.572916 0.114583 0.864583 0 1.21875 0C1.57292 0 1.86458 0.114583 2.09375 0.34375L8.21875 6.46875L14.3437 0.34375C14.5729 0.114583 14.8646 0 15.2188 0C15.5729 0 15.8646 0.114583 16.0937 0.34375C16.3229 0.572916 16.4375 0.864583 16.4375 1.21875C16.4375 1.57292 16.3229 1.86458 16.0937 2.09375L9.96875 8.21875L16.0937 14.3437C16.3229 14.5729 16.4375 14.8646 16.4375 15.2188C16.4375 15.5729 16.3229 15.8646 16.0937 16.0937C15.8646 16.3229 15.5729 16.4375 15.2188 16.4375C14.8646 16.4375 14.5729 16.3229 14.3437 16.0937L8.21875 9.96875Z"
                  fill="#171717"
                />
              </svg>
            ) : (
              <svg
                width="26px"
                height="26px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#171717"
                strokeWidth="0.4800000000000001"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_iconCarrier">
                  <g id="style=stroke">
                    <g id="menu-strawberry">
                      <path
                        id="vector (Stroke)"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H21C21.4142 5.25 21.75 5.58579 21.75 6C21.75 6.41421 21.4142 6.75 21 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6Z"
                        fill="#171717"
                      ></path>
                      <path
                        id="vector (Stroke)_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
                        fill="#171717"
                      ></path>
                      <path
                        id="vector (Stroke)_3"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.25 18C6.25 17.5858 6.58579 17.25 7 17.25H17C17.4142 17.25 17.75 17.5858 17.75 18C17.75 18.4142 17.4142 18.75 17 18.75H7C6.58579 18.75 6.25 18.4142 6.25 18Z"
                        fill="#171717"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            )}
          </button>

          {/* nav mobile: mobile - toggle(show/hidden) | desktop - hidden */}
          <div
            className={`${
              navMobile ? "right-0" : "-right-full"
            } fixed top-0 bottom-0 w-screen transition-all z-10 lg:hidden`}
            // ref={ref}
          >
            <NavMobile click={() => setNavMobile(!navMobile)} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
