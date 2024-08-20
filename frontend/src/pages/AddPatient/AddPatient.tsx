import { FunctionComponent } from "react";
import PatientDetailsContainer from "../components/PatientDetailsContainer";
import Main from "../components/Main";
import PageFooter from "../components/PageFooter";

const AddPatient: FunctionComponent = () => {
  return (
    <div className="w-full h-[1470px] relative bg-white border-black border-[1px] border-solid box-border overflow-hidden leading-[normal] tracking-[normal] mq1050:h-auto mq1050:min-h-[1470]">
      <img
        className="absolute top-[0px] left-[-3px] w-[1236px] h-[408px]"
        alt=""
        src="/navheader.svg"
      />
      <main className="absolute top-[408px] left-[0px] rounded-3xs bg-white border-black border-[1px] border-solid box-border w-full flex flex-row items-start justify-start pt-0 px-0 pb-[444px] max-w-full [row-gap:20px] text-left text-21xl text-gray font-roboto mq1050:flex-wrap">
        <div className="h-[1064px] w-[1235px] relative rounded-3xs bg-white border-black border-[1px] border-solid box-border hidden max-w-full" />
        <PatientDetailsContainer />
        <div className="flex-1 flex flex-col items-end justify-start gap-[39px] min-w-[400px] max-w-full mq450:min-w-full mq750:gap-[19px] mq1050:flex-1">
          <div className="self-stretch rounded-3xs bg-white border-black border-[1px] border-solid box-border flex flex-row items-start justify-center pt-[23px] px-5 pb-6 max-w-full z-[2]">
            <div className="h-[94px] w-[617px] relative rounded-3xs bg-white border-black border-[1px] border-solid box-border hidden max-w-full" />
            <div className="w-[311px] relative leading-[41.12px] font-medium inline-block shrink-0 z-[3] mq450:text-5xl mq450:leading-[25px] mq1050:text-13xl mq1050:leading-[33px]">
              Insurance Info
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[18px] pr-[15px] box-border max-w-full">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[47.6px] max-w-full mq750:gap-6">
              <div className="w-[254.4px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border min-w-[254.4px] mq750:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start gap-10 mq450:gap-5">
                  <div className="w-[73.8px] relative leading-[42px] font-medium inline-block z-[1] mq450:text-5xl mq450:leading-[25px] mq1050:text-13xl mq1050:leading-[33px]">
                    Bin
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[37px] mq450:gap-[18px]">
                    <div className="w-[99.8px] flex flex-row items-start justify-start py-0 px-1 box-border">
                      <div className="flex-1 relative leading-[42px] font-medium z-[1] mq450:text-5xl mq450:leading-[25px] mq1050:text-13xl mq1050:leading-[33px]">
                        PCN
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[33.5px] mq450:gap-[17px]">
                      <div className="self-stretch relative leading-[42px] font-medium z-[1] mq450:text-5xl mq450:leading-[25px] mq1050:text-13xl mq1050:leading-[33px]">
                        Person Code
                      </div>
                      <div className="w-[87.8px] flex flex-row items-start justify-start py-0 px-1 box-border">
                        <div className="flex-1 relative leading-[42px] font-medium z-[1] mq450:text-5xl mq450:leading-[25px] mq1050:text-13xl mq1050:leading-[33px]">
                          ID #
                        </div>
                      </div>
                      <div className="w-[163px] flex flex-row items-start justify-start py-0 px-1 box-border">
                        <div className="flex-1 relative leading-[36px] font-medium z-[1] mq450:text-5xl mq450:leading-[22px] mq1050:text-13xl mq1050:leading-[29px]">
                          Group #
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-3.5 min-w-[182px]">
                <div className="flex flex-row items-start justify-start py-0 pl-px pr-[3px]">
                  <img
                    className="h-[66px] w-[276.3px] relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/bin.svg"
                  />
                </div>
                <img
                  className="self-stretch h-[66px] relative max-w-full overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/pcn.svg"
                />
                <div className="self-stretch h-[142px] flex flex-row items-start justify-start py-0 pl-[3px] pr-0 box-border">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-2.5">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
                      loading="lazy"
                      alt=""
                      src="/person-code.svg"
                    />
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
                      loading="lazy"
                      alt=""
                      src="/id.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 pl-px pr-0.5">
                  <img
                    className="h-[66px] w-[277px] relative z-[1]"
                    loading="lazy"
                    alt=""
                    src="/group.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Main />
      <PageFooter />
    </div>
  );
};

export default AddPatient;
