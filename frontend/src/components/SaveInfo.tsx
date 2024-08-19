import { FunctionComponent, useCallback } from "react";

export type SaveInfoType = {
  className?: string;
};

const SaveInfo: FunctionComponent<SaveInfoType> = ({ className = "" }) => {
  const onSaveInfoContainerClick = useCallback(() => {
    // Please sync "Patient Profile" to the project
  }, []);

  return (
    <div
      className={`w-[234px] h-[86px] cursor-pointer relative z-[1] text-left text-17xl text-gray font-roboto ${className}`}
      onClick={onSaveInfoContainerClick}
    >
      <img
        className="absolute h-full w-[88.33%] top-[0px] right-[3.12%] bottom-[0px] left-[8.55%] rounded-3xs max-w-full overflow-hidden max-h-full"
        loading="lazy"
        alt=""
        src="/save-info.svg"
      />
      <div className="absolute h-[51.16%] w-[75.56%] top-[24.42%] left-[16.67%] leading-[44px] font-medium inline-block z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
        Save Info
      </div>
    </div>
  );
};

export default SaveInfo;
