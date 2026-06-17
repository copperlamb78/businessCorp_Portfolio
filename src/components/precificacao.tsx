import { BagSimple } from "phosphor-react";

// Interface para tipagem das props do componente
export interface PrecificacaoComponentProps {
  bgColorPaper?: string; // Cor de fundo da prancheta
  bgColorDark?: string; // Cor de fundo do painel direito
  iconColor?: string; // Cor dos ícones e marcadores
  textColorPaper?: string; // Cor do texto na prancheta
  textColorDark?: string; // Cor do texto no painel direito
  title: string; // Título do plano ("Empreendedor Master +")
  value: string; // Preço ("R$ 2.990")
  descriptionPaper: string; // O parágrafo de introdução (pode conter HTML)
  checklistItems: string[]; // A lista com checkboxes à esquerda
  descriptionBlock1: string; // O primeiro bloco de texto à direita (antes da lista)
  descriptionBlock2Items: string[]; // A lista de benefícios à direita
  note: string; // Nota de rodapé ("*Valor sujeito a acréscimo.")
}

export function PrecificacaoComponent({
  bgColorPaper = "#f3e5ca", // Creme claro padrão
  bgColorDark = "#3e2723", // Marrom profundo padrão
  iconColor = "#a16f3a", // Marrom médio padrão para ícones e moldura
  textColorPaper = "#3e2723", // Marrom escuro para texto no papel
  textColorDark = "#f3e5ca", // Creme claro para texto no escuro
  title,
  value,
  descriptionPaper,
  checklistItems,
  descriptionBlock1,
  descriptionBlock2Items,
  note,
}: PrecificacaoComponentProps) {
  // Cores dinâmicas para aplicação no estilo inline (necessário para Tailwind v4 em variáveis)
  const colors = {
    paperBg: bgColorPaper,
    darkBg: bgColorDark,
    accent: iconColor,
    paperText: textColorPaper,
    darkText: textColorDark,
  };

  return (
    // Fundo geral texturizado (como o da imagem)
    <div
      className="p-4 md:p-8 w-full flex justify-center font-sans overflow-hidden"
      style={{
        backgroundImage: `url('/shared/assets/backgroundimg_hero.svg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col lg:flex-row gap-8 items-start max-w-7xl mx-auto w-full">
        {/* Painel Esquerdo (Prancheta) */}
        <div
          className="w-full lg:w-90 shrink-0 p-6 md:p-8 rounded-xl relative shadow-2xl mt-8 lg:mt-0 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)]"
          style={{ backgroundColor: colors.paperBg, color: colors.paperText }}
        >
          {/* Clipe da Prancheta (simulando 3D) */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/4 w-32 md:w-48 h-12 md:h-16 rounded-full flex items-center justify-center">
            <BagSimple
              weight="fill"
              className={`text-[${iconColor}] w-full h-24 md:h-30 drop-shadow-[0_-3px_4px_rgba(0,0,0,0.3)]`}
              preserveAspectRatio="none"
            />
          </div>

          {/* Conteúdo da Prancheta */}
          <div className="mt-8 md:mt-12 space-y-6">
            {/* Descrição Principal (interpretando HTML) */}
            <div
              className="text-sm md:text-base leading-relaxed font-normal font-cocomat [&>p>strong]:font-bold"
              dangerouslySetInnerHTML={{ __html: descriptionPaper }}
            />

            {/* Checklist Marrons */}
            <ul className="space-y-4">
              {checklistItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start font-bold font-cocomat gap-3"
                >
                  {/* Ícone de Verificação Personalizado */}
                  <div
                    className="mt-1 w-3 h-3 shrink-0  flex items-center justify-center"
                    style={{ backgroundColor: "#6d430e" }}
                  ></div>
                  <span className="text-sm flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Painel Direito (Informações do Plano) */}
        <div
          className="flex-1 border-3 p-6 md:p-8 rounded-3xl relative w-full lg:w-auto xl:w-185 max-w-full text-#fff5ca bg-[#f7eaad] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
          style={{
            backgroundColor: colors.darkBg,
            color: colors.darkText, // Moldura creme
          }}
        >
          {/* Header do Plano */}
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <div
              className="w-1.5 h-8 md:h-10 rounded-full shrink-0"
              style={{ backgroundColor: colors.darkText }}
            />
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-theseasons wrap-break-word"
              style={{ textShadow: "4px 4px 0 #432704" }}
            >
              {title.split("+").map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <span className="font-sans">+</span>
                  )}
                </span>
              ))}
            </h2>
          </div>

          {/* Conteúdo de Texto e Benefícios */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
            {/* Bloco 1 de Texto (pode conter HTML) */}
            <div
              className="text-sm font-bold font-theseasons space-y-3"
              dangerouslySetInnerHTML={{
                __html: descriptionBlock1.replace(
                  /(<\/?[^>]+>)|([()/])/g,
                  (match, tag, char) => {
                    if (tag) return tag;
                    if (char) return `<span class="font-sans">${char}</span>`;
                    return match;
                  },
                ),
              }}
            />

            {/* Bloco 2 com Marcadores de Ponto (list-disc) */}
            <div>
              <ul className="space-y-3 text-sm ml-0 lg:ml-5">
                {descriptionBlock2Items.map((item, index) => (
                  <li
                    key={index}
                    className="pl-0 lg:pl-1 text-sm font-bold font-theseasons"
                  >
                    {item.split(/([()/])/).map((part, i) =>
                      part === "/" || part === "(" || part === ")" ? (
                        <span key={i} className="font-sans">
                          {part}
                        </span>
                      ) : (
                        part
                      ),
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Seção de Investimento */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-4 mt-6 md:mt-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-theseasons font-medium text-center lg:text-left">
              Investimento:
            </h3>
            <div className="flex flex-col items-center">
              <p
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl font-garet tracking-tight text-center"
                style={{ textShadow: "2px 2px 6px #db982c, 4px 4px 10px " }}
              >
                <span className="font-theseasons">R</span>
                <span className="font-sans">$ </span>
                {value}
              </p>
              {/* Nota de Rodapé */}
              <p
                className="text-center text-sm md:text-md mt-2 md:mt-0"
                style={{ color: colors.darkText }}
              >
                {note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
