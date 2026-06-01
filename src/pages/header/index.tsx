import { Flex, Text } from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";
import { List } from "phosphor-react";
import logo from "../../shared/assets/businessCorpLogo.svg";
import {
  NAVIGATION_ITEMS,
  navigateToSection,
  getCurrentSection,
} from "../../shared/utils/navigation";

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(getCurrentSection());
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY.current;
        const isNearBottom =
          window.innerHeight + currentScrollY >=
          document.documentElement.scrollHeight - 50;

        if (currentScrollY <= 0 || isNearBottom) {
          setIsHeaderVisible(true);
        } else if (delta > 5 && currentScrollY > 80) {
          setIsHeaderVisible(false);
        } else if (delta < -1) {
          setIsHeaderVisible(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    setIsMenuOpen(false);
    navigateToSection(id);
  };

  return (
    <Flex
      direction="row"
      gap="9"
      className={`sticky top-0 z-50 items-center justify-center bg-[#f7eaad] h-auto w-full px-4 py-6 md:px-8 md:py-8 transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative mx-auto flex w-full max-w-[1440px] items-center gap-4 md:justify-center md:gap-9">
        <div className="flex flex-1 items-center justify-between md:flex-none md:gap-4">
          <button
            type="button"
            onClick={() => navigateToSection("inicio")}
            className="cursor-pointer"
            aria-label="Navigate to home"
          >
            <img className="h-16" src={logo} alt="Business CORP Logo" />
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsMenuOpen((previous) => !previous)}
              className={`inline-flex items-center justify-center rounded-3xl border-2 border-[#a86b1d] bg-transparent p-2 text-[#6d430e] transition-colors hover:text-[#8b5a2b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5a2b] md:hidden ${
                isMenuOpen ? "hidden" : ""
              }`}
              aria-expanded={isMenuOpen}
              aria-label="Abrir menu"
            >
              <List size={24} weight="bold" />
            </button>

            <div
              className={`absolute right-0 top-full z-20 mt-2 w-48 overflow-hidden rounded-3xl transition-[max-height,opacity,padding] duration-300 md:hidden ${
                isMenuOpen
                  ? "max-h-[420px] border border-[#a86b1d] bg-[#f7eaad]/95 shadow-sm shadow-[#a86b1d]/10 opacity-100 py-4 pointer-events-auto"
                  : "max-h-0 border-transparent bg-transparent shadow-none opacity-0 py-0 pointer-events-none"
              }`}
            >
              <nav className="flex flex-col gap-2 px-4">
                {NAVIGATION_ITEMS.map(({ id, label }) => (
                  <Text
                    key={id}
                    onClick={() => handleNavigation(id)}
                    className={`text-base text-[#6d430e] pb-0.5 cursor-pointer rounded-2xl px-2 py-3 transition-all hover:text-[#8b5a2b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5a2b]/40 ${
                      activeSection === id ? "font-bold" : ""
                    }`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        handleNavigation(id);
                      }
                    }}
                  >
                    {label}
                  </Text>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="relative hidden items-center gap-8 border-[#a86b1d] border-2 p-2 pl-6 pr-6 rounded-3xl md:flex">
          <div className="absolute left-6 right-6 bottom-3 h-[1.5px] bg-[#a86b1d]" />
          {NAVIGATION_ITEMS.map(({ id, label }) => (
            <Text
              key={id}
              onClick={() => handleNavigation(id)}
              className={`relative z-10 text-lg text-[#6d430e] pb-0.5 cursor-pointer transition-all hover:text-[#8b5a2b] hover:scale-105 ${
                activeSection === id ? "font-bold" : ""
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleNavigation(id);
                }
              }}
            >
              {label}
            </Text>
          ))}
        </div>
      </div>
    </Flex>
  );
}
