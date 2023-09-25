"use client";

import { useSearchStore } from "../store";
import Card from "./Card";

const Cards = () => {
  const results = useSearchStore((state) => state.results);
  return (
    <>
      {results.length !== 0 &&
        results.map((med, i) => <Card key={i} {...med} />)}
    </>
  );
};

export default Cards;
