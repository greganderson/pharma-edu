import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type NewRx1Type = {
  className?: string;
  newRx?: string;

  /** Action props */
  onNewRxContainerClick?: () => void;
};

const NewRx1: FunctionComponent<NewRx1Type> = ({
  className = "",
  newRx = "New Rx",  // Default value for newRx
  onNewRxContainerClick,
}) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (onNewRxContainerClick) {
      onNewRxContainerClick();
    } else {
      navigate("/");
    }
  }, [onNewRxContainerClick, navigate]);

  return (
    <div
      className={`w-[206px] flex flex-row items-start justify-start pt-[76.6px] px-6 pb-[57.4px] box-border relative cursor-pointer z-[1] text-left text-17xl text-white font-roboto ${className}`}
      onClick={handleClick}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[-2px] bottom-[-2px] left-[0px] rounded-3xs bg-darkslategray border-black border-[1px] border-solid box-border" />
      <div className="w-[153px] relative leading-[42.1px] font-medium inline-block shrink-0 z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
        {newRx}
      </div>
    </div>
  );
};

export default NewRx1;
