import icon from "../../shared/assets/iconeMaleta.svg";
import listArrow from "../../shared/assets/listArrow.svg";
import backgroundImg from "../../shared/assets/backgroundimg_hero.svg";

export function EscopoDeServico() {
  const services = [
    "DIGITALIZAÇÃO E ORGANIZAÇÃO DE DOCUMENTOS",
    "ESTRUTURAÇÃO DE PROCESSOS",
    "DESENVOLVIMENTO DE SOLUÇÕES PERSONALIZADAS E OTIMIZAÇÃO DA GESTÃO ADMINISTRATIVA PARA REDUZIR RETRABALHO, PERDAS E DESORGANIZAÇÃO",
    "IMPLANTAÇÃO DE MÉTODOS PRÁTICOS, COMO USO DE FERRAMENTAS PARA MELHORAR CONTROLE, ROTINA E TOMADA DE DECISÃO",
  ];

  return (
    <section className="w-full text-[#f2e3b0] font-semibold relative overflow-hidden">
      <img
        src={backgroundImg}
        alt=""
        className="pointer-events-none absolute inset-0 w-full h-full object-cover"
      />
      <div className="w-full mx-auto py-16 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-30">
          {/* Left column - Title and Icon */}
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start w-full md:w-1/2">
            <h1 className="font text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-cocomat font-semibold text-[#f7eaad] mb-8 md:mb-12 text-center md:text-left leading-tight">
              Escopo
              <br />
              <span className="font-cocomat font-semibold">de Serviços</span>
            </h1>

            {/* Briefcase Icon in Circle */}
            <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-80 xl:h-80 flex items-center justify-center mx-auto md:mx-0">
              <img
                src={icon}
                alt="Briefcase"
                className="max-w-full max-h-full w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-80 xl:h-80 transition-transform duration-500 hover:scale-105 hover:-rotate-3 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right column - Services List */}
          <div className="flex flex-col justify-center w-full md:w-1/2 md:min-h-96 font-cocomat">
            <ul className="w-full space-y-6 md:space-y-8 lg:space-y-10">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex w-full gap-4 sm:gap-4 md:gap-5 lg:gap-6 items-start group hover:-translate-y-1 transition-transform duration-300"
                >
                  {/* List Arrow Icon */}
                  <img
                    src={listArrow}
                    alt=""
                    className="shrink-0 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 mt-0.5 md:mt-1 transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Service Text */}
                  <p className="w-full text-sm md:text-base lg:text-lg xl:text-xl font-garet font-semibold text-[#f7eaad] leading-6 md:leading-7 lg:leading-8 break-word">
                    {service}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
