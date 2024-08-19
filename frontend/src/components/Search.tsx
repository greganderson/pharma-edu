import { FunctionComponent, useCallback } from "react";

export type SearchType = {
  className?: string;
};

const Search: FunctionComponent<SearchType> = ({ className = "" }) => {
  const onSearchContainerClick = useCallback(() => {
    // Please sync the "Profile" (Doctor/Patient) to the project
  }, []);

  return (
    <div
      className={`w-[186px] flex flex-row items-start justify-start pt-[25.5px] pb-[14.5px] pl-[23px] pr-[22px] box-border relative cursor-pointer text-left text-17xl text-white font-roboto ${className}`}
      onClick={onSearchContainerClick}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[-2px] bottom-[-2px] left-[0px] rounded-3xs bg-darkslategray border-black border-[1px] border-solid box-border" />
      <div className="flex-1 relative leading-[42px] font-medium z-[1]">
        Search
      </div>
    </div>
  );
};

export default Search;
