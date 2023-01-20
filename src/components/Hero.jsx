import React from "react";
import CtaButton from "../common/CtaButton";
import HeroImg from "../assets/screen-mockups.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <main className="px-[40px] pt-[112px] lg:px-[212px] lg:pt-[225px] flex flex-col items-center text-center">
      <motion.h1
        animate={{ x: [0, 150, 0], opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.5 }}
        className="hidden lg:block text-[48px]"
      >
        Build The Community Your Fans Will Love
      </motion.h1>
      <h1 className="lg:hidden text-[24px]">
        Build The Community <br /> Your Fans Will Love
      </h1>
      <p className="hidden lg:block mt-[26px]">
        Huddle re-imagines the way we build communities. You have a <br />
        voice, but so does your audience. Create connections with your <br />
        users as you engage in genuine discussion.
      </p>
      <p className="text-[14px] lg:hidden mt-[26px]">
        Huddle re-imagines the way we build <br /> communities. You have a
        voice, but so does <br /> your audience. Create connections with your
        <br />
        users as you engage in genuine discussion.
      </p>
      <CtaButton />
      <img
        className="mt-[104px] lg:mt-[120px]"
        src={HeroImg}
        alt="screen_mockups"
      />
    </main>
  );
};

export default Hero;
