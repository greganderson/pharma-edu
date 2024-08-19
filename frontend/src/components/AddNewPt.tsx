import { FunctionComponent, useCallback } from "react";

export type AddNewPtType = {
  className?: string;
};

const AddNewPt: FunctionComponent<AddNewPtType> = ({ className = "" }) => {
  const onAddNewPtClick = useCallback(() => {
    // Please sync "Add Patient" to the project
  }, []);

  return (
    <div
      className={`mr-[-99px] w-[381px] h-[86px] relative max-w-full cursor-pointer text-left text-17xl text-gray font-roboto ${className}`}
      onClick={onAddNewPtClick}
    >
      <img
        className="absolute h-full w-[68.77%] top-[0px] right-[25.98%] bottom-[0px] left-[5.25%] rounded-3xs max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/add-new-pt.svg"
      />
      <div className="absolute h-[48.84%] w-[62.2%] top-[25.58%] left-[11.81%] leading-[42px] font-medium inline-block z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
        Add New Pt
      </div>
    </div>
  );
};

export default AddNewPt;
