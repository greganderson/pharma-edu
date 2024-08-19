import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NewRx from "./NewRx";
import NewPtSearch from "./NewPtSearch";
import NewDrSearch from "./NewDrSearch";
import RxItemSearch from "./RxItemSearch";

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

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-[5px] pr-0 box-border max-w-full text-left text-17xl text-white font-roboto ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start pt-0.5 px-[94px] pb-0 box-border relative [row-gap:20px] max-w-full z-[1] lg:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[47px] mq750:pr-[47px] mq750:box-border">
        <img
          className="h-[382px] w-[1240px] absolute !m-[0] top-[-198px] left-[-5px]"
          alt=""
          src="/navheader.svg"
        />
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden"
          loading="lazy"
          alt=""
          src="/nav.svg"
        />
        <textarea
          className="border-black border-[1px] border-solid bg-darkslategray h-[182px] w-[206px] [outline:none] rounded-3xs box-border flex flex-row items-start justify-start pt-[59px] px-6 pb-[59.4px] font-roboto font-medium text-17xl text-white cursor-pointer z-[1]"
          placeholder="Home"
          rows={9}
          cols={10}
          onClick={onHomeClick}
        />
        <NewRx />
        <NewPtSearch />
        <div className="w-[415px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq450:flex-wrap">
          <NewDrSearch />
          <RxItemSearch />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
