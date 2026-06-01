import { WhatsappLogo, EnvelopeSimple, InstagramLogo } from "phosphor-react";

export function Contatos() {
  const contacts = [
    {
      name: "Consultora Maria",
      phone: "75 9 9155-7418",
      icon: WhatsappLogo,
    },
    {
      name: "Consultora Ingrid",
      phone: "75 9 8185-0114",
      icon: WhatsappLogo,
    },
    {
      name: "Consultor Gabriel",
      phone: "75 9 8327-8662",
      icon: WhatsappLogo,
    },
  ];

  const email = "businesscorpcontato@gmail.com";
  const instagram = "businesscorpconsultoria";

  return (
    <section className="w-full bg-[#f7eaad] py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background pattern (subtle) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hexagon-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M50,10 L90,35 L90,85 L50,110 L10,85 L10,35 Z"
                stroke="#8b5a2b"
                strokeWidth="2"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="1000" height="800" fill="url(#hexagon-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12 md:gap-14 lg:gap-16">
          {/* Left column - Main message */}
          <div className="flex-1 lg:text-left w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-cocomat font-semibold text-[#a86b1d] leading-tight tracking-tighter">
              Quer ter a
              <br />
              experiência de
              <br />
              gerir seu negócio
              <br />
              com eficiência?
              <br />
              Fale conosco!
            </h1>
          </div>

          {/* Right column - Contact information */}
          <div className="flex-1 w-full max-w-md">
            {/* WhatsApp contacts */}
            <div className="space-y-5 mb-8 flex flex-col">
              <h3 className="sr-only">Contatos WhatsApp</h3>
              {contacts.map((contact, i) => (
                <a
                  key={i}
                  href={`https://wa.me/55${contact.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[#a86b1d] hover:text-[#8b5a2b] transition-colors group"
                >
                  <WhatsappLogo
                    size={28}
                    className="flex-shrink-0 sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#a86b1d] group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <p className="font-cocomat font-semibold text-sm md:text-base lg:text-lg">
                      {contact.name}
                    </p>
                    <p className="font-garet font-medium text-base md:text-lg lg:text-xl">
                      {contact.phone}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-4 text-[#a86b1d] hover:text-[#8b5a2b] transition-colors group mb-8"
            >
              <EnvelopeSimple
                size={28}
                className="flex-shrink-0 sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#a86b1d] group-hover:scale-110 transition-transform"
              />
              <p className="font-garet font-medium text-base md:text-lg lg:text-xl">
                {email}
              </p>
            </a>

            {/* Instagram */}
            <a
              href={`https://instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-[#a86b1d] hover:text-[#8b5a2b] transition-colors group"
            >
              <InstagramLogo
                size={28}
                className="flex-shrink-0 sm:w-8 sm:h-8 md:w-9 md:h-9 text-[#a86b1d] group-hover:scale-110 transition-transform"
              />
              <p className="font-garet font-medium text-base md:text-lg lg:text-xl">
                @{instagram}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
