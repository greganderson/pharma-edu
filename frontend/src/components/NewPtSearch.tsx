import { FunctionComponent, useCallback } from "react";

export type NewPtSearchType = {
  className?: string;
};

const NewPtSearch: FunctionComponent<NewPtSearchType> = ({
  className = "",
}) => {
  const onNewPtSearchClick = useCallback(() => {
    // Please sync "New Patient" to the project
  }, []);

  return (
    <div
      className={`w-[206px] flex flex-row items-start justify-start py-[46px] px-[26px] box-border relative cursor-pointer z-[1] text-left text-17xl text-white font-roboto ${className}`}
      onClick={onNewPtSearchClick}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[-2px] bottom-[-2px] left-[0px] rounded-3xs bg-darkslategray border-black border-[1px] border-solid box-border" />
      <div className="flex-1 relative leading-[41.12px] font-medium z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
        <p className="m-0">New Pt</p>
        <p className="m-0">(Search)</p>
      </div>
    </div>
  );
};

export default NewPtSearch;
