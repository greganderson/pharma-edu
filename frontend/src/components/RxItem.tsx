import { FunctionComponent, useCallback } from "react";
import NewRx from "./NewRx";
import NewPtSearch from "./NewPtSearch";
import NewDrSearch from "./NewDrSearch";
import RxItemSearch from "./RxItemSearch";
import Search from "./Search";
import AddNewRx from "./AddNewRx";

export type RxItemType = {
  className?: string;
};

const RxItem: FunctionComponent<RxItemType> = ({ className = "" }) => {
  const onHomeContainerClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  const onNewRxContainerClick = useCallback(() => {
    // Please sync "New Rx" to the project
  }, []);

  return (
    <div
      className={`w-[1236px] bg-white border-black border-[1px] border-solid box-border max-w-full overflow-hidden flex flex-col items-end justify-start py-0 pl-2 pr-0 relative gap-[839px] leading-[normal] tracking-[normal] mq450:gap-[210px] mq675:gap-[419px] ${className}`}
    >
      <section className="self-stretch flex flex-col items-start justify-start gap-3 max-w-full">
        <header className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-left text-[64px] text-white font-hind-siliguri mq750:flex-wrap">
          <div className="w-[231px] flex flex-col items-start justify-start pt-[136px] px-0 pb-0 box-border">
            <h2 className="m-0 self-stretch h-[62px] relative text-inherit leading-[41.12px] font-medium font-[inherit] inline-block shrink-0 z-[1]">
              Rx Item
            </h2>
          </div>
          <img
            className="self-stretch w-[419px] relative max-h-full overflow-hidden shrink-0 min-h-[201px] max-w-full z-[1]"
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
        </header>
        <div className="w-[1153px] flex flex-row items-start justify-start py-0 px-9 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[53px] max-w-full mq675:gap-[26px]">
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <div className="w-[1033px] flex flex-row flex-wrap items-start justify-start max-w-full [row-gap:20px]">
                <NewRx
                  newRx="Home"
                  propPadding="83.9px 24px 67.1px"
                  propTextDecoration="none"
                  onNewRxContainerClick={onHomeContainerClick}
                />
                <NewRx
                  newRx="New Rx"
                  onNewRxContainerClick={onNewRxContainerClick}
                />
                <NewPtSearch />
                <div className="flex-1 flex flex-row items-start justify-start min-w-[270px] max-w-full [row-gap:20px] mq450:flex-wrap">
                  <NewDrSearch />
                  <RxItemSearch />
                </div>
              </div>
            </div>
            <div className="w-[618px] flex flex-row flex-wrap items-end justify-start gap-[57px] max-w-full mq675:gap-7">
              <textarea
                className="border-black border-[0px] border-solid bg-white h-[86px] w-auto [outline:none] flex-1 rounded-3xs box-border flex flex-row items-start justify-start py-[22px] px-[3px] font-roboto font-medium text-[40px] text-gray min-w-[244px] max-w-full"
                placeholder="Search..."
                rows={4}
                cols={19}
              />
              <Search />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[406px] absolute !m-[0] top-[0px] right-[0px] left-[0px]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full"
          alt=""
          src="/navheader.svg"
        />
        <img
          className="absolute top-[211px] left-[0px] w-[1236px] h-[184px] z-[1]"
          loading="lazy"
          alt=""
          src="/nav.svg"
        />
      </section>
      <AddNewRx />
    </div>
  );
};

export default RxItem;
