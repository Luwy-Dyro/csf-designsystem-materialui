
// // import type { Config } from 'tailwindcss'

// // Nota: la ruta anterior a packages/ui era incorrecta (../packages => apps/packages).
// // Desde apps/docs necesitamos subir dos niveles para llegar a packages/ui.
// // También añadimos el dist del paquete por si se consume el build ya empaquetado.
// export default {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//     '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
//     // Si por alguna razón solo se importa el build distribuido:
//     '../../packages/ui/dist/**/*.{js,ts,jsx,tsx,js}',
//     // (Opcional) incluir stories si quieres que utilidades usadas allí también entren
//     '../../packages/ui/src/**/*.{stories,story}.{js,ts,jsx,tsx}',
//   ],
//   safelist: [
//     // Asegura variantes clave aunque no se detecten en el escaneo (ejemplo)
//     'bg-blue-50','bg-blue-100','bg-blue-200','bg-blue-300','bg-blue-400','bg-blue-500','bg-blue-600','bg-blue-700','bg-blue-800','bg-blue-900',
//     'hover:bg-blue-50','hover:bg-blue-100','hover:bg-blue-200','hover:bg-blue-300','hover:bg-blue-400','hover:bg-blue-500'
//   ]
// } satisfies Config