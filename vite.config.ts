import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import obfuscatorPlugin from "vite-plugin-javascript-obfuscator";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // obfuscatorPlugin({
    //   options: {
    //     debugProtection: true,
    //     numbersToExpressions: true,
    //     simplify: true,
    //     stringArrayShuffle: true,
    //     splitStrings: true,
    //     stringArrayThreshold: 1,
    //   },
    // }),
  ],
});
