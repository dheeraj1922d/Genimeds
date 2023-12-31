import { create } from "zustand";
import { meds } from "../public/data";

export const useSearchStore = create((set) => ({
  results: [],
  search: (e) => {
    const typeSearch = e.target.value.toLowerCase();
    const filteredMeds = meds.filter(
      (med) =>
        (med.name.toLowerCase().startsWith(typeSearch) && typeSearch !== "") ||
        (med.alt.toLowerCase().startsWith(typeSearch) && typeSearch !== "")
    );
    set({ results: filteredMeds });
  },
}));
