import { Flex } from "@radix-ui/themes/dist/cjs/components/index.js";
import { Header } from "../pages/header";
import backgroundImg from "../shared/assets/backgroundimg_header.svg";
import backgroundImgHero from "../shared/assets/backgroundimg_hero.svg";
import { SobreNos } from "../pages/sobreNos";
import ComoSurgiu from "../pages/comoSurgiu";
import TimeBusiness from "../pages/timeBC";
import { EscopoDeServico } from "../pages/escopoDeServico";
import Faq from "../pages/faq";
import { Contatos } from "../pages/contatos";
import { PrecificacaoComponent } from "../components/precificacao";

export function App() {
  return (
    <Flex direction="column" gap="0" className="w-full h-full bg-[#a86b1d] ">
      <Header />

      {/* Hero / Home Section */}
      <section
        id="inicio"
        className="w-full py-16 px-4 sm:py-24 sm:px-6 md:py-32 md:px-8 lg:py-40 bg-hero-responsive bg-center md:bg-auto"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: "no-repeat",
        }}
      ></section>

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
          <div className="relative z-10 flex flex-col gap-8 py-16">
            <PrecificacaoComponent
              title="Empreendedor Master +"
              bgColorPaper="#f7eaad"
              bgColorDark="#6d430e"
              textColorPaper="#a86b1d"
              value="2.990"
              note="*Valor sujeito a acréscimo."
              descriptionPaper={`<p>O pacote Ideal para empreendedores que desejam profissionalizar a gestão e preparar o negócio para um crescimento sustentável.</p>`}
              checklistItems={[
                "Enfrenta problemas recorrentes que impactam os resultados;",
                "Precisa estruturar processos do zero;",
                "Deseja aumentar a lucratividade e a produtividade;",
                "Quer reduzir desperdícios e falhas operacionais;",
                "Busca transformar o negócio em uma empresa mais organizada e preparada para crescer.",
              ]}
              descriptionBlock1={`
          <p>Diagnóstico situacional;</p>
          <p>2 reuniões semanais;</p>
          <p>Organização administrativa (documental e layout);</p>
          <p>Planejamento financeiro;</p>
          <p>Suporte prioritário;</p>
        `}
              descriptionBlock2Items={[
                "Implantação de processos simples;",
                "Indicadores de desempenho;",
                "Acompanhamento semanal;",
                "Estruturação completa da gestão;",
                "Apoio no marketing / divulgação;",
              ]}
            />
            <PrecificacaoComponent
              title="Gestão eficaz"
              bgColorPaper="#db982c"
              iconColor="#f7eaad"
              bgColorDark="#6d430e"
              textColorPaper="#fff5ca"
              value="1.790"
              note="*Valor sujeito a acréscimo."
              descriptionPaper={`<p>Ideal para empreendedores que já possuem um negócio em funcionamento, mas enfrentam dificuldades com organização, produtividade e processos.</p>`}
              checklistItems={[
                "Enfrenta problemas recorrentes que impactam os resultados;",
                "Precisa estruturar processos do zero;",
                "Deseja aumentar a lucratividade e a produtividade;",
                "Quer reduzir desperdícios e falhas operacionais;",
                "Busca transformar o negócio em uma empresa mais organizada e preparada para crescer.",
              ]}
              descriptionBlock1={`
          <p>Diagnóstico situacional;</p>
          <p>Controle financeiro básico;</p>
          <p>Organização administrativa;</p>
          <p>2 reuniões presenciais;</p>
          <p>2 reuniões online;</p>
        `}
              descriptionBlock2Items={[
                "Implantação de processos simples;",
                "Indicadores de desempenho;",
                "Acompanhamento semanal;",
                "Apoio no marketing / divulgação;",
              ]}
            />
            <PrecificacaoComponent
              title="Gere fácil"
              bgColorPaper="#f7eaad"
              bgColorDark="#6d430e"
              iconColor="#a86b1d"
              textColorPaper="#a86b1d"
              value="1.190"
              note="*Valor sujeito a acréscimo."
              descriptionPaper={`<p>Ideal para empreendedores que estão começando a organizar o negócio e precisam ter controle das finanças e da operação.</p>`}
              checklistItems={[
                "Mistura contas pessoais e da empresa;",
                "Não possui controle financeiro básico;",
                "Tem dificuldade para organizar documentos e informações;",
                "Precisa entender para onde o dinheiro está indo;",
                "Quer criar uma base sólida para crescer.",
                "Não tem ou tem pouco conhecimento de como promover seu negócio (marketing basico)",
              ]}
              descriptionBlock1={`
          <p>Diagnóstico situacional;</p>
          <p>Controle financeiro básico;</p>
          <p>Organização administrativa;</p>
          <p>2 reuniões presenciais;</p>
          <p>2 reuniões online;</p>
        `}
              descriptionBlock2Items={["Apoio no marketing / divulgação;"]}
            />
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
    </Flex>
  );
}
