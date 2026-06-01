import { Flex } from "@radix-ui/themes/dist/cjs/components/index.js";
import { Header } from "../pages/header";
import backgroundImg from "../shared/assets/backgroundimg_header.svg";
import { SobreNos } from "../pages/sobreNos";
import ComoSurgiu from "../pages/comoSurgiu";
import TimeBusiness from "../pages/timeBC";
import { EscopoDeServico } from "../pages/escopoDeServico";
import Faq from "../pages/faq";
import { Contatos } from "../pages/contatos";

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
