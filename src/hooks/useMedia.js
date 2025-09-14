import { useEffect, useState } from "react";
export const useMedia = (query) => {
  const [match, setMatch] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatch(m.matches);
    setMatch(m.matches);
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, [query]);
  return match;
};