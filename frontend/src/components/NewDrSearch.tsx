import { FunctionComponent, useCallback } from "react";

export type NewDrSearchType = {
  className?: string;
};

const NewDrSearch: FunctionComponent<NewDrSearchType> = ({
  className = "",
}) => {
  const onNewDrSearchClick = useCallback(() => {
    // Please sync "New Dr" to the project
  }, []);

  return (
    <div
      className={`h-[182px] flex-1 relative min-w-[141px] cursor-pointer z-[2] text-left text-17xl text-white font-roboto ${className}`}
      // className={`h-[184px] flex-1 relative min-w-[141px] cursor-pointer z-[2] text-left text-17xl text-white font-roboto ${className}`}
      onClick={onNewDrSearchClick}
    >
      <div className="absolute h-[101.1%] w-[95.85%] top-[0%] right-[4.15%] bottom-[-1.1%] left-[0%] rounded-3xs bg-darkslategray border-black border-[1px] border-solid box-border" />
      <div className="absolute h-[45.6%] w-[95.85%] top-[30.44%] left-[4.15%] leading-[41.12px] font-medium inline-block z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
      {/* <div className="absolute h-[101.09%] w-[95.85%] top-[0%] right-[4.15%] bottom-[-1.09%] left-[0%] rounded-3xs bg-darkslategray border-black border-[1px] border-solid box-border" />
      <div className="absolute h-[45.11%] w-[95.85%] top-[30.43%] left-[4.15%] leading-[41.12px] font-medium inline-block z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]"></div> */}
        <p className="m-0">New Dr</p>
        <p className="m-0">(Search)</p>
      </div>
    </div>
  );
};

export default NewDrSearch;
