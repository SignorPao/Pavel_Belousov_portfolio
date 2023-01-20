import React from "react";

// import Link
import { HashLink as Link } from "react-router-hash-link";

// i18next
import { useTranslation } from "react-i18next";

// get current year
const year = new Date().getFullYear();

const Footer = () => {
  // translation
  const { t } = useTranslation();

  return (
    <footer className="bg-light dark:bg-dark section text-dark dark:text-light">
      <div className="wrapper flex flex-col gap-y-4">
        {/* footer top */}
        <div className="border-b border-grey/30 dark:border-grey pb-12 flex flex-col gap-y-14 md:gap-y-0 md:flex-row md:gap-x-6">
          {/* logo & description */}
          <div className="md:flex-[30%] flex flex-col gap-y-3">
            <Link to={"/#home"}>
              <div className="flex items-center gap-x-2">
                <div className="w-9 h-10 bg-logoDark dark:bg-logoLight bg-center bg-contain bg-no-repeat" />
                <span className="text-xl">
                  {/* Pavel Belousov */}
                  {t("header__title")}
                </span>
              </div>
            </Link>

            <p className="text-sm text-dark/90 dark:text-light/50 font-light">
              {t('header__description')}
            </p>
          </div>

          {/* links */}
          <div className="md:flex-[30%] flex flex-col gap-y-4">
            <p className="text-sm md:text-center text-dark/90 dark:text-light/50">
              {t("quick__links")}
            </p>
            <ul className="w-full flex flex-wrap gap-y-4 md:pl-[20%] 2xl:pl-[25%]">
              <li className="w-1/2">
                <Link to={"/#home"} className="hover:underline">
                  {/* Home */}
                  {t('menu__link_1')}
                </Link>
              </li>
              <li className="w-1/2">
                <Link to={"/#skills"} className="hover:underline">
                  {/* Skills */}
                  {t('menu__link_2')}
                </Link>
              </li>
              <li className="w-1/2">
                <Link to={"/#works"} className="hover:underline">
                  {/* Works */}
                  {t('menu__link_3')}
                </Link>
              </li>
              <li className="w-1/2">
                <Link to={"/#touch"} className="hover:underline">
                  {/* Contact */}
                  {t('menu__link_4')}
                </Link>
              </li>
              <li className="w-1/2">
                <Link to={"projects"} className="hover:underline">
                  {/* Projects */}
                  {t('menu__link_5')}
                </Link>
              </li>
              <li className="w-1/2">
                <Link to={"about"} className="hover:underline">
                  {/* About */}
                  {t('menu__link_6')}
                </Link>
              </li>
            </ul>
          </div>

          {/* socials */}
          <div className="md:flex-[30%] flex flex-col gap-y-4 items-start md:items-end">
            <p className="text-sm text-dark/90 dark:text-light/50">
              {/* Follow & contact me */}
              {t("follow")}
            </p>
            <div className="flex gap-x-4 xl:gap-x-6 items-center justify-center md:flex-col md:gap-y-6 lg:flex-row">
              <ul className="flex gap-x-4 xl:gap-x-8 justify-center">
                <li>
                  <a
                    href="https://github.com/SignorPao"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="#171717"
                      width="30px"
                      height="30px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="dark:fill-light hover:fill-blue dark:hover:fill-blue transition duration-300"
                    >
                      <title>Github</title>
                      <path d="M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/pavel-belousov-784963248/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="dark:fill-light hover:fill-blue dark:hover:fill-blue transition duration-300"
                    >
                      <rect x="0" fill="none" width="20" height="20" />
                      <title>Linkedin</title>
                      <g>
                        <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z" />
                      </g>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://dribbble.com/signorPao"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="#171717"
                      width="30px"
                      height="30px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="dark:fill-light hover:fill-blue dark:hover:fill-blue transition duration-300"
                    >
                      <title>Dribble</title>
                      <path d="M25.916 7.921c-1.881 2.234-4.289 3.965-7.035 5.009l-0.118 0.039c0.3 0.612 0.587 1.231 0.85 1.857 0.1 0.225 0.187 0.45 0.275 0.662 0.927-0.102 2.003-0.16 3.092-0.16 2.063 0 4.077 0.208 6.023 0.605l-0.193-0.033c-0.020-3.040-1.107-5.821-2.904-7.994l0.017 0.021zM13.001 3.569c1.595 2.15 3.176 4.6 4.598 7.151l0.178 0.347c2.712-0.908 4.989-2.511 6.694-4.6l0.021-0.026c-2.247-2.006-5.228-3.232-8.494-3.232-1.063 0-2.096 0.13-3.084 0.375l0.088-0.018zM3.46 13.395c4.219-0.022 8.295-0.59 12.176-1.636l-0.333 0.076c-1.652-2.899-3.222-5.318-4.912-7.644l0.163 0.236c-3.596 1.721-6.227 4.966-7.077 8.875l-0.015 0.085zM6.484 24.585c2.42-3.882 6.010-6.839 10.271-8.408l0.141-0.045c0.169-0.056 0.337-0.105 0.506-0.15-0.325-0.731-0.675-1.458-1.040-2.174-3.888 1.154-8.355 1.819-12.977 1.819-0.066 0-0.131-0-0.196-0l0.010 0-0.005 0.39c0 0.003 0 0.006 0 0.009 0 3.297 1.25 6.302 3.301 8.568l-0.010-0.011zM21.005 27.809c-0.682-3.699-1.63-6.957-2.863-10.070l0.126 0.361-0.082 0.025c-4.314 1.346-7.826 4.192-10.002 7.915l-0.045 0.083c2.145 1.688 4.885 2.707 7.863 2.707 1.805 0 3.522-0.374 5.078-1.049l-0.083 0.032zM28.646 18.052c-1.571-0.474-3.376-0.747-5.245-0.747-0.964 0-1.911 0.073-2.836 0.213l0.104-0.013c0.98 2.564 1.842 5.629 2.436 8.789l0.054 0.344c2.874-1.96 4.893-4.993 5.482-8.51l0.010-0.075zM16 30.996c0 0 0 0-0 0-8.282 0-14.996-6.714-14.996-14.996s6.714-14.996 14.996-14.996c8.282 0 14.996 6.714 14.996 14.996 0 0 0 0 0 0v0c-0.011 8.277-6.718 14.984-14.995 14.996h-0.001z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
              <ul className="flex gap-x-4 xl:gap-x-8 justify-center">
                <li>
                  <a
                    href="https://www.reddit.com/user/meta_hedonist"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="30px"
                      height="30px"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="dark:fill-light hover:fill-blue dark:hover:fill-blue transition duration-300"
                    >
                      <rect x="0" fill="none" width="20" height="20" />
                      <title>Reddit</title>
                      <g>
                        <path d="M18 10.1c0-1-.8-1.8-1.8-1.7-.4 0-.9.2-1.2.5-1.4-.9-3-1.5-4.7-1.5l.8-3.8 2.6.6c0 .7.6 1.2 1.3 1.2.7 0 1.2-.6 1.2-1.3 0-.7-.6-1.2-1.3-1.2-.5 0-.9.3-1.1.7L11 2.9h-.2c-.1 0-.1.1-.1.2l-1 4.3C8 7.4 6.4 7.9 5 8.9c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5c.1.1.3.3.5.3v.5c0 2.7 3.1 4.9 7 4.9s7-2.2 7-4.9v-.5c.6-.3 1-.9 1-1.6zM6 11.4c0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2s-.6 1.2-1.2 1.2c-.7 0-1.2-.5-1.2-1.2zm7 3.3c-.9.6-1.9 1-3 .9-1.1 0-2.1-.3-3-.9-.1-.1-.1-.3 0-.5.1-.1.3-.1.4 0 .7.5 1.6.8 2.5.7.9.1 1.8-.2 2.5-.7.1-.1.3-.1.5 0s.2.3.1.5zm-.3-2.1c-.7 0-1.2-.6-1.2-1.2s.6-1.2 1.2-1.2c.7 0 1.2.6 1.2 1.2.1.7-.5 1.2-1.2 1.2z" />
                      </g>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://facebook.com/pavel.belousov.82"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="#171717"
                      width="30px"
                      height="30px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="dark:fill-light hover:fill-blue dark:hover:fill-blue transition duration-300"
                    >
                      <title>Facebook</title>
                      <path d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/signorpao/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      fill="#171717"
                      width="30px"
                      height="30px"
                      viewBox="0 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="dark:fill-light hover:fill-blue dark:hover:fill-blue transition duration-300"
                    >
                      <title>Instagram</title>
                      <path d="M25.805 7.996c0 0 0 0.001 0 0.001 0 0.994-0.806 1.799-1.799 1.799s-1.799-0.806-1.799-1.799c0-0.994 0.806-1.799 1.799-1.799v0c0.993 0.001 1.798 0.805 1.799 1.798v0zM16 20.999c-2.761 0-4.999-2.238-4.999-4.999s2.238-4.999 4.999-4.999c2.761 0 4.999 2.238 4.999 4.999v0c0 0 0 0.001 0 0.001 0 2.76-2.237 4.997-4.997 4.997-0 0-0.001 0-0.001 0h0zM16 8.3c0 0 0 0-0 0-4.253 0-7.7 3.448-7.7 7.7s3.448 7.7 7.7 7.7c4.253 0 7.7-3.448 7.7-7.7v0c0-0 0-0 0-0.001 0-4.252-3.447-7.7-7.7-7.7-0 0-0 0-0.001 0h0zM16 3.704c4.003 0 4.48 0.020 6.061 0.089 1.003 0.012 1.957 0.202 2.84 0.538l-0.057-0.019c1.314 0.512 2.334 1.532 2.835 2.812l0.012 0.034c0.316 0.826 0.504 1.781 0.516 2.778l0 0.005c0.071 1.582 0.087 2.057 0.087 6.061s-0.019 4.48-0.092 6.061c-0.019 1.004-0.21 1.958-0.545 2.841l0.019-0.058c-0.258 0.676-0.64 1.252-1.123 1.726l-0.001 0.001c-0.473 0.484-1.049 0.866-1.692 1.109l-0.032 0.011c-0.829 0.316-1.787 0.504-2.788 0.516l-0.005 0c-1.592 0.071-2.061 0.087-6.072 0.087-4.013 0-4.481-0.019-6.072-0.092-1.008-0.019-1.966-0.21-2.853-0.545l0.059 0.019c-0.676-0.254-1.252-0.637-1.722-1.122l-0.001-0.001c-0.489-0.47-0.873-1.047-1.114-1.693l-0.010-0.031c-0.315-0.828-0.506-1.785-0.525-2.785l-0-0.008c-0.056-1.575-0.076-2.061-0.076-6.053 0-3.994 0.020-4.481 0.076-6.075 0.019-1.007 0.209-1.964 0.544-2.85l-0.019 0.059c0.247-0.679 0.632-1.257 1.123-1.724l0.002-0.002c0.468-0.492 1.045-0.875 1.692-1.112l0.031-0.010c0.823-0.318 1.774-0.509 2.768-0.526l0.007-0c1.593-0.056 2.062-0.075 6.072-0.075zM16 1.004c-4.074 0-4.582 0.019-6.182 0.090-1.315 0.028-2.562 0.282-3.716 0.723l0.076-0.025c-1.040 0.397-1.926 0.986-2.656 1.728l-0.001 0.001c-0.745 0.73-1.333 1.617-1.713 2.607l-0.017 0.050c-0.416 1.078-0.67 2.326-0.697 3.628l-0 0.012c-0.075 1.6-0.090 2.108-0.090 6.182s0.019 4.582 0.090 6.182c0.028 1.315 0.282 2.562 0.723 3.716l-0.025-0.076c0.796 2.021 2.365 3.59 4.334 4.368l0.052 0.018c1.078 0.415 2.326 0.669 3.628 0.697l0.012 0c1.6 0.075 2.108 0.090 6.182 0.090s4.582-0.019 6.182-0.090c1.315-0.029 2.562-0.282 3.716-0.723l-0.076 0.026c2.021-0.796 3.59-2.365 4.368-4.334l0.018-0.052c0.416-1.078 0.669-2.326 0.697-3.628l0-0.012c0.075-1.6 0.090-2.108 0.090-6.182s-0.019-4.582-0.090-6.182c-0.029-1.315-0.282-2.562-0.723-3.716l0.026 0.076c-0.398-1.040-0.986-1.926-1.729-2.656l-0.001-0.001c-0.73-0.745-1.617-1.333-2.607-1.713l-0.050-0.017c-1.078-0.416-2.326-0.67-3.628-0.697l-0.012-0c-1.6-0.075-2.108-0.090-6.182-0.090z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* footer bottom */}
        <div className="flex justify-between text-xs pt-6 text-dark/90 dark:text-light/50">
          <div className="text-center lg:text-left">
            &copy; {year} {t("header__title")}
          </div>
          <div className="text-center lg:text-left">
            {t("created")}
            <a
              href="https://github.com/SignorPao"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue transition duration-300"
            >
              @signorPao
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
