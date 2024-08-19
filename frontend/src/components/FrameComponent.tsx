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
    // Please sync "New Rx" to the project
  }, []);

  return (
    <section
      className={`absolute top-[156px] left-[0px] w-full h-[380px] flex flex-col items-start justify-start gap-11 max-w-full text-left text-45xl text-white font-hind-siliguri mq675:gap-[22px] ${className}`}
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
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-0.5 max-w-full">
        <h2 className="m-0 w-[264px] h-[62px] relative text-inherit leading-[41.12px] font-medium font-[inherit] inline-block shrink-0 z-[1] mq450:text-19xl mq450:leading-[25px] mq750:text-32xl mq750:leading-[33px]">
          New Dr
        </h2>
        <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 px-1 box-border max-w-full text-17xl font-roboto">
          <div className="self-stretch flex-1 overflow-x-auto flex flex-row items-start justify-start pt-0.5 px-[94px] pb-0 box-border relative max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq675:pl-[47px] mq675:pr-[47px] mq675:box-border">
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[-4px] left-[0px] max-w-full overflow-hidden shrink-0"
              alt=""
              src="/nav.svg"
            />
            <textarea
              className="border-black border-[1px] border-solid bg-darkslategray h-[184px] w-[206px] [outline:none] rounded-3xs box-border shrink-0 flex flex-row items-start justify-start py-[60px] px-6 font-roboto font-medium text-17xl text-white cursor-pointer z-[1]"
              placeholder="Home"
              rows={9}
              cols={10}
              onClick={onHomeClick}
            />
            <NewRx newRx="Home" onNewRxContainerClick={onHomeClick} />
            <NewRx newRx="New Rx" onNewRxContainerClick={onNewRxContainerClick} />
            <NewPtSearch />
            <div className="w-[415px] shrink-0 flex flex-row items-start justify-start">
              <NewDrSearch />
              <RxItemSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[696px] flex flex-row items-start justify-start py-0 px-[39px] box-border max-w-full text-17xl font-roboto mq675:w-[78px]">
        <div className="flex-1 flex flex-row items-end justify-start gap-[57px] max-w-full mq675:hidden mq675:gap-7">
          <textarea
            className="border-black border-[0px] border-solid bg-white h-[86px] w-auto [outline:none] flex-1 rounded-3xs box-border flex flex-row items-start justify-start py-[22px] px-[3px] font-roboto font-medium text-21xl text-gray max-w-full"
            placeholder="Search..."
            rows={4}
            cols={19}
          />
          <Search />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
