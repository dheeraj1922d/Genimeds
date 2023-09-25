"use client";

import { useState, createContext } from "react";
import { meds } from "../public/data";

export const SearchCtx = createContext(null);

export default function SearchContext({ children }) {
  const [results, setResults] = useState([]);

  const names = meds.map((medicine) => {
    return {
      name: medicine.name,
      alt: medicine.alt,
    };
  });

  const searchBar = (e) => {
    const typeSearch = e.target;
    const b = names.filter((meds) => meds.name.startsWith(typeSearch.value));

    // console.log(b);

    for (const med of meds) {
      try {
        const rex = new RegExp(typeSearch.value, "g");
        if (med.name.match(rex) && typeSearch.value !== "") {
          setResults(b);
          return;
        } else setResults([]);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <SearchCtx.Provider value={{ results, searchBar }}>
      {children}
    </SearchCtx.Provider>
  );
}
