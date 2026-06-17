import { Flex } from "@radix-ui/themes/dist/cjs/components/index.js";
import { Header } from "../pages/header";
import backgroundImgHero from "../shared/assets/backgroundimg_hero.svg";
import { SobreNos } from "../pages/sobreNos";
import ComoSurgiu from "../pages/comoSurgiu";
import TimeBusiness from "../pages/timeBC";
import { EscopoDeServico } from "../pages/escopoDeServico";
import Faq from "../pages/faq";
import { Contatos } from "../pages/contatos";
import { InvestimentoComponent } from "../components/investimento";
import { DesenvolverComponent } from "../components/desenvolver";
import { Footer } from "../components/footer";
import { MagnifyingGlass, Gear, ChartLineUp } from "phosphor-react";

export function App() {
  return (
    <Flex direction="column" gap="0" className="w-full h-full bg-[#a86b1d] ">
      <Header />

      {/* Sobre nós Section */}
      <section id="sobre-nos" className="w-full">
        <SobreNos />
        <ComoSurgiu />
      </section>

      {/* Time BC Section */}
      <section id="time-bc" className="w-full">
        <TimeBusiness />
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="w-full">
        <EscopoDeServico />
        <div className="relative w-full overflow-hidden">
          <img
            src={backgroundImgHero}
            alt=""
            className="pointer-events-none absolute inset-0 w-full h-full object-cover"
          />
          <div className="w-full py-16 px-4 md:px-8 xl:py-28">
            <div className="max-w-375 w-full mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-start justify-items-center lg:justify-items-center justify-center gap-6 xl:gap-8">
              <InvestimentoComponent
                title="IMERSÃO"
                titleClassName="text-[32px] sm:text-[38px] xl:text-[28px] 2xl:text-[38px]"
                icon={MagnifyingGlass}
                description="Imersão e diagnóstico do seu negócio para você empreendedor: entender, organizar e dar os primeiros passos com clareza."
                includedItems={[
                  "2 ENCONTROS",
                  "ESCUTA E LEVANTAMENTO DE INFORMAÇÕES",
                  "DIAGNÓSTICO SIMPLIFICADO DO NEGÓCIO",
                  "IDENTIFICAÇÃO DE GARGALOS",
                  "NOÇÕES BÁSICAS DE CONTROLE FINANCEIRO",
                  "NOÇÕES DE ORGANIZAÇÃO ADMINISTRATIVA",
                  "SUPORTE BÁSICO VIA WHATSAPP",
                ]}
                meetingsTitle="ENCONTROS (ÚNICOS)"
                meetings={[
                  {
                    title: "1º Encontro:",
                    description: "Escuta e diagnóstico",
                  },
                  {
                    title: "2º Encontro:",
                    description:
                      "Apresentação do diagnóstico e orientações iniciais",
                  },
                ]}
                pricing={{
                  type: "fixed",
                  label: "VALOR FIXO",
                  value: "297",
                  cents: ",00",
                  subtext: "*PAGAMENTO ÚNICO",
                }}
              />

              <InvestimentoComponent
                title="IMPLANTAÇÃO"
                titleClassName="text-[28px] sm:text-[34px] xl:text-[24px] 2xl:text-[34px]"
                icon={Gear}
                description="Implementação de ferramentas e rotinas para colocar a gestão em prática e ganhar controle no dia a dia."
                includedItems={[
                  "APLICAÇÃO DE FERRAMENTAS DE GESTÃO",
                  "PLANILHAS DE CONTROLE FINANCEIRO",
                  "PADRONIZAÇÃO DE ATIVIDADES",
                  "APOIO AO MARKETING E DIVULGAÇÃO",
                  "CRIAÇÃO DE MATERIAIS BÁSICOS",
                  "ACOMPANHAMENTO MENSAL",
                  "SUPORTE VIA WHATSAPP",
                ]}
                meetingsTitle="ENCONTROS (MENSAIS)"
                meetings={[
                  {
                    title: "1º Encontro:",
                    description:
                      "Implementação das ferramentas e organização financeira;",
                  },
                  {
                    title: "2º Encontro:",
                    description:
                      "Acompanhamento da aplicação, correções e próximos passos;",
                  },
                ]}
                pricing={{
                  type: "complexity",
                  label: "VALOR MENSAL POR COMPLEXIDADE",
                  baixa: "R$397,00",
                  media: "R$597,00",
                  alta: "R$897,00",
                }}
              />

              <InvestimentoComponent
                title="MONITORAMENTO"
                titleClassName="text-[22px] sm:text-[28px] xl:text-[20px] 2xl:text-[28px]"
                icon={ChartLineUp}
                description="Implementação de ferramentas e rotinas para colocar a gestão em prática e ganhar controle no dia a dia."
                includedItems={[
                  "APLICAÇÃO DE FERRAMENTAS DE GESTÃO",
                  "PLANILHAS DE CONTROLE FINANCEIRO",
                  "PADRONIZAÇÃO DE ATIVIDADES",
                  "APOIO AO MARKETING E DIVULGAÇÃO",
                  "CRIAÇÃO DE MATERIAIS BÁSICOS",
                  "ACOMPANHAMENTO MENSAL",
                  "SUPORTE VIA WHATSAPP",
                ]}
                meetingsTitle="ENCONTROS (MENSAIS)"
                meetings={[
                  {
                    title: "1º Encontro:",
                    description: "Análise dos dados coletados;",
                  },
                  {
                    title: "2º Encontro:",
                    description: "Avaliação de indicadores;",
                  },
                  {
                    title: "3º Encontro:",
                    description: "Ajustes nas ferramentas e processos;",
                  },
                  {
                    title: "4º Encontro:",
                    description: "Reunião estratégica e planejamento;",
                  },
                ]}
                pricing={{
                  type: "complexity",
                  label: "VALOR MENSAL POR COMPLEXIDADE",
                  baixa: "R$497,00",
                  media: "R$697,00",
                  alta: "R$997,00",
                }}
              />
              <DesenvolverComponent />
            </div>
          </div>
        </div>
      </section>

      {/* Dúvidas Section */}
      <section id="duvidas" className="w-full">
        <Faq />
      </section>

      {/* Contatos Section */}
      <section id="contatos" className="w-full">
        <Contatos />
      </section>

      {/* Footer Section */}
      <Footer />
    </Flex>
  );
}
