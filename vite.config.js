import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Isso faz o mesmo que --host
    port: 5173   // Pode mudar a porta, se necessário
  }
})