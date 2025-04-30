import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

export default defineConfig({
  plugins: [
    tailwind(twindConfig),
  ],
});