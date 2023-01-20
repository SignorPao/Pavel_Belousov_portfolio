import React from "react";

// import Link
import { HashLink as Link } from "react-router-hash-link";

// i18n
import { t } from "i18next";

const NavMobile = ({ click }) => {
  return (
    <div className="w-full h-full bg-dark text-light">
      <ul className="h-full flex flex-col justify-center items-center gap-y-10 text-2xl">
        <li>
          <Link to={"/#home"} onClick={click}>
            {/* Home */}
            {t('menu__link_1')}
          </Link>
        </li>
        <li>
          <Link to={"/#skills"} onClick={click}>
            {/* Skills */}
            {t('menu__link_2')}
          </Link>
        </li>
        <li>
          <Link to={"/#works"} onClick={click}>
            {/* Works */}
            {t('menu__link_3')}
          </Link>
        </li>
        <li>
          <Link to={"/#touch"} onClick={click}>
            {/* Contact */}
            {t('menu__link_4')}
          </Link>
        </li>
        <li>
          <Link to={"/projects"} onClick={click}>
            {/* Projects */}
            {t('menu__link_5')}
          </Link>
        </li>
        <li>
          <Link to={"/about"} onClick={click}>
            {/* About */}
            {t('menu__link_6')}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
