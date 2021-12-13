'use strict';

var react = require('react');

const useMediaQuery = (queries, values, defaultValue) => {
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));
  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return values && values[index] || defaultValue;
  };
  const [value, setValue] = react.useState(getValue);
  react.useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));
    return () => mediaQueryLists.forEach((mql) => mql.removeEventListener("change", handler));
  }, []);
  return value;
};

module.exports = useMediaQuery;
