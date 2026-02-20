import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // of @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
  base: './', // DIT IS DE KEY: Dit zorgt dat alle paden relatief zijn
})