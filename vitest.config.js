import path from "node:path";
import process from "node:process";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  test: {
    alias: {
      "@tests": path.resolve(import.meta.dirname, "tests"),
    },
    coverage: {
      enabled: true,
      include: ["src/**"],
      reporter: process.env.CI ? "clover" : ["text-summary", "html"],
    },
    dir: "src",
    globals: true,
    outputFile: "./junit.xml",
    reporters: process.env.CI ? ["junit", "default"] : "default",
  },
});
