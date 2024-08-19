import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type NewDrSearchType = {
  className?: string;
};

const NewDrSearch: FunctionComponent<NewDrSearchType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onNewDrSearchClick = useCallback(() => {
    // If no specific action is defined, navigate to the home page
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`h-[184px] flex-1 relative min-w-[141px] cursor-pointer z-[3] text-left text-17xl text-white font-roboto ${className}`}
      onClick={onNewDrSearchClick}
    >
      <div className="absolute h-[101.14%] w-[95.85%] top-[0%] right-[4.15%] bottom-[-1.14%] left-[0%] rounded-3xs bg-darkslategray border-black border-[1px] border-solid box-border" />
      <div className="absolute h-[47.13%] w-[95.85%] top-[30.43%] left-[4.15%] leading-[41.12px] font-medium inline-block z-[1] mq450:text-3xl mq450:leading-[25px] mq750:text-10xl mq750:leading-[33px]">
        <p className="m-0">New Dr</p>
        <p className="m-0">(Search)</p>
      </div>
    </div>
  );
};

export default NewDrSearch;
