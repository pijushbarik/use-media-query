import { useState, useEffect } from 'react';

const useMediaQuery = (queries, values, defaultValue) => {
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));
  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return values && values[index] || defaultValue;
  };
  const [value, setValue] = useState(getValue);
  useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));
    return () => mediaQueryLists.forEach((mql) => mql.removeEventListener("change", handler));
  }, []);
  return value;
};

export { useMediaQuery as default };
