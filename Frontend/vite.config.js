import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ❌ REMOVE this line:
// import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react()], // ✅ Only use react plugin
})
