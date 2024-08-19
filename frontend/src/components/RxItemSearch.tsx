import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type RxItemSearchType = {
  className?: string;
};

const RxItemSearch: FunctionComponent<RxItemSearchType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onRxItemSearchClick = useCallback(() => {
    // Default navigation or action for Rx Item search
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start pt-[49px] pb-[52px] pl-px pr-0 box-border relative min-w-[136px] cursor-pointer z-[2] ml-[-11px] text-left text-17xl text-white font-roboto mq450:ml-0 ${className}`}
      onClick={onRxItemSearchClick}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] bottom-[-2px] left-[0px] rounded-3xs bg-darkslategray border-black border-[1px] border-solid box-border" />
      <div className="flex-1 relative leading-[41.12px] font-medium z-[1] mq450:text-3xl mq450:leading-[25px] mq750:text-10xl mq750:leading-[33px]">
        <p className="m-0">Rx Item</p>
        <p className="m-0">(Search)</p>
      </div>
    </div>
  );
};

export default RxItemSearch;
