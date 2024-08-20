import { FunctionComponent } from "react";

export type EditInfoType = {
  className?: string;
};

const EditInfo: FunctionComponent<EditInfoType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[200px] flex flex-row items-start justify-start pt-[26.8px] px-6 pb-[17.2px] box-border relative whitespace-nowrap z-[2] text-left text-17xl text-gray font-roboto ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[-2px] bottom-[-2px] left-[0px] rounded-3xs bg-white border-black border-[1px] border-solid box-border" />
      <a className="[text-decoration:none] flex-1 relative leading-[42px] font-medium text-[inherit] z-[1]">
        Edit Info
      </a>
    </div>
  );
};

export default EditInfo;
