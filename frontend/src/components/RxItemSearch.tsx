import { FunctionComponent, useCallback } from "react";

export type RxItemSearchType = {
  className?: string;
};

const RxItemSearch: FunctionComponent<RxItemSearchType> = ({
  className = "",
}) => {
  const onRxItemSearchClick = useCallback(() => {
    // Please sync "Rx Item" to the project
  }, []);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start pt-[48.5px] pb-[50.5px] pl-px pr-0 box-border relative min-w-[136px] cursor-pointer z-[1] ml-[-11px] text-left text-17xl text-white font-roboto mq450:ml-0 ${className}`}
      onClick={onRxItemSearchClick}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] bottom-[-2px] left-[0px] rounded-3xs bg-darkslategray border-black border-[1px] border-solid box-border" />
      <div className="flex-1 relative leading-[41.12px] font-medium z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
        <p className="m-0">Rx Item</p>
        <p className="m-0">(Search)</p>
      </div>
    </div>
  );
};

export default RxItemSearch;
