import { FunctionComponent, useCallback } from "react";

export type NewRxType = {
  className?: string;
};

const NewRx: FunctionComponent<NewRxType> = ({ className = "" }) => {
  const onNewRxContainerClick = useCallback(() => {
    // Please sync "New Rx" to the project
  }, []);

  return (
    <div
      className={`w-[206px] flex flex-row items-start justify-start pt-[79.1px] px-6 pb-[59.4px] box-border relative cursor-pointer z-[1] text-left text-17xl text-white font-roboto ${className}`}
      // className={`w-[206px] flex flex-row items-start justify-start pt-20 px-6 pb-[60px] box-border relative cursor-pointer z-[1] text-left text-17xl text-white font-roboto ${className}`}
      onClick={onNewRxContainerClick}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[-2px] bottom-[-2px] left-[0px] rounded-3xs bg-darkslategray border-black border-[1px] border-solid box-border" />
      <div className="w-[153px] relative leading-[43.5px] font-medium inline-block shrink-0 z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
      {/* <div className="w-[153px] relative leading-[44px] font-medium inline-block shrink-0 z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]"> */}
        New Rx
      </div>
    </div>
  );
};

export default NewRx;
