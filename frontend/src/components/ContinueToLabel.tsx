import { FunctionComponent } from "react";

export type ContinueToLabelType = {
  className?: string;
};

const ContinueToLabel: FunctionComponent<ContinueToLabelType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[309px] flex flex-row items-start justify-start pt-[0.4px] px-[5px] pb-[18.5px] box-border relative whitespace-nowrap z-[2] text-left text-17xl text-gray font-roboto ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[-2px] bottom-[-2px] left-[0px] rounded-3xs bg-white border-black border-[1px] border-solid box-border" />
      <div className="flex-1 relative leading-[18.1px] font-medium z-[1]">
        Continue to Label
      </div>
    </div>
  );
};

export default ContinueToLabel;
