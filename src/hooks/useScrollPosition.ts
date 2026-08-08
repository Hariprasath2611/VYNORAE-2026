import { useState, useEffect } from "react";

export function useScrollPosition(threshold: number = 300) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [threshold]);

  return isScrolled;
}
