import { FunctionComponent, useCallback } from "react";

export type AddNewDrType = {
  className?: string;
};

const AddNewDr: FunctionComponent<AddNewDrType> = ({ className = "" }) => {
  const onAddNewDrClick = useCallback(() => {
    // Please sync "Doctor Profile" to the project
  }, []);

  return (
    <div
      className={`absolute top-[1384px] left-[974px] w-[358px] h-[86px] cursor-pointer text-left text-17xl text-gray font-roboto ${className}`}
      onClick={onAddNewDrClick}
    >
      <img
        className="absolute h-full w-[72.57%] top-[0px] right-[27.43%] bottom-[0px] left-[0%] rounded-3xs max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/add-new-dr.svg"
      />
      <div className="absolute h-[48.84%] w-[60.11%] top-[25.58%] left-[6.93%] leading-[42px] font-medium inline-block z-[1] mq450:text-3xl mq450:leading-[25px] mq750:text-10xl mq750:leading-[33px]">
        Add New Dr
      </div>
    </div>
  );
};

export default AddNewDr;
