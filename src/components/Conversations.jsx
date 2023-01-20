import React from "react";
import imgConversation from "../assets/illustration-flowing-conversation.svg";

const Conversations = () => {
  return (
    <section className="flex flex-col items-center lg:mx-[120px] my-[100px] lg:mt-[120px] lg:flex-row lg:justify-between">
      <div className="image mb-[80px] lg:mb-0 lg:basis-[45%]">
        <img className="w-[280px] lg:w-[530px]" src={imgConversation} alt="conversation_image" />
      </div>
      <div className="text lg:basis-[45%] text-center lg:text-left flex flex-col justify-center">
        <h2 className="text-[20px] lg:text-[40px] mb-[26px]">Flowing Conversations</h2>
        <p className="text-veryDarkCyan text-base hidden lg:block">
          You wouldn't paginate a conversation in real life, so why do it
          online? <br /> Our threads have just-in-time loading for a more natural flow.
        </p>
        <p className="text-veryDarkCyan text-[14px] lg:hidden px-4">
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
    </section>
  );
};

export default Conversations;
