import { useEffect } from "react";
import { initializeTheatre } from "~/lib/theatreSetup";

export function useTheatre() {
  useEffect(() => {
    initializeTheatre();
  }, []);
}
