import React, { useState } from "react";

interface RxDetails {
  medicationName: string;
  medicationStrength: string;
  ndc: string;
  expiration: string;
  lotNumber: string;
  deaSchedule: string;
  drugClass: string;
}

const RxItemProfile: React.FC = () => {
  const [rxDetails, setRxDetails] = useState<RxDetails>({
    medicationName: "",
    medicationStrength: "",
    ndc: "",
    expiration: "",
    lotNumber: "",
    deaSchedule: "",
    drugClass: "",
  });

  const handleRxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRxDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div
      className={`w-[1236px] h-[1470px] bg-white border-black border-[1px] border-solid box-border max-w-full overflow-hidden leading-[normal] tracking-[normal] mq1050:h-auto mq1050:min-h-[1470] ${className}`}
    >
      <img
        className="absolute top-[0px] left-[1px] w-[1236px] h-[400px]"
        alt=""
        src="/navheader.svg"
      />
      <section className="absolute top-[506px] left-[1px] rounded-3xs bg-white border-black border-[1px] border-solid box-border w-full flex flex-row items-start justify-start pt-[15px] px-9 pb-[38px] gap-[230px] max-w-full text-left text-17xl text-gray font-roboto mq450:gap-[29px] mq750:gap-[57px] mq1050:flex-wrap mq1125:gap-[115px]">
        <div className="h-[612px] w-[1238px] relative rounded-3xs bg-white border-black border-[1px] border-solid box-border hidden max-w-full" />
        <div className="w-[232px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[232px] mq1050:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[34px]">
            <div className="w-[107px] flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border">
              <div className="flex-1 relative leading-[42px] font-medium z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                Name
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[3px]">
              <div className="relative leading-[42px] font-medium z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                Strength
              </div>
            </div>
            <div className="w-[81px] relative leading-[42px] font-medium inline-block z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
              NDC
            </div>
            <div className="w-[183px] relative leading-[42px] font-medium inline-block z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
              Expiration
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4">
              <div className="flex-1 relative leading-[42px] font-medium z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                Lot Number
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2">
              <div className="relative leading-[42px] font-medium z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
                DEA Schedule
              </div>
            </div>
            <div className="self-stretch relative leading-[42px] font-medium z-[1] mq450:text-3xl mq450:leading-[25px] mq1050:text-10xl mq1050:leading-[33px]">
              Drug Class
            </div>
          </div>
        </div>
        <div className="h-[553px] w-[544px] flex flex-col items-end justify-start gap-[17px] min-w-[544px] max-w-full mq750:min-w-full mq1050:flex-1">
          <div className="self-stretch flex-1 flex flex-row items-start justify-end py-0 pl-0 pr-px box-border max-w-full">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[12.5px] max-w-full">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/name.svg"
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/strength.svg"
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/ndc.svg"
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/expiration.svg"
              />
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full z-[1]"
                loading="lazy"
                alt=""
                src="/lot-number.svg"
              />
            </div>
          </div>
          <img
            className="self-stretch h-[67px] relative max-w-full overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/dea-schedule.svg"
          />
          <img
            className="self-stretch h-[67px] relative max-w-full overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/drug-class.svg"
          />
        </div>
      </section>
      <section className="absolute top-[216px] left-[0px] w-full flex flex-col items-end justify-start gap-5 max-w-full text-left text-[40px] text-gray font-roboto">
        <div className="self-stretch flex flex-row items-start justify-start pt-0.5 px-[94px] pb-0 box-border relative [row-gap:20px] max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[47px] mq750:pr-[47px] mq750:box-border mq1125:flex-wrap">
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
          <NewRx />
          <NewPtSearch />
          <div className="w-[415px] flex flex-row items-start justify-start [row-gap:20px] max-w-full mq450:flex-wrap">
            <NewDrSearch />
            <RxItemSearch />
          </div>
        </div>
        <div className="w-[1093px] flex flex-row items-start justify-start py-0 pl-5 pr-0 box-border gap-[218px] max-w-full mq450:gap-[27px] mq750:gap-[54px] mq1125:flex-wrap mq1125:gap-[109px]">
          <div className="w-[442px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full shrink-0">
            <div className="self-stretch relative leading-[42px] font-medium shrink-0 mq450:text-[24px] mq450:leading-[25px] mq1050:text-[32px] mq1050:leading-[33px]">
              Doctor Name First/Last
            </div>
          </div>
          <div className="w-[425px] flex flex-row items-start justify-start gap-[11px] shrink-0 max-w-full mq450:flex-wrap">
            <EditInfo />
            <SaveInfo />
          </div>
        </div>
      </section>
      <header className="absolute top-[0px] left-[1px] w-full flex flex-row items-start justify-between gap-5 max-w-full text-left text-[64px] text-white font-hind-siliguri">
        <div className="w-[418px] flex flex-col items-start justify-start pt-[154px] px-0 pb-0 box-border max-w-full">
          <h2 className="m-0 self-stretch h-[62px] relative text-inherit leading-[41.12px] font-medium font-[inherit] inline-block shrink-0 whitespace-nowrap z-[3]">
            Rx Item Profile
          </h2>
        </div>
        <img
          className="h-[216px] w-[419px] relative overflow-hidden shrink-0 max-w-full z-[3]"
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
      </div>
      <div>
        <label htmlFor="rx-dea-schedule">DEA Schedule</label>
        <input
          type="text"
          name="deaSchedule"
          id="rx-dea-schedule"
          value={rxDetails.deaSchedule}
          onChange={handleRxChange}
        />
      </div>
      <div>
        <label htmlFor="rx-drug-class">Drug Class</label>
        <input
          type="text"
          name="drugClass"
          id="rx-drug-class"
          value={rxDetails.drugClass}
          onChange={handleRxChange}
        />
      </div>
    </div>
  );
};

export default RxItemProfile;
