import React, { useState } from "react";

import logo from "../assets/images/logo.svg";
import logo_White from "../assets/images/logo-white.svg";
import Button from "./Button";
import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";

export default function Navbar() {
  const [openHamburguer, setOpenHamburger] = useState(false);

  const [icon, setIcon] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? sun : moon
  );
  console.log(icon, "temasssssss");

  /*configuarndo el modo noche */
  const preferColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";
  console.log(preferColorScheme);

  const setTheme = (theme) => {
    console.log(theme);

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

  setTheme(localStorage.getItem("theme") || preferColorScheme);

  function switchTheme() {
    let switchToTheme =
      localStorage.getItem("theme") === "dark" ? "light" : "dark";
    setTheme(switchToTheme);
    setIcon(switchToTheme === "dark" ? sun : moon);
  }

  const handleHamburger = () => {
    openHamburguer ? setOpenHamburger(false) : setOpenHamburger(true);
  };

  return (
    <nav className="relative w-full bg-white z-15 dark:bg-fm-dark-blue transition-colors transition-discrete ease-in-out">
      <div className=" relative px-8 py-6 flex justify-between items-center lg:m-auto lg:pb-0 lg:max-w-[1340px]">
        <img src={localStorage.getItem("theme") === "dark" ? logo_White : logo} className="w-40 h-auto" alt="" />

        <ul
          className={`menu-modal gap-4  lg:g-2 absolute text-center flex bg-neutral-50 flex-col shadow-fm-new w-[20rem] lg:static lg:flex-row lg:w-fit p-8 lg:p-0 lg:bg-white lg:items-center  ${
            openHamburguer ? "menu-modal-open" : " menu-modal-close"
          }  dark:bg-fm-dark-blue dark:text-fm-grayis-blue  `}
        >
          <li className="lg:text-fm-grayis-blue lg:hover:text-fm-dark-blue dark:hover:text-white">
            <a href="">Home</a>
          </li>
          <li className="lg:text-fm-grayis-blue lg:hover:text-fm-dark-blue dark:hover:text-white">
            <a href="">About</a>
          </li>
          <li className="lg:text-fm-grayis-blue lg:hover:text-fm-dark-blue dark:hover:text-white">
            <a href="">Contact</a>
          </li>
          <li className="lg:text-fm-grayis-blue lg:hover:text-fm-dark-blue dark:hover:text-white">
            <a href="">Blog</a>
          </li>
          <li className="lg:text-fm-grayis-blue lg:hover:text-fm-dark-blue dark:hover:text-white">
            <a href="">Carrers</a>
          </li>
          <li className="lg:ml-36">
            <Button></Button>
          </li>
          <li className="md:flex lg:hidden xl:hidden">
                <div
        onClick={() => {
          switchTheme();
        }}
        className={` flex m-auto mt-6  top-5 left-10  w-15 rounded-full p-1  inset-shadow-sm inset-shadow-neutral-500 hover:cursor-pointer transition-all delay-200 ${
          localStorage.getItem("theme") === "dark"
            ? "justify-end bg-gradient-to-r from-fm-lime-green to-fm-bright-cyan"
            : "justify-start bg-neutral-300"
        }`}
      >
        <button
          type="button"
          className="bg-neutral-50 rounded-full p-1 transition ease-in-out shadow-md shadow-neutral-400 hover:cursor-pointer"
        >
          <img className="size-5" alt="" src={icon} />
        </button>
      </div>
          </li>
        </ul>
        <div
          className="span-hamburger  flex flex-col   p-1 gap-1.5 lg:hidden"
          onClick={handleHamburger}
        >
          <span className={`${openHamburguer ? "span-1" : ""}`}></span>
          <span className={`${openHamburguer ? "span-2" : ""}`}></span>
          <span className={`${openHamburguer ? "span-3" : ""}`}></span>
        </div>

        <div
          className={`absolute ${
            openHamburguer
              ? " top-[71px] left-0 z-4 w-full h-screen bg-[rgba(0,0,0,.3)] transition-opacity duration-300 opacity-100 "
              : " opacity-0 pointer-events-none"
          } `}
        ></div>
      </div>

      <div
        onClick={() => {
          switchTheme();
        }}
        className={`hidden absolute md:hidden lg:flex xl:flex top-5 left-10  w-15 rounded-full p-1  inset-shadow-sm inset-shadow-neutral-500 hover:cursor-pointer transform transition-all duration-300 ${
          localStorage.getItem("theme") === "dark"
            ? "justify-end  bg-gradient-to-r from-fm-lime-green to-fm-bright-cyan"
            : "ease-in-out justify-start bg-neutral-300"
        }`}
      >
        <button
          type="button"
          className="bg-neutral-50 rounded-full p-1 transition ease-in-out shadow-md shadow-neutral-400 hover:cursor-pointer"
        >
          <img className="size-5" alt="" src={icon} />
        </button>
      </div>
    </nav>
  );
}
