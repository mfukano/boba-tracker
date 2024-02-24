import "$std/dotenv/load.ts"
import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts" 

export default defineConfig({
  port: 10101,
  plugins: [tailwind()], 
});