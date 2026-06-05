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
      className="p-8 w-full flex justify-end font-sans"
      style={{
        backgroundImage: `url('/shared/assets/backgroundimg_hero.svg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col md:flex-row gap-8 items-start max-w-7xl mx-auto">
        {/* Painel Esquerdo (Prancheta) */}
        <div
          className="w-full md:w-90 shrink-0 p-6 rounded-xl relative shadow-2xl"
          style={{ backgroundColor: colors.paperBg, color: colors.paperText }}
        >
          {/* Clipe da Prancheta (simulando 3D) */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/4 w-48 h-16 rounded-full flex items-center justify-center">
            <BagSimple
              weight="fill"
              className={`text-[${iconColor}] w-full h-30 drop-shadow-[0_-3px_4px_rgba(0,0,0,0.3)]`}
              preserveAspectRatio="none"
            />
          </div>

          {/* Conteúdo da Prancheta */}
          <div className="mt-12 space-y-6">
            {/* Descrição Principal (interpretando HTML) */}
            <div
              className="text-base leading-relaxed font-normal font-cocomat [&>p>strong]:font-bold"
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
          className="flex-1 border-3 p-8 rounded-3xl relative w-185 text-#fff5ca"
          style={{
            backgroundColor: colors.darkBg,
            color: colors.darkText,
            borderColor: colors.paperBg, // Moldura creme
          }}
        >
          {/* Header do Plano */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-1.5 h-10 rounded-full"
              style={{ backgroundColor: colors.darkText }}
            />
            <h2
              className="text-5xl font-bold font-theseasons "
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
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
              <ul className="space-y-3 text-sm ml-5">
                {descriptionBlock2Items.map((item, index) => (
                  <li
                    key={index}
                    className="pl-1 text-sm font-bold font-theseasons"
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
          <div className="flex flex-col xl:flex-row items-center justify-between gap-4 mt-8">
            <h3 className="text-3xl md:text-4xl font-theseasons font-medium">
              Investimento:
            </h3>
            <div className="flex flex-col items-center">
              <p
                className="text-6xl md:text-8xl xl:text-7xl font-garet tracking-tight"
                style={{ textShadow: "2px 2px 6px #db982c, 4px 4px 10px " }}
              >
                <span className="font-theseasons">R</span>
                <span className="font-sans">$ </span>
                {value}
              </p>
              {/* Nota de Rodapé */}
              <p className="text-center text-md text-[#fff5ca]">{note}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
