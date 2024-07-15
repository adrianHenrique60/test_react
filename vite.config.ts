import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Especifica que o servidor deve escutar em todas as interfaces de rede
    port: 3000,       // Porta que você quer que o servidor escute
  }
})
