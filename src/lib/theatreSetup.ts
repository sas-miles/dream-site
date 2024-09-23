import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import { env } from "~/env.js";

export function initializeTheatre() {
  const isDevelopment =
    env.NEXT_PUBLIC_VERCEL_ENV === "development" ||
    (typeof window !== "undefined" && window.location.hostname === "localhost");

  if (isDevelopment && env.NEXT_PUBLIC_ENABLE_THEATRE_STUDIO === "true") {
    console.log("Initializing Theatre.js");
    studio.initialize();
    studio.extend(extension);
  } else {
    console.log("Theatre.js not initialized due to environment settings");
    console.log("Is Development:", isDevelopment);
    console.log(
      "NEXT_PUBLIC_ENABLE_THEATRE_STUDIO:",
      env.NEXT_PUBLIC_ENABLE_THEATRE_STUDIO,
    );
  }
}
