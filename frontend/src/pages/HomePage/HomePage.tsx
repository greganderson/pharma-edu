import React from "react";
import DixieTechLogo from "../../assets/DixieTechLogo.png";

const HomePage: FunctionComponent = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start pt-[136px] px-0 pb-[471px] box-border gap-5 leading-[normal] tracking-[normal] text-left text-[64px] text-white font-hind-siliguri">
      <div className="w-[380px] flex flex-row items-start justify-start py-0 px-[13px] box-border max-w-full">
        <h2 className="m-0 flex-1 relative text-inherit leading-[42px] font-medium font-[inherit] inline-block max-w-full z-[1] mq450:text-[38px] mq450:leading-[25px] mq1050:text-[51px] mq1050:leading-[33px]">
          Home Page
        </h2>
      </div>
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <FrameComponent />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-1.5 box-border relative max-w-full">
          <div className="h-[1088px] w-[1236px] absolute !m-[0] right-[1px] bottom-[-471px] rounded-3xs bg-darkslategray border-black border-[1px] border-solid box-border">
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-darkslategray border-black border-[1px] border-solid box-border w-full h-full hidden" />
          </div>
          <img
            className="h-[617px] flex-1 relative max-w-full overflow-hidden z-[1]"
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
