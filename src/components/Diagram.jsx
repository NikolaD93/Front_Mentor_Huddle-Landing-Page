import React from "react";
import communities from "../assets/icon-communities.svg";
import messages from "../assets/icon-messages.svg";
import CountUp from "react-countup";

const Diagram = () => {
  return (
    <section className="diagram mx-[108px] lg:mx-[280px] mt-[120px] flex flex-col items-center lg:flex-row lg:justify-between">
      <div className="communities">
        <img
          className="w-[35px] lg:w-[56px]"
          src={communities}
          alt="communities"
        />
        <span className="text-[60px] lg:text-[96px] font-[700]">
          <CountUp
            duration={1.3}
            decimals={1}
            decimal="."
            start={0}
            end={1.4}
            enableScrollSpy={true}
            scrollSpyDelay={0}
          />
          k+
        </span>
        <p className="text-[15px] lg:text-[24px] text-[#808E9A] capitalize">
          Communities formed
        </p>
      </div>
      <div className="messages mt-[88px] lg:mt-0">
        <img
          className="w-[35px] lg:w-[56px] ml-2 lg:ml-0"
          src={messages}
          alt="communities"
        />
        <span className="text-[60px] lg:text-[96px] font-[700]">
          <CountUp
            duration={1.3}
            decimals={1}
            decimal="."
            start={0}
            end={2.7}
            enableScrollSpy={true}
            scrollSpyDelay={0}
          />
          m+
        </span>
        <p className="text-[15px] lg:text-[24px] text-[#808E9A] capitalize">
          Communities formed
        </p>
      </div>
    </section>
  );
};

export default Diagram;
