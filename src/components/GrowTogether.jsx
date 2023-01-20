import React from "react";
import imgTopDesktop from "../assets/bg-section-top-desktop-1.svg";
import imgTopMobile from "../assets/bg-section-top-mobile-1.svg";
import imgBottomDesktop from "../assets/bg-section-bottom-desktop-1.svg";
import imgBottomMobile from "../assets/bg-section-bottom-mobile-1.svg";
import imgGrowTogether from "../assets/illustration-grow-together.svg";

const GrowTogether = () => {
  return (
    <>
      <section className="grow_together relative hidden lg:block">
        <div>
          <img
            className="w-full h-[421px]"
            src={imgTopDesktop}
            alt="section_image"
          />
          <img
            className="w-full h-[421px]"
            src={imgBottomDesktop}
            alt="section_image"
          />
        </div>
        <div className="flex w-[1200px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="text basis-1/2 flex flex-col justify-center">
            <h2 className="text-[40px] mb-[26px]">Grow together</h2>
            <p className="text-veryDarkCyan">
              Generate meaningful discussions with your audience and build a
              <br /> strong, loyal community. Think of the insightful
              conversations you <br /> miss out on with a feedback form.
            </p>
          </div>
          <div className="image basis-1/2">
            <img
              className="w-[560px]"
              src={imgGrowTogether}
              alt="grow_together"
            />
          </div>
        </div>
      </section>
      <section className="grow_together relative lg:hidden mt-[-100px]">
        <div>
          <img
            className="w-full h-[421px]"
            src={imgTopMobile}
            alt="section_image"
          />
          <img
            className="w-full h-[421px]"
            src={imgBottomMobile}
            alt="section_image"
          />
        </div>
        <div className="flex flex-col-reverse absolute top-[50%] translate-y-[-50%]">
          <div className="text justify-center text-center borde-6">
            <h2 className="text-[20px] mt-[40px]">Grow together</h2>
            <p className="text-veryDarkCyan mt-[26px] text-[14px] px-4">
              Generate meaningful discussions with your audience and build a
               strong, loyal community. Think of the insightful
              conversations you  miss out on with a feedback form.
            </p>
          </div>
          <div className="image mx-auto">
            <img
              className="w-[280px]"
              src={imgGrowTogether}
              alt="grow_together"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default GrowTogether;
