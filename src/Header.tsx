import { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const handleMenuClick = () => {
    // Logic to open the menu goes here
    console.log("Menu icon clicked");
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) === true
      ) {
        setShowMenu(false);
      }
    }

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div
      className="fixed z-[50] h-[120px] w-full top-0
             flex items-center justify-between lg:justify-around 
             px-5 lg:px-0 rounded-b-2xl shadow-xl
             backdrop-blur-md 
             bg-amber-100/20 border border-white/20"
    >
      {/* <div className="text-3xl font-bold text-amber-800"></div> */}
      <img
        src="/ielts-bg-remove.png"
        alt="logo"
        className=" h-[50px] md:h-[70px] "
      />

      <li className=" gap-5  text-2xl font-semibold  justify-center items-center hidden  lg:flex">
        <ul className="hover:text-amber-400 hover:cursor-pointer hover:underline  hover:text-[27px] w-[90px]  text-center">
          Home
        </ul>
        <ul className="hover:text-amber-400 hover:cursor-pointer hover:underline  hover:text-[27px] w-[90px]  text-center">
          About
        </ul>
        <ul className="hover:text-amber-400 hover:cursor-pointer hover:underline  hover:text-[27px] w-[90px]  text-center">
          Menu
        </ul>
        <ul className="hover:text-amber-400 hover:cursor-pointer hover:underline  hover:text-[27px] w-[90px]  text-center">
          Blog
        </ul>
        <ul className="hover:text-amber-400 hover:cursor-pointer hover:underline  hover:text-[27px] w-[90px]  text-center">
          Awards
        </ul>
      </li>

      <IoIosMenu
        className="text-4xl w-auto lg:hidden hover:text-amber-400 hover:cursor-pointer  flex pr-5"
        onClick={() => handleMenuClick()}
      />

      <div className=" px-5 py-2 rounded-4xl hidden  lg:flex bg-amber-300 shadow-sm  hover:bg-amber-400 ">
        Contact Us
      </div>
      {showMenu && (
        <div
          ref={menuRef}
          className="absolute z-50 top-[120px] right-5   shadow-lg  flex w-[200px] flex-col items-center  lg:hidden rounded-2xl backdrop-blur-md 
             bg-amber-100 border border-white/80"
        >
          <div className=" gap-5 w-full  text-2xl   justify-center items-center lg:hidden ">
            <ul className="hover:text-amber-400 hover:cursor-pointer  border-b mx-1   text-[22px]  text-center py-2 ">
              Home
            </ul>
            <ul className="hover:text-amber-400 hover:cursor-pointer  border-b mx-1   text-[22px]   text-center py-2">
              About
            </ul>
            <ul className="hover:text-amber-400 hover:cursor-pointer border-b  mx-1   text-[22px]  text-center py-2">
              Menu
            </ul>
            <ul className="hover:text-amber-400 hover:cursor-pointer border-b mx-1     text-[22px]   text-center py-2">
              Blog
            </ul>
            <ul className="hover:text-amber-400 hover:cursor-pointer   mx-1  text-[22px]   text-center py-2">
              Contact
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
