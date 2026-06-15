import { CheckCircle, Rocket, UsersThree } from "phosphor-react";
import React from "react";

export function DesenvolverComponent() {
  return (
    <div className="rounded-[28px] w-full max-w-[428px] xl:max-w-none flex-1 border-[3px] border-[#f8f3ea] bg-[#563512] flex flex-col font-montserrat shadow-2xl relative overflow-hidden h-full transform transition-transform duration-300 xl:scale-[1.07] xl:origin-bottom z-10">
      {/* HEADER */}
      <div className="bg-[#f8f3ea] py-2 px-3 flex items-center justify-center gap-2">
        <h2 className="text-[#563512] font-black tracking-widest uppercase leading-none text-[26px] sm:text-[30px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
          DESENVOLVER
        </h2>
        <Rocket size={32} color="#563512" weight="bold" className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]" />
      </div>

      {/* BODY */}
      <div className="p-3 px-5 flex flex-col gap-2 relative z-10 flex-grow">
        <p className="text-white text-center font-bold text-[12px] sm:text-[13px] leading-tight min-h-[32px] px-1">
          A jornada completa para transformar a gestão do seu negócio e acelerar seus resultados.
        </p>

        {/* WATERMARK ROCKET */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none z-[-1]">
          <Rocket size={260} weight="fill" color="#f8f3ea" />
        </div>

        {/* INCLUSO BOX */}
        <div className="border-[2px] border-[#f8f3ea] rounded-[12px] p-2 pb-2 bg-transparent relative mt-0">
          <h3 className="text-[#f8f3ea] font-black italic text-[15px] mb-1 mt-[-2px]">
            INCLUSO:
          </h3>
          <ul className="flex flex-col gap-[2px]">
            {[
              "IMERSÃO + IMPLANTAÇÃO + MONITORAMENTO",
              "TODAS AS FERRAMENTAS E ROTINAS",
              "DIAGNÓSTICO COMPLETO",
              "ACOMPANHAMENTO ESTRATÉGICO CONTÍNUO",
              "ANÁLISE DE INDICADORES E RESULTADOS",
              "PLANEJAMENTO ESTRATÉGICO",
              "REUNIÕES MENSAIS E SUPORTE PRIORITÁRIO",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-1">
                <CheckCircle
                  size={16}
                  weight="fill"
                  color="#f8f3ea"
                  className="flex-shrink-0 mt-[1px]"
                />
                <span className="text-white font-bold text-[9px] sm:text-[10px] leading-tight">
                  {i === 6 ? (
                    <>REUNIÕES MENSAIS E <span className="underline decoration-2 underline-offset-2">SUPORTE PRIORITÁRIO</span></>
                  ) : item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ENCONTROS SECTION */}
        <div className="border-[2px] border-[#f8f3ea] rounded-[12px] p-2 flex items-start gap-2 mt-0">
          <div className="border-[2px] border-[#563512] rounded-full p-[6px] flex-shrink-0 bg-[#f8f3ea] mt-0 shadow-md">
            <UsersThree size={28} weight="fill" color="#563512" />
          </div>
          <div className="flex flex-col gap-[1px]">
            <h4 className="text-[#f8f3ea] font-black text-[13px] sm:text-[14px] mb-[2px]">
              ENCONTROS (MENSAIS)
            </h4>
            <p className="text-white font-bold text-[9px] sm:text-[10px] leading-tight mb-0">4 Encontros estratégicos por mês</p>
            <p className="text-white font-bold text-[9px] sm:text-[10px] leading-tight mb-0">Diagnóstico</p>
            <p className="text-white font-bold text-[9px] sm:text-[10px] leading-tight mb-0">Implementação</p>
            <p className="text-white font-bold text-[9px] sm:text-[10px] leading-tight mb-0">Análise</p>
            <p className="text-white font-bold text-[9px] sm:text-[10px] leading-tight mb-0">Planejamento Integrado</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="p-3 pt-0 mt-auto relative pb-6">
        <div className="border-[2px] border-[#f8f3ea] rounded-[14px] bg-transparent overflow-visible flex flex-col relative">
          <div className="py-1 border-b-[2px] border-[#f8f3ea] mx-2">
            <h3 className="text-white font-black text-[11px] sm:text-[12px] text-center tracking-wide uppercase">
              VALOR MENSAL POR COMPLEXIDADE
            </h3>
          </div>
          <div className="flex w-full divide-x-[2px] divide-[#f8f3ea] pb-4">
            <div className="flex-1 flex flex-col items-center p-1 py-2 gap-0">
              <span className="text-white font-black text-[11px] mb-0">
                BAIXA
              </span>
              <span className="text-[#d8cdb8] font-bold text-[8px] sm:text-[9px] line-through decoration-[#d8cdb8]">
                DE R$1191,00
              </span>
              <div className="flex items-center text-[#db9a2f] font-black">
                <span className="text-[8px] mr-1">POR</span>
                <span className="text-[14px] sm:text-[15px] tracking-tighter">R$1071,90</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center p-1 py-2 gap-0">
              <span className="text-white font-black text-[11px] mb-0">
                MÉDIA
              </span>
              <span className="text-[#d8cdb8] font-bold text-[8px] sm:text-[9px] line-through decoration-[#d8cdb8]">
                DE R$1591,00
              </span>
              <div className="flex items-center text-[#db9a2f] font-black">
                <span className="text-[8px] mr-1">POR</span>
                <span className="text-[14px] sm:text-[15px] tracking-tighter">R$1431,90</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center p-1 py-2 gap-0">
              <span className="text-white font-black text-[11px] mb-0">
                ALTA
              </span>
              <span className="text-[#d8cdb8] font-bold text-[8px] sm:text-[9px] line-through decoration-[#d8cdb8]">
                DE R$2191,00
              </span>
              <div className="flex items-center text-[#db9a2f] font-black">
                <span className="text-[8px] mr-1">POR</span>
                <span className="text-[14px] sm:text-[15px] tracking-tighter">R$1971,90</span>
              </div>
            </div>
          </div>

          {/* DESCONTO DE 10% BADGE */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#563512] border-[2px] border-[#f8f3ea] rounded-full px-4 py-[2px] whitespace-nowrap shadow-lg">
            <span className="text-white font-black text-[12px] tracking-wider uppercase">
              DESCONTO DE 10%!!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
