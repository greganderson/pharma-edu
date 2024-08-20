import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";

const NewPatient: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white border-black border-[1px] border-solid box-border overflow-hidden flex flex-col items-end justify-start pt-2 px-0 pb-0 gap-[844px] leading-[normal] tracking-[normal] mq450:gap-[211px] mq750:gap-[422px]">
      <img
        className="w-full h-[402px] absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden shrink-0"
        alt=""
        src="/navheader.svg"
      />
      <FrameComponent />
      <AddNewPt />
    </div>
  );
};

export default NewPatient;
