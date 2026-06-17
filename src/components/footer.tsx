import { useState } from "react";
import {
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
  EnvelopeSimple,
  InstagramLogo,
  X,
  ClipboardText,
  Check,
} from "phosphor-react";

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nascimentogabriel.2004@gmail.com");
    setEmailCopied(true);
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000); // Volta ao estado original após 2 segundos
  };

  return (
    <footer className="w-full py-12 flex flex-col items-center justify-center font-montserrat bg-transparent relative z-20">
      {/* Textos Principais */}
      <div className="max-w-4xl px-6 flex flex-col items-center text-center gap-1 mb-6">
        <p className="text-[#f7eaad] font-bold text-[14px] sm:text-[16px] tracking-wide">
          Website desenvolvido por Antonio Gabriel.
        </p>
        <p className="text-[#f2e3b0] font-medium text-[12px] sm:text-[14px]">
          Desenvolvedor Full-Stack.
        </p>
      </div>

      {/* Botões */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-2.5 border-[3px] border-[#563512] bg-[#f8f3ea] text-[#563512] font-black rounded-full hover:bg-[#563512] hover:text-[#f8f3ea] hover:border-[#f8f3ea] transition-colors shadow-lg uppercase tracking-widest text-[12px] sm:text-[14px] cursor-pointer"
        >
          Contato
        </button>
        <a
          href="https://antoniogabriel.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-2.5 border-[3px] border-[#f8f3ea] bg-transparent text-[#f8f3ea] font-black rounded-full hover:bg-[#f8f3ea] hover:text-[#563512] transition-colors shadow-lg uppercase tracking-widest text-[12px] sm:text-[14px] flex items-center justify-center cursor-pointer"
        >
          Outros Projetos
        </a>
      </div>

      {/* Modal de Contato */}
      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="rounded-[28px] w-full max-w-sm border-[3px] border-[#563512] bg-[#f8f3ea] flex flex-col font-montserrat shadow-2xl relative overflow-hidden">
            {/* Header do Modal */}
            <div className="bg-[#563512] py-4 px-4 flex items-center justify-center relative">
              <h2 className="text-white font-black tracking-widest uppercase leading-none text-[20px] sm:text-[24px]">
                Contato
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-4 text-white hover:text-[#dfc79b] transition-colors cursor-pointer"
                aria-label="Fechar modal"
              >
                <X size={24} weight="bold" />
              </button>
            </div>

            {/* Corpo do Modal (Links) */}
            <div className="p-5 flex flex-col gap-3 relative z-10">
              <a
                href="https://github.com/copperlamb78"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border-2 border-[#e3cca1] bg-transparent hover:bg-[#e3cca1]/40 transition-colors text-[#563512] font-bold text-[14px]"
              >
                <GithubLogo size={24} weight="fill" color="#563512" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/antoniofalcaonascimento/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border-2 border-[#e3cca1] bg-transparent hover:bg-[#e3cca1]/40 transition-colors text-[#563512] font-bold text-[14px]"
              >
                <LinkedinLogo size={24} weight="fill" color="#563512" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://wa.me/5575992197406"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border-2 border-[#e3cca1] bg-transparent hover:bg-[#e3cca1]/40 transition-colors text-[#563512] font-bold text-[14px]"
              >
                <WhatsappLogo size={24} weight="fill" color="#563512" />
                <span>WhatsApp</span>
              </a>
              <div className="flex gap-2 w-full">
                <a
                  href="mailto:nascimentogabriel.2004@gmail.com"
                  className="flex-1 flex items-center gap-3 p-3 rounded-xl border-2 border-[#e3cca1] bg-transparent hover:bg-[#e3cca1]/40 transition-colors text-[#563512] font-bold text-[14px]"
                >
                  <EnvelopeSimple size={24} weight="fill" color="#563512" />
                  <span>E-mail</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  disabled={emailCopied}
                  title="Copiar E-mail"
                  className="flex items-center justify-center p-3 rounded-xl border-2 border-[#e3cca1] bg-transparent hover:bg-[#e3cca1]/40 transition-colors text-[#563512] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {emailCopied ? (
                    <Check size={24} weight="bold" className="text-green-600" />
                  ) : (
                    <ClipboardText size={24} weight="fill" color="#563512" />
                  )}
                </button>
              </div>
              <a
                href="https://www.instagram.com/antoniobil.2014/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl border-2 border-[#e3cca1] bg-transparent hover:bg-[#e3cca1]/40 transition-colors text-[#563512] font-bold text-[14px]"
              >
                <InstagramLogo size={24} weight="fill" color="#563512" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
