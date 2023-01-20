import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="px-[24px] pt-[24px] lg:px-[80px] lg:pt-[78px] flex justify-between">
      <img
        className="h-[16px] w-[96px] lg:h-[38px] lg:w-[240px] cursor-pointer transition-all duration-300 hover:scale-110"
        src={logo}
        alt="huddle_logo"
      />
      <button className="text-pink text-[10px] lg:text-[18px] border border-pink rounded-full btn_shadow w-[80px] h-[24px] lg:w-[136px] lg:h-[40px] capitalize transition-all duration-300 hover:opacity-50">
        Try it free
      </button>
    </div>
  );
};

export default Header;
