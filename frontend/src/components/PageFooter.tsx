import { FunctionComponent, useCallback } from "react";
import NewRx from "./NewRx";
import NewPtSearch from "./NewPtSearch";
import NewDrSearch from "./NewDrSearch";
import RxItemSearch from "./RxItemSearch";

export type PageFooterType = {
  className?: string;
};

const PageFooter: FunctionComponent<PageFooterType> = ({ className = "" }) => {
  const onHomeClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  return (
    <div
      className={`absolute top-[10px] left-[0px] w-full flex flex-col items-start justify-start max-w-full text-left text-17xl text-white font-roboto ${className}`}
    >
      <header className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-left text-45xl text-white font-hind-siliguri">
        <div className="w-[367px] flex flex-col items-start justify-start pt-[147px] px-0 pb-0 box-border max-w-full">
          <h2 className="m-0 self-stretch h-[62px] relative text-inherit leading-[41.12px] font-medium font-[inherit] inline-block shrink-0 whitespace-nowrap z-[1]">
            Add Patient
          </h2>
        </div>
        <img
          className="h-[212px] w-[419px] relative overflow-hidden shrink-0 max-w-full z-[4]"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
      </header>
      <div className="ml-[-3px] self-stretch flex flex-row items-start justify-start pt-0.5 px-[94px] pb-0 box-border relative [row-gap:20px] max-w-full z-[3] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[47px] mq750:pr-[47px] mq750:box-border mq1125:flex-wrap">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden"
          loading="lazy"
          alt=""
          src="/nav.svg"
        />
        <textarea
          className="border-black border-[1px] border-solid bg-darkslategray h-[184px] w-[206px] [outline:none] rounded-3xs box-border flex flex-row items-start justify-start py-[60px] px-6 font-roboto font-medium text-17xl text-white cursor-pointer z-[1]"
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

export default PageFooter;
