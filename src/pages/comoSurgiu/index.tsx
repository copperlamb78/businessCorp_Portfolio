import image from "../../shared/assets/comoSurgiu.png";

export default function ComoSurgiu() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-linear-to-r px-6 py-12">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
        {/* Texto */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center order-2 lg:order-1">
          <h1 className="text-[3.625rem] text-center  xl:text-[4.125rem] font-cocomat font-light text-[#f7eaad] mb-6 lg:mb-8">
            Como surgiu?
          </h1>
          <p className="text-sm lg:text-lg text-[#f7eaad] font-garet leading-relaxed text-justify font-light">
            Nossa consultoria surgiu a partir da vivência diária de nossos
            consultores, que, ao observarem pequenos empreendimentos em
            funcionamento, identificaram dificuldades de gestão que poderiam ser
            resolvidas com soluções simples e práticas da Administração.
            Percebemos que muitos empreendedores enfrentam desafios na gestão de
            seus negócios não por falta de dedicação, mas pela ausência de tempo
            para se capacitar ou pela dificuldade em saber por onde começar a
            gerir um negócio. Foi com esse propósito que desenvolvemos uma
            consultoria acessível, voltada para apoiar e fortalecer pequenos
            negócios por meio de melhorias organizacionais e administrativas com
            o mínimo possível de explicações burocráticas, pois procuramos
            estabelecer laços com os nossos clientes.
          </p>
        </div>

        {/* Imagem */}
        <div className="w-full lg:w-3/5 flex justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-sm lg:max-w-3xl">
            <img
              src={image}
              alt="Como surgiu"
              className="w-full h-auto rounded-lg object-cover transition-all duration-500 hover:scale-105 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
