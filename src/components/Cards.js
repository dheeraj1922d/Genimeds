"use client";

import { useContext } from "react";
import Card from "./Card";
import { SearchCtx } from "../SearchContext";

const Cards = () => {
  const { results } = useContext(SearchCtx);
  return (
    <>
      {results.length !== 0 &&
        results.map((med, i) => <Card key={i} {...med} />)}
    </>
  );
};

export default Cards;
