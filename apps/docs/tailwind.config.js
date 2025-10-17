/**
 * Tailwind Config (v4)
 * Mantén este archivo lo más simple posible. En v4 podrías incluso omitirlo,
 * pero aquí definimos content y una safelist para garantizar generación de utilidades.
 * @type {import('tailwindcss').Config}
 */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    // Código fuente de la librería UI dentro del monorepo
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
    // Build distribuido (por si se consumen bundles ya compilados)
    '../../packages/ui/dist/**/*.{js,ts,jsx,tsx,js}',
    // Stories (opcional, para que clases solo usadas ahí no se purguen)
    '../../packages/ui/src/**/*.{stories,story}.{js,ts,jsx,tsx}',
  ],
  safelist: [
    // Compat: antiguas clases blue
    'bg-blue-50','bg-blue-100','bg-blue-200','bg-blue-300','bg-blue-400','bg-blue-500','bg-blue-600','bg-blue-700','bg-blue-800','bg-blue-900',
    'hover:bg-blue-50','hover:bg-blue-100','hover:bg-blue-200','hover:bg-blue-300','hover:bg-blue-400','hover:bg-blue-500',
    // Nuevas escalas primary-blue y primary-green
    'bg-primary-blue-50','bg-primary-blue-100','bg-primary-blue-200','bg-primary-blue-300','bg-primary-blue-400','bg-primary-blue-500','bg-primary-blue-600','bg-primary-blue-700','bg-primary-blue-800','bg-primary-blue-900',
    'hover:bg-primary-blue-50','hover:bg-primary-blue-100','hover:bg-primary-blue-200','hover:bg-primary-blue-300','hover:bg-primary-blue-400','hover:bg-primary-blue-500','hover:bg-primary-blue-600','hover:bg-primary-blue-700',
    'bg-primary-green-50','bg-primary-green-100','bg-primary-green-200','bg-primary-green-300','bg-primary-green-400','bg-primary-green-500','bg-primary-green-600','bg-primary-green-700','bg-primary-green-800','bg-primary-green-900',
    'hover:bg-primary-green-50','hover:bg-primary-green-100','hover:bg-primary-green-200','hover:bg-primary-green-300','hover:bg-primary-green-400','hover:bg-primary-green-500','hover:bg-primary-green-600','hover:bg-primary-green-700',
    // Alert scales
    'bg-alert-error-50','bg-alert-error-100','bg-alert-error-200','bg-alert-error-300','bg-alert-error-400','bg-alert-error-500','bg-alert-error-600','bg-alert-error-700','bg-alert-error-800','bg-alert-error-900',
    'hover:bg-alert-error-50','hover:bg-alert-error-100','hover:bg-alert-error-200','hover:bg-alert-error-300','hover:bg-alert-error-400','hover:bg-alert-error-500','hover:bg-alert-error-600','hover:bg-alert-error-700',
    'bg-alert-info-50','bg-alert-info-100','bg-alert-info-200','bg-alert-info-300','bg-alert-info-400','bg-alert-info-500','bg-alert-info-600','bg-alert-info-700','bg-alert-info-800','bg-alert-info-900',
    'hover:bg-alert-info-50','hover:bg-alert-info-100','hover:bg-alert-info-200','hover:bg-alert-info-300','hover:bg-alert-info-400','hover:bg-alert-info-500','hover:bg-alert-info-600','hover:bg-alert-info-700',
    'bg-alert-warning-50','bg-alert-warning-100','bg-alert-warning-200','bg-alert-warning-300','bg-alert-warning-400','bg-alert-warning-500','bg-alert-warning-600','bg-alert-warning-700','bg-alert-warning-800','bg-alert-warning-900',
    'hover:bg-alert-warning-50','hover:bg-alert-warning-100','hover:bg-alert-warning-200','hover:bg-alert-warning-300','hover:bg-alert-warning-400','hover:bg-alert-warning-500','hover:bg-alert-warning-600','hover:bg-alert-warning-700',
    'bg-alert-success-50','bg-alert-success-100','bg-alert-success-200','bg-alert-success-300','bg-alert-success-400','bg-alert-success-500','bg-alert-success-600','bg-alert-success-700','bg-alert-success-800','bg-alert-success-900',
    'hover:bg-alert-success-50','hover:bg-alert-success-100','hover:bg-alert-success-200','hover:bg-alert-success-300','hover:bg-alert-success-400','hover:bg-alert-success-500','hover:bg-alert-success-600','hover:bg-alert-success-700',
    // Neutrals (por si pintas fondos con blancos/negros tokenizados)
    'bg-neutro-white-50','bg-neutro-white-100','bg-neutro-white-200','bg-neutro-white-300','bg-neutro-white-400','bg-neutro-white-500','bg-neutro-white-600','bg-neutro-white-700','bg-neutro-white-800','bg-neutro-white-900',
    'bg-neutro-black-50','bg-neutro-black-100','bg-neutro-black-200','bg-neutro-black-300','bg-neutro-black-400','bg-neutro-black-500','bg-neutro-black-600','bg-neutro-black-700','bg-neutro-black-800','bg-neutro-black-900'
  ]
};