import { FunctionComponent } from "react";

export type PatientDetailsContainerType = {
  className?: string;
};

const PatientDetailsContainer: FunctionComponent<
  PatientDetailsContainerType
> = ({ className = "" }) => {
  return (
    <div
      className={`flex-[0.8916] rounded-3xs bg-white border-black border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[51px] pb-[104px] pl-[34px] pr-[31px] gap-[26px] min-w-[402px] max-w-full z-[1] text-left text-21xl text-gray font-roboto mq450:min-w-full mq750:flex-wrap mq1050:flex-1 ${className}`}
    >
      <div className="h-[620px] w-[620px] relative rounded-3xs bg-white border-black border-[1px] border-solid box-border hidden max-w-full" />
      <div className="w-[248px] flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 box-border min-w-[248px] mq750:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[45px]">
          <div className="self-stretch relative leading-[41.12px] font-medium z-[2] mq450:text-5xl mq450:leading-[25px] mq1050:text-13xl mq1050:leading-[33px]">
            Last Name
          </div>
          <div className="w-[220px] flex flex-col items-start justify-start gap-10">
            <div className="self-stretch relative leading-[42px] font-medium z-[2] mq450:text-5xl mq450:leading-[25px] mq1050:text-13xl mq1050:leading-[33px]">
              First Name
            </div>
            <div className="w-[92px] relative leading-[41.12px] font-medium inline-block z-[2] mq450:text-5xl mq450:leading-[25px] mq1050:text-13xl mq1050:leading-[33px]">
              DOB
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[35px]">
              <div className="w-[180px] relative leading-[41.12px] font-medium inline-block z-[2] mq450:text-5xl mq450:leading-[25px] mq1050:text-13xl mq1050:leading-[33px]">
                Address
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-8">
                <div className="self-stretch relative leading-[41.12px] font-medium z-[2] mq450:text-5xl mq450:leading-[25px] mq1050:text-13xl mq1050:leading-[33px]">
                  Primary Dr
                </div>
                <div className="w-[180px] relative leading-[41.12px] font-medium inline-block z-[2] mq450:text-5xl mq450:leading-[25px] mq1050:text-13xl mq1050:leading-[33px]">
                  Allergies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[10.8px] min-w-[180px]">
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[2.9px]">
          <img
            className="h-[65.3px] w-[277px] relative z-[2]"
            loading="lazy"
            alt=""
            src="/last-name.svg"
          />
        </div>
        <div className="self-stretch h-[150.1px] flex flex-col items-start justify-start pt-0 px-0 pb-[2.9px] box-border gap-[16.6px]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full shrink-0 z-[2]"
            loading="lazy"
            alt=""
            src="/first-name.svg"
          />
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full shrink-0 z-[2]"
            loading="lazy"
            alt=""
            src="/dob.svg"
          />
        </div>
        <img
          className="self-stretch h-[65.3px] relative max-w-full overflow-hidden shrink-0 z-[2]"
          loading="lazy"
          alt=""
          src="/address.svg"
        />
        <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[2.8px]">
          <img
            className="h-[65.3px] w-[277px] relative z-[2]"
            loading="lazy"
            alt=""
            src="/primary-dr.svg"
          />
        </div>
        <img
          className="self-stretch h-[65.3px] relative max-w-full overflow-hidden shrink-0 z-[2]"
          loading="lazy"
          alt=""
          src="/allergies.svg"
        />
      </div>
    </div>
  );
};

export default PatientDetailsContainer;
