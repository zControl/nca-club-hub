import tailwindcss from "@tailwindcss/vite"
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from "fs"
import path, { resolve } from "path"
import { defineConfig } from 'vite'

function githubPages404Plugin() {
  return {
    name: 'github-pages-404',
    closeBundle() {
      const distDir = resolve(__dirname, 'dist')
      const indexHtml = readFileSync(resolve(distDir, 'index.html'), 'utf-8')
      writeFileSync(resolve(distDir, '404.html'), indexHtml)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react(), githubPages404Plugin(), tailwindcss()],
  base: process.env.NODE_ENV === "production" ? "/nca-club-hub/" : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
