import { useEffect, useMemo, useState } from "react";

export default function useMediaQuery(query: string) {
  const mediaQueryList = useMemo(() => window.matchMedia(query), [query]);
  const [isMatch, setIsMatch] = useState(mediaQueryList.matches);

  useEffect(() => {
    const handleChange = (e: MediaQueryListEvent) => setIsMatch(e.matches);

    mediaQueryList.addEventListener("change", handleChange);

    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [mediaQueryList]);

  return isMatch;
}
