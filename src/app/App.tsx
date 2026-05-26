import { Flex } from "@radix-ui/themes/dist/cjs/components/index.js";
import { Header } from "../pages/header";
import backgroundImg from "../shared/assets/backgroundimg_header.svg";
import { SobreNos } from "../pages/sobreNos";

export function App() {
  return (
    <Flex direction="column" gap="0" className="w-full h-full bg-[#a86b1d] ">
      <Header />

      {/* Hero / Home Section */}
      <section
        id="inicio"
        className="w-full py-40 px-8"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "0px",
          backgroundRepeat: "no-repeat",
        }}
      ></section>

      {/* Sobre nós Section */}
      <section id="sobre-nos" className="w-full">
        <SobreNos />
      </section>

      {/* Time BC Section */}
      <section id="time-bc" className="w-full py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Time BC</h2>
          <p className="text-gray-600 text-lg">Conheça nosso time aqui.</p>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="w-full py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Serviços</h2>
          <p className="text-gray-600 text-lg">Conheça nossos serviços.</p>
        </div>
      </section>

      {/* Contatos Section */}
      <section id="contatos" className="w-full py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Contatos</h2>
          <p className="text-gray-600 text-lg">Entre em contato conosco.</p>
        </div>
      </section>
    </Flex>
  );
}
