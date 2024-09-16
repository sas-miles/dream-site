import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";

export function initializeTheatre() {
  if (process.env.NODE_ENV === "development") {
    studio.initialize();
    studio.extend(extension);
  }
}
