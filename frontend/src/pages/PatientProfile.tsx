import { FunctionComponent, useCallback } from "react";
import SaveInfo from "../components/SaveInfo";
import EditInfo from "../components/EditInfo";
import NewRx1 from "../components/NewRx1";
import NewPtSearch from "../components/NewPtSearch";
import NewDrSearch from "../components/NewDrSearch";
import RxItemSearch from "../components/RxItemSearch";
import NewRx from "./NewRx";

export type PatientProfileType = {
  className?: string;
};

const PatientProfile: FunctionComponent<PatientProfileType> = ({
  className = "",
}) => {
  const onHomeClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  return (
    <div
      className={`w-[1236px] h-[1470px] bg-white border-black border-[1px] border-solid box-border max-w-full overflow-hidden leading-[normal] tracking-[normal] text-left text-[64px] text-white font-hind-siliguri lg:h-auto lg:min-h-[1470] ${className}`}
    >
      <img
        className="absolute top-[0px] left-[1px] w-[1236px] h-[424px]"
        alt=""
        src="/navheader.svg"
      />
      <main className="absolute top-[232px] left-[0px] w-full flex flex-col items-end justify-start max-w-full">
        <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[120px] box-border relative min-h-[304px] max-w-full text-left text-17xl text-gray font-roboto">
          <SaveInfo />
          <div className="self-stretch flex flex-row items-start justify-start pt-0.5 px-[94px] pb-0 box-border relative [row-gap:20px] max-w-full z-[2] lg:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[47px] mq750:pr-[47px] mq750:box-border">
            <div className="w-full !m-[0] absolute right-[0px] bottom-[-120px] rounded-3xs bg-white border-black border-[1px] border-solid box-border flex flex-row items-start justify-between pt-[37px] pb-0 pl-[264px] pr-[225px] gap-5 max-w-full z-[1] lg:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[132px] mq750:pr-28 mq750:box-border">
              <div className="h-32 w-[1238px] relative rounded-3xs bg-white border-black border-[1px] border-solid box-border hidden max-w-full" />
              <div className="w-60 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
                <div className="self-stretch relative leading-[42px] font-medium z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                  Patient Name
                </div>
              </div>
              <EditInfo />
            </div>
            <img
              className="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden"
              alt=""
              src="/nav.svg"
            />
            <textarea
              className="border-black border-[1px] border-solid bg-darkslategray h-[182px] w-[206px] [outline:none] rounded-3xs box-border flex flex-row items-start justify-start pt-[59px] px-6 pb-[59.4px] font-roboto font-medium text-17xl text-white cursor-pointer z-[1]"
              placeholder="Home"
              rows={9}
              cols={10}
              onClick={onHomeClick}
            />
            <NewRx1 />
            <NewPtSearch />
            <div className="w-[415px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq450:flex-wrap">
              <NewDrSearch />
              <RxItemSearch />
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border [row-gap:20px] max-w-full text-left text-17xl text-gray font-roboto lg:flex-wrap">
          <div className="w-[610px] flex flex-col items-start justify-start gap-[29px] min-w-[610px] shrink-0 max-w-full lg:flex-1 mq750:min-w-full">
            <div className="self-stretch rounded-3xs bg-white border-black border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[33px] px-[97px] pb-[31px] max-w-full z-[3] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-12 mq750:pr-12 mq750:box-border">
              <div className="h-28 w-[612px] relative rounded-3xs bg-white border-black border-[1px] border-solid box-border hidden max-w-full" />
              <div className="w-[332px] relative leading-[42px] font-medium inline-block shrink-0 max-w-full z-[4] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                General Information
              </div>
            </div>
            <div className="w-[595px] flex flex-row items-start justify-start py-0 px-[18px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start gap-2.5 max-w-full mq750:flex-wrap">
                <div className="w-[231px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[231px] mq750:flex-1">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[35px]">
                    <div className="relative leading-[42px] font-medium mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                      Last Name
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[41.5px]">
                      <div className="w-48 relative leading-[42px] font-medium inline-block mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                        First Name
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[30.3px]">
                        <div className="relative leading-[42px] font-medium mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                          Date of Birth
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start gap-[33.2px]">
                          <div className="relative leading-[42px] font-medium mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                            Address
                          </div>
                          <div className="relative leading-[42px] font-medium mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                            Primary Dr
                          </div>
                          <div className="w-[152px] relative leading-[42px] font-medium inline-block mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                            Allergies
                          </div>
                          <div className="w-[177px] relative leading-[42px] font-medium inline-block mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                            Rx Printed
                          </div>
                          <div className="relative leading-[42px] font-medium mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                            Rx Completed
                          </div>
                          <div className="w-[141px] relative leading-[42px] font-medium inline-block mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                            Rx Sold
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[18.5px] min-w-[207px]">
                  <div className="self-stretch h-[356.4px] flex flex-col items-start justify-start gap-[15.2px]">
                    <img
                      className="self-stretch h-[56.8px] relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/last-name.svg"
                    />
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[19.6px]">
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                        loading="lazy"
                        alt=""
                        src="/first-name.svg"
                      />
                      <img
                        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full"
                        loading="lazy"
                        alt=""
                        src="/dob.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[4.4px]">
                      <img
                        className="h-[57.4px] flex-1 relative max-w-full overflow-hidden"
                        loading="lazy"
                        alt=""
                        src="/address.svg"
                      />
                    </div>
                    <img
                      className="self-stretch h-[57.4px] relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/primary-dr.svg"
                    />
                  </div>
                  <img
                    className="self-stretch h-[57.4px] relative max-w-full overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/allergies.svg"
                  />
                  <img
                    className="self-stretch h-[57px] relative max-w-full overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/rx-printed.svg"
                  />
                  <img
                    className="self-stretch h-[57px] relative max-w-full overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/rx-completed.svg"
                  />
                  <img
                    className="self-stretch h-[57px] relative max-w-full overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/rx-sold.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-[934px] w-[722px] relative min-w-[722px] shrink-0 max-w-full lg:flex-1 mq750:h-auto mq750:min-h-[934] mq1050:min-w-full">
            <NewRx />
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white border-black border-[1px] border-solid box-border w-[626px] flex flex-col items-start justify-start pt-0 px-0 pb-[310px] max-w-full">
              <div className="self-stretch h-[936px] relative rounded-3xs bg-white border-black border-[1px] border-solid box-border hidden" />
              <div className="self-stretch rounded-3xs bg-white border-black border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[33px] px-[178px] pb-[31px] max-w-full z-[2]">
                <div className="h-28 w-[624px] relative rounded-3xs bg-white border-black border-[1px] border-solid box-border hidden max-w-full" />
                <div className="w-[239px] relative leading-[42px] font-medium inline-block shrink-0 z-[3] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                  Insurance Info
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-white border-black border-[1px] border-solid box-border flex flex-row items-end justify-start pt-[27px] pb-[29px] pl-11 pr-[33px] gap-[13px] max-w-full z-[1] mq750:flex-wrap">
                <div className="h-[514px] w-[627px] relative rounded-3xs bg-white border-black border-[1px] border-solid box-border hidden max-w-full" />
                <div className="w-[215px] flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border min-w-[215px] mq750:flex-1">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[46px]">
                    <div className="w-[66px] flex flex-row items-start justify-start py-0 px-px box-border">
                      <div className="flex-1 relative leading-[42px] font-medium z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                        Bin
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[61.5px]">
                      <div className="w-[75px] relative leading-[42px] font-medium inline-block z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                        Pcn
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[58px]">
                        <div className="self-stretch relative leading-[42px] font-medium z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                          Person Code
                        </div>
                        <div className="w-[77px] flex flex-row items-start justify-start py-0 px-px box-border">
                          <div className="flex-1 relative leading-[42px] font-medium z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                            ID #
                          </div>
                        </div>
                      </div>
                      <div className="w-36 relative leading-[42px] font-medium inline-block z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                        Group #
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[45.3px] min-w-[207px]">
                  <div className="self-stretch h-[146px] flex flex-col items-start justify-start gap-8">
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                      loading="lazy"
                      alt=""
                      src="/bin.svg"
                    />
                    <img
                      className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                      loading="lazy"
                      alt=""
                      src="/pcn.svg"
                    />
                  </div>
                  <img
                    className="self-stretch h-14 relative max-w-full overflow-hidden shrink-0 z-[2]"
                    loading="lazy"
                    alt=""
                    src="/person-code.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                    <img
                      className="h-[57px] flex-1 relative max-w-full overflow-hidden z-[2]"
                      loading="lazy"
                      alt=""
                      src="/id.svg"
                    />
                  </div>
                  <img
                    className="self-stretch h-[57px] relative max-w-full overflow-hidden shrink-0 z-[2]"
                    loading="lazy"
                    alt=""
                    src="/group.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="absolute top-[0px] left-[1px] w-full flex flex-row items-start justify-between max-w-full gap-5 mq1050:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[158px] px-0 pb-0 box-border max-w-full">
          <h2 className="m-0 h-[62px] relative text-inherit leading-[41.12px] font-medium font-[inherit] inline-block shrink-0 z-[1] mq450:text-[38px] mq450:leading-[25px] mq1050:text-[51px] mq1050:leading-[33px]">
            Patient Profile
          </h2>
        </div>
        <img
          className="w-[419px] relative max-h-full overflow-hidden shrink-0 max-w-full z-[1]"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
      </div>
    </div>
  );
};

export default PatientProfile;
