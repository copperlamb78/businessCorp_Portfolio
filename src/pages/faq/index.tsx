import { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
import boneco from "../../shared/assets/bonecoComDuvida.png";

const FAQS = [
  {
    q: "Meu negócio é muito pequeno. A consultoria ainda pode me ajudar?",
    a: "Sim. A consultoria é especialmente desenvolvida para negócios que ainda estão estruturando seus processos e sua gestão. Trabalhamos com soluções adaptadas ao porte do negócio.",
  },
  {
    q: "Vocês atendem qualquer tipo de negócio?",
    a: "Atendemos diversos segmentos, como alimentação, beleza, comércio, prestação de serviços e profissionais autônomos. Adaptamos metodologias conforme a necessidade.",
  },
  {
    q: "Como funciona a consultoria?",
    a: "Primeiro realizamos um diagnóstico do negócio. Em seguida, identificamos os principais problemas e oportunidades e elaboramos um plano de ação personalizado.",
  },
  {
    q: "Vou receber materiais e relatórios?",
    a: "Sim. São entregues ferramentas, relatórios, planilhas e recomendações para facilitar a implementação das melhorias.",
  },
  {
    q: "Quanto tempo dura a consultoria?",
    a: "A duração varia conforme o plano escolhido e as necessidades do negócio. Podemos trabalhar em projetos pontuais ou contínuos.",
  },
  {
    q: "As reuniões são presenciais ou online?",
    a: "Dependendo da localização e do plano contratado, os atendimentos podem ser presenciais, online ou híbridos.",
  },
  {
    q: "A consultoria garante aumento de lucro?",
    a: "Não é possível garantir resultados específicos, mas o objetivo é melhorar a gestão e criar condições para aumentar a rentabilidade e sustentabilidade do negócio.",
  },
  {
    q: "Em quanto tempo vou ver resultados?",
    a: "Os resultados dependem da situação do negócio e do comprometimento com a implementação das ações. Muitos clientes percebem melhorias já nos primeiros meses.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="w-full text-[#f2e3b0] py-12 relative overflow-hidden">
      <img
        src={boneco}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-20 w-150 md:left-8 md:top-28 md:w-72 lg:left-10 lg:top-32 lg:w-96 xl:left-12 xl:top-30 opacity-10 z-0"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-3xl md:text-4xl xl:text-6xl font-cocomat font-semibold text-[#f7dca5]">
            Dúvidas
          </h2>
          <MagnifyingGlass size={42} weight="bold" className="text-[#f7dca5]" />
        </div>
        <div className="flex flex-col gap-8 md:gap-12">
          {/* Answers (single-column with modals) */}
          <main className="w-full">
            <h3 className="sr-only">Respostas</h3>

            <div className="space-y-6">
              {FAQS.map((item, i) => (
                <article
                  key={i}
                  className="bg-[#6d430e]/20 rounded-lg p-4 md:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-cocomat font-semibold text-[#f7dca5] text-lg md:text-xl">
                        {item.q}
                      </h4>
                    </div>

                    <div className="flex-shrink-0">
                      <button
                        onClick={() => toggleAnswer(i)}
                        aria-expanded={openIndex === i}
                        className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-[#a86b1d] bg-transparent px-3 py-2 text-sm text-[#f2e3b0] transition-colors hover:bg-[#a86b1d] hover:text-white focus:ring-2 focus:ring-[#8b5a2b]/40"
                      >
                        {openIndex === i
                          ? "Esconder resposta"
                          : "Mostrar resposta"}
                      </button>
                    </div>
                  </div>

                  <div
                    className={`mt-3 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                      openIndex === i
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm md:text-base text-[#f1d1a2] leading-7">
                      {item.a}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
