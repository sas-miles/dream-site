/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  transpilePackages: ["three"],
  images: {
    domains: ["cdn.sanity.io", "via.placeholder.com"],
  },
};

export default config;
