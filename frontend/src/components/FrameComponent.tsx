import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NewRx from "./NewRx";
import NewPtSearch from "./NewPtSearch";
import NewDrSearch from "./NewDrSearch";
import RxItemSearch from "./RxItemSearch";
import Search from "./Search";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNewRxContainerClick = useCallback(() => {
    navigate("/new-rx");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-17xl text-white font-roboto ${className}`}
    >
      <header className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-left text-45xl text-white font-hind-siliguri mq750:flex-wrap">
        <div className="w-[215px] flex flex-col items-start justify-start pt-[146px] px-0 pb-0 box-border">
          <h2 className="m-0 self-stretch h-[62px] relative text-inherit leading-[41.12px] font-medium font-[inherit] inline-block shrink-0 whitespace-nowrap z-[1]">
            New Pt
          </h2>
        </div>
        <img
          className="w-[419px] relative max-h-full overflow-hidden shrink-0 max-w-full z-[1]"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
      </header>
      <div className="self-stretch flex flex-col items-start justify-start gap-[52px] max-w-full mq750:gap-[26px]">
        <div className="self-stretch flex flex-row items-start justify-start pt-[1.9px] px-[94px] pb-0 box-border relative [row-gap:20px] max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[47px] mq750:pr-[47px] mq750:box-border mq1125:flex-wrap">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden"
            loading="lazy"
            alt=""
            src="/nav.svg"
          />
          <NewRx
            newRx="Home"
            propTextDecoration="none"
            onNewRxContainerClick={onHomeClick}
          />
          <NewRx newRx="New Rx" onNewRxContainerClick={onNewRxContainerClick} />
          <NewPtSearch />
          <div className="w-[415px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq450:flex-wrap">
            <NewDrSearch />
            <RxItemSearch />
          </div>
        </div>
        <div className="w-[682px] flex flex-row items-start justify-start py-0 px-8 box-border max-w-full mq750:w-16">
          <div className="flex-1 flex flex-row items-end justify-start gap-[57px] max-w-full mq750:hidden mq750:gap-7">
            <textarea
              className="border-black border-[0px] border-solid bg-white h-[86px] w-auto [outline:none] flex-1 rounded-3xs box-border flex flex-row items-start justify-start py-[22px] px-[3px] font-roboto font-medium text-21xl text-gray max-w-full"
              placeholder="Search..."
              rows={4}
              cols={19}
            />
            <Search />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
