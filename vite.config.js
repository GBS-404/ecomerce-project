import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Adicione um alias para resolver o módulo "react-icons/bs"
      "react-icons/bs": "react-icons/bs",
      "styled-components": "styled-components",
    },
  },
});
