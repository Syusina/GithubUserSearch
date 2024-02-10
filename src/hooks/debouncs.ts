import { useEffect, useState } from "react"

export const useDebounce = (value: string, delay: number = 300): string => {
  const [debounce, setDebounse] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounse(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounce;
};