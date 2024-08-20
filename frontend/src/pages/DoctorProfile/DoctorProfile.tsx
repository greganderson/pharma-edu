import { FunctionComponent, useCallback } from "react";
import NewRx from "./NewRx";
import NewPtSearch from "../components/NewPtSearch";
import NewDrSearch from "../components/NewDrSearch";
import RxItemSearch from "../components/RxItemSearch";
import EditInfo from "../components/EditInfo";
import SaveInfo from "../components/SaveInfo";

export type DoctorProfileType = {
  className?: string;
};

const DoctorProfile: FunctionComponent<DoctorProfileType> = ({
  className = "",
}) => {
  const onHomeClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  return (
    <div
      className={`w-[1236px] bg-white border-black border-[1px] border-solid box-border max-w-full overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-80 relative gap-[222px] leading-[normal] tracking-[normal] text-left text-17xl text-gray font-roboto mq450:gap-[55px] mq750:gap-[111px] ${className}`}
    >
      <main className="w-full !m-[0] absolute right-[-2px] bottom-[-2px] left-[0px] rounded-3xs bg-white border-black border-[1px] border-solid box-border flex flex-col items-start justify-start pt-0.5 px-0 pb-[946px] gap-9 mq750:gap-[18px]">
        <div className="self-stretch h-[1250px] relative rounded-3xs bg-white border-black border-[1px] border-solid box-border hidden" />
        <section className="self-stretch flex flex-row items-start justify-start pt-[1.9px] px-[94px] pb-0 box-border relative [row-gap:20px] max-w-full z-[2] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[47px] mq750:pr-[47px] mq750:box-border mq1125:flex-wrap">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden"
            loading="lazy"
            alt=""
            src="/nav.svg"
          />
          <textarea
            className="border-black border-[1px] border-solid bg-darkslategray h-[176.1px] w-[206px] [outline:none] rounded-3xs box-border flex flex-row items-start justify-start pt-[57px] px-6 pb-[57.4px] font-roboto font-medium text-17xl text-white cursor-pointer z-[1]"
            placeholder="Home"
            rows={9}
            cols={10}
            onClick={onHomeClick}
          />
          <NewRx />
          <NewPtSearch />
          <div className="w-[415px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq450:flex-wrap">
            <NewDrSearch />
            <RxItemSearch />
          </div>
        </section>
        <section className="w-[1153px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-[40px] text-gray font-roboto">
          <div className="w-[875px] flex flex-row items-start justify-between max-w-full gap-5 mq750:flex-wrap">
            <div className="w-[480px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border max-w-full">
              <div className="self-stretch relative leading-[42px] font-medium z-[1] mq450:text-[24px] mq450:leading-[25px] mq1050:text-[32px] mq1050:leading-[33px]">
                Doctor Name First/Last
              </div>
            </div>
            <EditInfo />
          </div>
        </section>
      </main>
      <img
        className="w-[1236px] h-[402px] absolute !m-[0] top-[0px] left-[-4px] z-[1]"
        alt=""
        src="/navheader.svg"
      />
      <header className="self-stretch flex flex-row items-start justify-start gap-[67px] max-w-full text-left text-[64px] text-white font-hind-siliguri mq450:gap-[17px] mq750:gap-[33px] mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-[154px] px-0 pb-0 box-border min-w-[487px] max-w-full mq750:min-w-full">
          <h2 className="m-0 self-stretch h-[62px] relative text-inherit leading-[41.12px] font-medium font-[inherit] inline-block shrink-0 z-[2] mq450:text-[38px] mq450:leading-[25px] mq1050:text-[51px] mq1050:leading-[33px]">
            Doctor Profile
          </h2>
        </div>
        <img
          className="w-[419px] relative max-h-full overflow-hidden shrink-0 max-w-full z-[2] mq1050:flex-1"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
      </header>
      <div className="self-stretch flex flex-col items-end justify-start max-w-full">
        <SaveInfo />
        <div className="self-stretch rounded-3xs bg-white border-black border-[1px] border-solid box-border flex flex-row items-end justify-start pt-[27px] px-[21px] pb-10 gap-7 max-w-full z-[1] mq750:pt-5 mq750:pb-[26px] mq750:box-border mq1050:flex-wrap">
          <div className="h-[626px] w-[1243px] relative rounded-3xs bg-white border-black border-[1px] border-solid box-border hidden max-w-full" />
          <div className="w-[385px] flex flex-col items-start justify-end pt-0 px-0 pb-3 box-border min-w-[385px] max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[37.5px] max-w-full mq450:gap-[19px]">
              <div className="w-[220px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
                <div className="flex-1 relative leading-[42px] font-medium z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                  Last Name
                </div>
              </div>
              <div className="w-[244px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
                <div className="flex-1 relative leading-[42px] font-medium z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                  First Name
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-1.5 pr-0 box-border max-w-full">
                <div className="flex-1 relative leading-[42px] font-medium inline-block max-w-full z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                  Dr Type (MD/DO/PA)
                </div>
              </div>
              <div className="w-[183px] relative leading-[42px] font-medium inline-block z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                Address
              </div>
              <div className="w-52 flex flex-col items-start justify-start gap-[42px]">
                <div className="w-[116px] relative leading-[42px] font-medium inline-block z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                  DEA
                </div>
                <a className="[text-decoration:none] self-stretch relative leading-[42px] font-medium text-[inherit] z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                  Phone #
                </a>
                <div className="self-stretch relative leading-[42px] font-medium z-[2] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                  NPI #
                </div>
              </div>
            </div>
          </div>
          <div className="h-[553px] w-[592px] flex flex-col items-start justify-start gap-[17px] min-w-[592px] max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[12.5px]">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                loading="lazy"
                alt=""
                src="/last-name.svg"
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                loading="lazy"
                alt=""
                src="/first-name.svg"
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                loading="lazy"
                alt=""
                src="/dr-type-mddopa.svg"
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                loading="lazy"
                alt=""
                src="/address.svg"
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[2]"
                loading="lazy"
                alt=""
                src="/dea.svg"
              />
            </div>
            <img
              className="self-stretch h-[67px] relative max-w-full overflow-hidden shrink-0 z-[2]"
              loading="lazy"
              alt=""
              src="/phone.svg"
            />
            <img
              className="self-stretch h-[67px] relative max-w-full overflow-hidden shrink-0 z-[2]"
              loading="lazy"
              alt=""
              src="/npi.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
