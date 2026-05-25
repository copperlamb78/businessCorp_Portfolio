import { Flex, Text } from "@radix-ui/themes";
import { useState, useEffect } from "react";
import logo from "../../shared/assets/businessCorpLogo.svg";
import {
  NAVIGATION_ITEMS,
  navigateToSection,
  getCurrentSection,
} from "../../shared/utils/navigation";

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Listen for hash changes
    const handleHashChange = () => {
      setActiveSection(getCurrentSection());
    };

    // Set initial active section
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <Flex
      direction="row"
      gap="9"
      className="items-center justify-center bg-[#f7eaad] h-auto w-full p-8"
    >
      {/* Wrapper centralizado */}
      <div className="mx-auto flex items-center gap-9">
        {/* Logo */}
        <button
          onClick={() => navigateToSection("inicio")}
          className="cursor-pointer"
          aria-label="Navigate to home"
        >
          <img className="h-16" src={logo} alt="Business CORP Logo" />
        </button>

        {/* Navigation Menu */}
        <Flex
          direction="row"
          gap="8"
          className="relative items-center border-[#a86b1d] border-2 p-2 pl-6 pr-6 rounded-3xl"
        >
          <div className="absolute left-6 right-6 bottom-3 h-[1.5px] bg-[#a86b1d]" />
          {NAVIGATION_ITEMS.map(({ id, label }) => (
            <Text
              key={id}
              onClick={() => navigateToSection(id)}
              className={`relative z-10 text-lg text-[#6d430e] pb-0.5 cursor-pointer transition-all hover:text-[#8b5a2b] hover:scale-105 ${
                activeSection === id ? "font-bold" : ""
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  navigateToSection(id);
                }
              }}
            >
              {label}
            </Text>
          ))}
        </Flex>
      </div>
    </Flex>
  );
}
