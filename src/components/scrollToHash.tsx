import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");

    // wait until DOM is painted
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return;
    }

    // fallback if component mounts slightly later
    setTimeout(() => {
      const delayedEl = document.getElementById(id);
      delayedEl?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [location]);

  return null;
};

export default ScrollToHash;
