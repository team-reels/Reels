import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
	    host: true,
	    watch: {
			usePolling: true
	    },
		proxy: {
			'/user_api': {
				target: 'http://localhost:8000',
				changeOrigin: true,
				secure: false,
			}
		}
	}
})
