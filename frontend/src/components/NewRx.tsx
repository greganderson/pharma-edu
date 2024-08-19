import { FunctionComponent, useCallback } from "react";

export type NewRxType = {
  className?: string;
  newRx?: string;
  /** Action props */
  onNewRxContainerClick?: () => void;
};

const NewRx: FunctionComponent<NewRxType> = ({
  className = "",
  newRx = "New Rx",  // Default value for newRx
  onNewRxContainerClick,
}) => {
  const handleClick = useCallback(() => {
    if (onNewRxContainerClick) {
      onNewRxContainerClick();
    } else {
      // Please sync "New Rx" to the project
    }
  }, [onNewRxContainerClick]);

  return (
    <div
      className={`w-[206px] shrink-0 flex flex-row items-start justify-start pt-20 px-6 pb-[60px] box-border relative cursor-pointer z-[1] text-left text-17xl text-white font-roboto ${className}`}
      onClick={handleClick}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[-2px] bottom-[-2px] left-[0px] rounded-3xs bg-darkslategray border-black border-[1px] border-solid box-border" />
      <div className="w-[153px] relative leading-[44px] font-medium inline-block shrink-0 z-[1] mq450:text-3xl mq450:leading-[25px] mq750:text-10xl mq750:leading-[33px]">
        {newRx}
      </div>
    </div>
  );
};

export default NewRx;
