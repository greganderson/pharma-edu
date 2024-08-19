import { FunctionComponent } from "react";
import AddNewDr from "../components/AddNewDr";
import FrameComponent from "../components/FrameComponent";

const NewDr: FunctionComponent = () => {
  return (
    <div className="w-full h-[1470px] relative bg-white border-black border-[1px] border-solid box-border overflow-hidden leading-[normal] tracking-[normal]">
      <AddNewDr />
      <section className="absolute top-[0px] left-[0px] w-[1236px] h-[406px]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full"
          alt=""
          src="/navheader.svg"
        />
        <img
          className="absolute top-[10px] left-[817px] w-[419px] h-[212px] overflow-hidden z-[3]"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
      </section>
      <FrameComponent />
    </div>
  );
};

export default NewDr;
