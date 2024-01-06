import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css";
function Header() {
  const [menuOpened, setMenuOpened] = useState(false)
  
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
         right: !menuOpened && "-100%" }
    }
  }
  return (
    <section className="h-wrapper text-white">
      <div className="h-container flexCenter innerWidth paddings  py-4">
        <img src="./logo.png" className=" scale-75 md:scale-100" />
        <OutsideClickHandler onOutsideClick={()=>setMenuOpened(false)}>
          <div
            className="h-menu top-24 right-0 bg-white md:bg-transparent rounded-xl text-black md:text-white gap-8 p-12 md:p-0 font-medium md:font-normal md:gap-10 flexCenter transition-all duration-300 ease-in z-[99]"
            style={getMenuStyles(menuOpened)}
          >
            <a href="" className=" font-medium">
              Residenciess
            </a>
            <a href="" className=" font-medium">
              Our Values
            </a>
            <a href="" className=" font-medium">
              Contact Us
            </a>
            <a href="" className=" font-medium">
              Get Started
            </a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon md:hidden"
          onClick={() => setMenuOpened((prev)=>!prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
