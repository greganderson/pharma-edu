import { FunctionComponent } from "react";
import EditInfo from "./EditInfo";
import SaveInfo from "./SaveInfo";

export type MainType = {
  className?: string;
};

const Main: FunctionComponent<MainType> = ({ className = "" }) => {
  return (
    <footer
      className={`absolute top-[1026px] left-[0px] w-full h-[444px] max-w-full text-left text-17xl text-gray font-roboto ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white border-black border-[1px] border-solid box-border w-full flex flex-row items-start justify-end pt-0 px-[219px] pb-[356px] max-w-full h-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[109px] mq750:pr-[109px] mq750:box-border">
        <div className="h-[446px] w-[1238px] relative rounded-3xs bg-white border-black border-[1px] border-solid box-border hidden max-w-full" />
        <EditInfo />
      </div>
      <SaveInfo />
    </footer>
  );
};

export default Main;
