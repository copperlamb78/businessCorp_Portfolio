/**
 * Navigation utilities for anchor-based routing
 */

export const NAVIGATION_ITEMS = [
  { id: "sobre-nos", label: "Sobre nós" },
  { id: "time-bc", label: "Time BC" },
  { id: "servicos", label: "Serviços" },
  { id: "duvidas", label: "Dúvidas" },
  { id: "contatos", label: "Contatos" },
] as const;

/**
 * Navigate to a section using hash routing
 */
export const navigateToSection = (sectionId: string) => {
  window.location.hash = sectionId;

  // Scroll the element into view (for smooth UX)
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 50);
};

/**
 * Get the current active section from URL hash
 */
export const getCurrentSection = (): string => {
  return window.location.hash.replace("#", "") || "";
};

/**
 * Check if a section is currently active
 */
export const isSectionActive = (sectionId: string): boolean => {
  return getCurrentSection() === sectionId;
};
