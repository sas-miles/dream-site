import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";

export function initializeTheatre() {
  if (
    process.env.NODE_ENV === "development" &&
    process.env.ENABLE_THEATRE_STUDIO === "true"
  ) {
    studio.initialize();
    studio.extend(extension);
  }
}
