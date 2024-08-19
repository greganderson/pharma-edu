import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import NewRx1 from "./NewRx1";
import NewPtSearch from "./NewPtSearch";
import NewDrSearch from "./NewDrSearch";
import RxItemSearch from "./RxItemSearch";
import ContinueToLabel from "./ContinueToLabel";

export type NewRxType = {
  className?: string;
  newRx?: string;
  /** Style props */
  propPadding?: CSSProperties["padding"];
  propTextDecoration?: CSSProperties["textDecoration"];
  /** Action props */
  onNewRxContainerClick?: () => void;
};

const NewRx: FunctionComponent<NewRxType> = ({
  className = "",
  newRx = "New Rx",
  propPadding,
  propTextDecoration,
  onNewRxContainerClick,
}) => {
  const navigate = useNavigate();

  const newRxStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const newRx1Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const handleClick = useCallback(() => {
    if (onNewRxContainerClick) {
      onNewRxContainerClick();
    } else {
      navigate("/");
    }
  }, [onNewRxContainerClick, navigate]);

  return (
    <div
      className={`w-[1236px] bg-white border-black border-[1px] border-solid box-border max-w-full overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] ${className}`}
    >
      <header className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-1.5 box-border max-w-full gap-5 text-left text-[64px] text-white font-hind-siliguri mq1050:flex-wrap">
        <div className="w-[354px] flex flex-col items-start justify-start pt-[162.3px] px-0 pb-0 box-border max-w-full">
          <h2 className="m-0 self-stretch h-[20.6px] relative text-inherit leading-[41.12px] font-medium font-[inherit] inline-block shrink-0 z-[1] mq450:text-[38px] mq450:leading-[25px] mq1050:text-[51px] mq1050:leading-[33px]">
            New Rx
          </h2>
        </div>
        <img
          className="w-[419px] relative max-h-full overflow-hidden shrink-0 max-w-full z-[1]"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
      </header>
      <div className="self-stretch flex flex-row items-start justify-start pt-[1.9px] px-[94px] pb-0 box-border relative [row-gap:20px] max-w-full z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[47px] mq750:pr-[47px] mq750:box-border mq1125:flex-wrap">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden"
          loading="lazy"
          alt=""
          src="/nav.svg"
        />
        <NewRx1 newRx="Home" onNewRxContainerClick={handleClick} />
        <NewRx1 newRx="New Rx" onNewRxContainerClick={handleClick} />
        <NewPtSearch />
        <div className="w-[415px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq450:flex-wrap">
          <NewDrSearch />
          <RxItemSearch />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start min-h-[1070px] max-w-full">
        <main className="self-stretch rounded-3xs bg-white border-black border-[1px] border-solid box-border flex flex-row items-end justify-start py-0 pl-12 pr-0 gap-0.5 max-w-full z-[1] text-left text-17xl text-gray font-roboto mq1050:flex-wrap mq1050:pl-5 mq1050:pr-5 mq1050:pb-0.5 mq1050:box-border">
          <div className="self-stretch w-[1238px] relative rounded-3xs bg-white border-black border-[1px] border-solid box-border hidden max-w-full" />
          <div className="w-[559px] flex flex-col items-end justify-start gap-[31px] min-w-[559px] max-w-full mq750:gap-[15px] mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-[33px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start pt-[11.3px] px-0 pb-0 box-border max-w-[107%] shrink-0">
                <div className="self-stretch flex flex-col items-start justify-start gap-[34.3px] mq750:gap-[17px]">
                  <div className="w-[241px] relative leading-[42px] font-medium inline-block z-[3] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">{`Patient Name `}</div>
                  <div className="w-[95px] relative leading-[42px] font-medium inline-block z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                    DOB
                  </div>
                  <div className="self-stretch relative leading-[42px] font-medium z-[4] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                    Dr Name
                  </div>
                  <div className="w-[191px] relative leading-[42px] font-medium inline-block z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                    Date of Rx
                  </div>
                  <div className="w-[205px] flex flex-col items-start justify-start gap-[25px]">
                    <div className="self-stretch relative leading-[41.12px] font-medium z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                      <p className="m-0">Medication</p>
                    </div>
                    <div className="w-[195px] relative leading-[42px] font-medium inline-block z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                      Directions
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[363.3px] w-[285px] flex flex-col items-start justify-start gap-[18.2px] ml-[-318px] text-[40px]">
                <div className="self-stretch flex flex-row items-start justify-start pt-[12.4px] pb-[3.7px] pl-[34px] pr-7 relative">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[2px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
                    loading="lazy"
                    alt=""
                    src="/patient-name.svg"
                  />
                  <div className="flex-1 relative leading-[42px] font-medium z-[3] mq450:text-[24px] mq450:leading-[25px] mq1050:text-[32px] mq1050:leading-[33px]">
                    Last Name
                  </div>
                </div>
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                  loading="lazy"
                  alt=""
                  src="/dob.svg"
                />
                <div className="self-stretch flex flex-row items-start justify-start pt-[8.8px] px-[7px] pb-[13.3px] relative text-17xl">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[2]"
                    loading="lazy"
                    alt=""
                    src="/dr-name.svg"
                  />
                  <div className="relative leading-[36px] font-medium z-[3] mq450:text-3xl mq450:leading-[22px] mq1050:text-10xl mq1050:leading-[29px]">
                    Last/First/DEA
                  </div>
                </div>
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                  loading="lazy"
                  alt=""
                  src="/date-of-rx.svg"
                />
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                  loading="lazy"
                  alt=""
                  src="/medication.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[30px] pl-0 pr-[35px] box-border max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[21px] max-w-full">
                <img
                  className="self-stretch h-48 relative max-w-full overflow-hidden shrink-0 z-[2]"
                  loading="lazy"
                  alt=""
                  src="/directions.svg"
                />
                <div className="self-stretch flex flex-row items-start justify-start gap-[78px] max-w-full mq450:gap-[19px] mq750:flex-wrap mq750:gap-[39px]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[230px] max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[34.3px] mq450:gap-[17px]">
                      <div className="w-[304px] relative leading-[42px] font-medium inline-block z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                        Quantity Written
                      </div>
                      <div className="self-stretch relative leading-[42px] font-medium z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                        Quantity Dispensed
                      </div>
                      <div className="w-[119px] relative leading-[42px] font-medium inline-block z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                        Refills
                      </div>
                      <div className="w-[238px] relative leading-[36px] font-medium inline-block z-[2] mq450:text-3xl mq450:leading-[22px] mq1050:text-10xl mq1050:leading-[29px]">
                        Tech Initials
                      </div>
                    </div>
                  </div>
                  <div className="h-[287px] w-[92px] flex flex-col items-end justify-start gap-[21.5px]">
                    <div className="w-[89px] flex-1 flex flex-col items-start justify-start gap-[18.2px]">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full shrink-0 z-[2]"
                        loading="lazy"
                        alt=""
                        src="/quantity-written.svg"
                      />
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full shrink-0 z-[2]"
                        loading="lazy"
                        alt=""
                        src="/quantity-dispensed.svg"
                      />
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-start justify-end py-0 pl-0 pr-px">
                      <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[15.9px]">
                        <img
                          className="w-[88px] flex-1 relative max-h-full shrink-0 z-[2]"
                          loading="lazy"
                          alt=""
                          src="/refills.svg"
                        />
                        <img
                          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full shrink-0 z-[2]"
                          loading="lazy"
                          alt=""
                          src="/tech-initials.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ContinueToLabel />
          </div>
          <div className="flex-1 rounded-3xs bg-white border-black border-[1px] border-solid box-border flex flex-row items-start justify-center pt-[510px] pb-[512px] pl-[79px] pr-5 min-w-[406px] max-w-full z-[2] mq450:pl-5 mq450:box-border mq750:pt-[215px] mq750:pb-[216px] mq750:box-border mq750:min-w-full mq1125:pt-[331px] mq1125:pb-[333px] mq1125:box-border">
            <div className="h-[1070px] w-[627px] relative rounded-3xs bg-white border-black border-[1px] border-solid box-border hidden max-w-full" />
            <div className="w-[210px] relative leading-[42px] font-medium inline-block shrink-0 z-[3] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
              Scan Image
            </div>
          </div>
        </main>
        <div className="ml-[-7px] self-stretch relative max-w-full max-h-full mt-[-1471px] flex items-center justify-center">
          <img
            className="self-stretch overflow-hidden object-contain absolute left-[1px] top-[736px] w-full h-full [transform:scale(1.001)]"
            alt=""
            src="/navheader.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default NewRx;
