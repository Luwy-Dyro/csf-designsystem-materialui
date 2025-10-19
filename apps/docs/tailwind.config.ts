import type { Config } from 'tailwindcss'

// Tailwind v4: seguimos usando content para indicar el escaneo de clases.
// Incluye app local + paquete UI (fuentes y build) para que se generen utilidades usadas por los componentes.
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		// Paquete UI durante el desarrollo local
		'../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
		// Build distribuido del paquete UI (cuando se consume desde node_modules)
		'node_modules/@luwy-dyro/ui/dist/**/*.{js,jsx,ts,tsx}',
	],
} satisfies Config