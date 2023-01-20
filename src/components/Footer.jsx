import React from "react";
import logo from "../assets/logo-white.svg";
import phone from "../assets/icon-phone.svg";
import email from "../assets/icon-email.svg";

const Footer = () => {
  

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <>
      <footer className="flex flex-col-reverse px-10 justify-between lg:flex-row lg:px-[120px]  py-14 lg:py-32 text-white bg-veryDarkCyan">
        <div className="contact mt-[100px] lg:mt-0 basis-1/2">
          <img
            className="h-[32px] w-[196px] lg:h-[38px] lg:w-[240px] cursor-pointer transition-all duration-300 hover:scale-110"
            src={logo}
            alt="huddle_logo"
          />
          <p className="py-10 text-[14px] leading-6 lg:text-base">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Fugiat dolorem mollitia officia <br /> enim tenetur amet. Pariatur
            totam eligendi.
          </p>
          <div className="space-y-4">
            <div className="space-x-4 text-[14px] lg:text-base">
              <img className="inline" src={phone} alt="phone" />
              <span>Phone: +1-543-123-4567</span>
            </div>
            <div className="space-x-4 text-[14px] lg:text-base">
              <img className="inline" src={email} alt="email" />
              <span>example@huddle.com</span>
            </div>
          </div>
          <div className="social-icons mt-[80px] space-x-4 text-[24px] lg:text-[2rem]">
            <a className="transition-all duration-300 hover:text-pink" href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a
              className="transition-all duration-300 hover:text-lightRed"
              href="#"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a
              className="transition-all duration-300 hover:text-blue-400"
              href="#"
            >
              <ion-icon name="logo-pinterest"></ion-icon>
            </a>
          </div>
        </div>
        <div className="newsletter basis-1/2">
          <h4 className="text-[20px] lg:text-[24px] uppercase">Newsletter</h4>
          <p className="py-10 hidden lg:block">To receieve tips on how to grow your community, sign <br /> up to our weekly newsletter. We’ll never send you <br /> spam or pass on your email address.</p>
          <p className="py-10 text-[14px] lg:hidden leading-6">To receieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address.</p>
          <form onSubmit={handleSubmit} className="lg:space-x-14">
            <input className="w-[320px] p-3 lg:p-4 border-0 outline-none text-black transition-all duration-300 focus:outline-lightRed rounded-md" type="email" />
            <button className="bg-pink mt-4 lg:mt-0 p-3 lg:p-4 rounded-md w-[160px] transition-all duration-300 hover:bg-lightPink">Subscribe</button>
          </form>
          <p className="mt-24">Made by <a className="underline text-pink transition-all duration-300 hover:text-lightPink" href="https://www.youtube.com/channel/UCcHSX6C51HNqchQMjaHs3_A">Nikola Dojcinovic</a></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
