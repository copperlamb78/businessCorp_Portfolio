import bgPattern from "../../shared/assets/backgroundimg_hero.svg";
import iconBulbMessage from "../../shared/assets/iconBulbMessage.png";

export function SobreNos() {
  return (
    <section className="relative w-full bg-[#A86B1D] overflow-hidden">
      {/* Background SVG pattern - subtle and non-distorting */}
      <img
        src={bgPattern}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset w-full h-full object-cover right-[40%] opacity-60"
        style={{ objectPosition: "" }}
      />

      <div className="max-w-300 mx-auto py-16 md:py-24 lg:py-32">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-16 p-4 md:p-0">
          {/* Left column - Big Brand Title */}
          <div className="flex-1 flex items-center md:items-center justify-center md:justify-center">
            <div className="text-white leading-none">
              <span className="block text-7xl md:text-7xl xl:text-9xl text-center font-theseasons tracking-tight">
                Business
              </span>
              <span className="block text-[100px] md:text-[100px] xl:text-[180px] text-center font-cocomat font-extrabold tracking-tight leading-[0.8]">
                CORP.
              </span>
            </div>
          </div>

          {/* Right column - Who we are */}
          <div className="flex-1 flex flex-col justify-center items-center text-[#f7eaad]">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-4xl md:text-4xl xl:text-6xl text-center font-cocomat font-semibold tracking-tight">
                Quem somos ?
              </h2>
              <div className="relative flex items-center justify-center w-28 h-28 md:w-20 md:h-20 xl:w-32 xl:h-32 overflow-hidden">
                <img
                  src={iconBulbMessage}
                  alt="Ícone de mensagem e lâmpada"
                  className="w-28 h-28 md:w-20 md:h-20xxl:w-32 xl:h-32 object-contain"
                />
              </div>
            </div>

            <p className="text-[#f1d1a2] max-w-140 md:max-w-80 xl:max-w-140 font-garet font-medium text-sm md:text-base lg:text-lg leading-7 md:leading-8 lg:leading-9 text-justify">
              Somos uma consultoria especializada em processos de gestão para
              microempreendedores e profissionais autônomos. Nossa atuação é
              voltada para o público que possui pouca ou nenhuma experiência em
              gestão, mas têm o desejo de organizar, otimizar e fortalecer seus
              negócios. Nosso objetivo é simplificar processos, aumentar a
              eficiência e contribuir para o crescimento sustentável de pequenos
              empreendimentos locais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
