import { FunctionComponent, useCallback } from "react";

export type AddNewRxType = {
  className?: string;
};

const AddNewRx: FunctionComponent<AddNewRxType> = ({ className = "" }) => {
  const onAddNewRxClick = useCallback(() => {
    // Please sync "New Rx" to the project
  }, []);

  return (
    <div
      className={`mr-[-105px] w-[367px] h-[86px] relative max-w-full cursor-pointer text-left text-17xl text-gray font-roboto ${className}`}
      onClick={onAddNewRxClick}
    >
      <img
        className="absolute h-full w-[72.59%] top-[0px] right-[27.41%] bottom-[0px] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/add-new-rx.svg"
      />
      <div className="absolute h-[48.84%] w-[64.58%] top-[25.58%] left-[7.9%] leading-[42px] font-medium inline-block z-[1] mq450:text-3xl mq450:leading-[25px] mq750:text-10xl mq750:leading-[33px]">
        Add New Rx
      </div>
    </div>
  );
};

export default AddNewRx;
