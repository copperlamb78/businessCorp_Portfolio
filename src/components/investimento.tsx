import { CheckCircle, UsersThree } from "phosphor-react";
import React from "react";

export interface InvestimentoProps {
  title: string;
  titleClassName?: string;
  icon: React.ElementType;
  description: string;
  includedItems: string[];
  meetingsTitle: string;
  meetings: { title: string; description: string }[];
  pricing: {
    type: "fixed" | "complexity";
    label: string;
    value?: string;
    cents?: string;
    subtext?: string;
    baixa?: string;
    media?: string;
    alta?: string;
  };
}

export function InvestimentoComponent({
  title,
  titleClassName = "text-[28px] sm:text-[34px]",
  icon: Icon,
  description,
  includedItems,
  meetingsTitle,
  meetings,
  pricing,
}: InvestimentoProps) {
  const isImplantacao =
    title.toUpperCase().includes("IMPLANTAÇÃO") ||
    title.toUpperCase().includes("IMPLANTACAO");
  const isMonitoramento = title.toUpperCase().includes("MONITORAMENTO");

  let computedTitleClassName = titleClassName;
  let computedIconSize = 46;

  if (isMonitoramento) {
    computedTitleClassName = "text-[20px] sm:text-[24px]";
    computedIconSize = 72;
  } else if (isImplantacao) {
    computedTitleClassName = "text-[24px] sm:text-[29px]";
    computedIconSize = 64;
  }

  return (
    <div className="rounded-[28px] w-full max-w-[400px] md:max-w-none flex-1 border-[3px] border-[#563512] bg-[#f8f3ea] flex flex-col font-montserrat shadow-2xl relative overflow-hidden h-full">
      {/* HEADER */}
      <div className="bg-[#563512] py-2 px-3 sm:py-3 sm:px-4 flex items-center justify-center gap-2">
        <h2
          className={`text-white font-black tracking-widest uppercase leading-none ${computedTitleClassName}`}
        >
          {title}
        </h2>
        <Icon size={computedIconSize - 16} color="white" weight="bold" className="flex-shrink-0" />
      </div>

      {/* BODY */}
      <div className="p-4 sm:p-5 lg:p-6 flex flex-col gap-3 relative z-10 flex-grow">
        <p className="text-[#563512] text-center font-bold text-[12px] sm:text-[14px] leading-tight min-h-[32px]">
          {description}
        </p>

        {/* WATERMARK MAGNIFYING GLASS / ICON */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none z-[-1]">
          <Icon size={220} weight="bold" color="#563512" />
        </div>

        {/* INCLUSO BOX */}
        <div className="border-[2px] border-[#e3cca1] rounded-[12px] p-3 sm:p-4 bg-transparent relative mt-0">
          <h3 className="text-[#563512] font-black italic text-[14px] sm:text-[16px] mb-2 mt-[-2px]">
            INCLUSO:
          </h3>
          <ul className="flex flex-col gap-1 sm:gap-[6px]">
            {includedItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle
                  size={18}
                  weight="fill"
                  color="#563512"
                  className="flex-shrink-0 mt-[1px]"
                />
                <span className="text-[#563512] font-bold text-[10px] sm:text-[11px] lg:text-[12px] leading-tight">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ENCONTROS SECTION */}
        <div className="flex items-start gap-3 sm:gap-4 mt-2">
          <div className="border-[2px] border-[#563512] rounded-full p-[6px] flex-shrink-0 bg-[#dfc79b] mt-1">
            <UsersThree size={28} weight="fill" color="#563512" />
          </div>
          <div className="flex flex-col gap-[2px]">
            <h4 className="text-[#563512] font-black text-[13px] sm:text-[15px] mb-[2px]">
              {meetingsTitle}
            </h4>
            {meetings.map((meeting, i) => (
              <p
                key={i}
                className="text-[#563512] font-bold text-[10px] sm:text-[11px] lg:text-[12px] leading-tight mb-0"
              >
                <span className="text-[#b37f2a]">{meeting.title} </span>
                {meeting.description}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="p-3 sm:p-4 pt-0 mt-auto">
        {pricing.type === "fixed" ? (
          <div className="bg-[#563512] rounded-[16px] p-2 pb-1 flex flex-col items-center border-[3px] border-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative">
            <h3 className="text-[#f8f3ea] font-bold text-[14px] tracking-widest border-b-[2px] border-[#f8f3ea] pb-[2px] mb-1 text-center uppercase">
              {pricing.label}
            </h3>
            <div className="flex items-start text-[#db9a2f] font-black mt-0 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
              <span className="text-xl mt-[10px] mr-1 tracking-tighter">
                R$
              </span>
              <span className="text-[54px] leading-none tracking-tighter">
                {pricing.value}
              </span>
              <span className="text-[20px] mt-[10px]">{pricing.cents}</span>
            </div>
            <p className="text-white text-[10px] font-bold mt-0 tracking-wide uppercase">
              {pricing.subtext}
            </p>
          </div>
        ) : (
          <div className="border-[2px] border-[#563512] rounded-[14px] bg-[#f8f3ea] overflow-hidden flex flex-col shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
            <div className="bg-transparent py-[2px] border-b-[2px] border-[#563512] mx-2">
              <h3 className="text-[#563512] font-black text-[11px] text-center tracking-wide uppercase">
                {pricing.label}
              </h3>
            </div>
            <div className="flex w-full divide-x-[2px] divide-[#563512]">
              <div className="flex-1 flex flex-col items-center p-1 py-1">
                <span className="text-[#563512] font-black text-[11px] mb-0">
                  BAIXA
                </span>
                <span className="text-[#b37f2a] font-black text-[11px]">
                  {pricing.baixa}
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center p-1 py-1">
                <span className="text-[#563512] font-black text-[11px] mb-0">
                  MÉDIA
                </span>
                <span className="text-[#b37f2a] font-black text-[11px]">
                  {pricing.media}
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center p-1 py-1">
                <span className="text-[#563512] font-black text-[11px] mb-0">
                  ALTA
                </span>
                <span className="text-[#b37f2a] font-black text-[11px]">
                  {pricing.alta}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
