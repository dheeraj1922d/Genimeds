"use client";

// import Filter from "../../components/Filter";

import Card from "../../components/Card";
import { useSearchStore } from "../../store";

const page = () => {
  const results = useSearchStore((state) => state.results);
  return (
    <div>
      {/* <Filter /> */}
      <div className="">
        {results.length !== 0 ? (
          results.map((med, i) => <Card key={i} {...med} />)
        ) : (
          <h1 className="text-5xl text-center relative top-52">Search our store</h1>
        )}
      </div>
    </div>
  );
};

export default page;
