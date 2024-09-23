import { getProject, IProject } from "@theatre/core";
import type { ISheet } from "@theatre/core";
import studio from "@theatre/studio";
import { useEffect, useRef } from "react";

// Import your project state
import myProjectState from "src/store/Hadron.theatre-project-state.json";

export function useTheatre() {
  const projectRef = useRef<IProject | null>(null);
  const sheetRef = useRef<ISheet | null>(null);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENABLE_THEATRE_STUDIO === "true") {
      studio.initialize();
      projectRef.current = getProject("My Project");
    } else {
      projectRef.current = getProject("My Project", { state: myProjectState });
    }

    sheetRef.current = projectRef.current.sheet("My Sheet");

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return { project: projectRef.current, sheet: sheetRef.current };
}
