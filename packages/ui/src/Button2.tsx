// packages/ui/src/Button.tsx

import React from 'react';

// Definimos las propiedades que aceptará el botón
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * ¿Cuál es la variante de color principal?
   */
  variant?: 'primary' | 'secondary';
  /**
   * ¿Qué tan grande debería ser el botón?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Contenido del botón
   */
  children: React.ReactNode;
}

/**
 * Componente de botón principal para interacción del usuario
 */
export const Button2 = ({
  variant = 'primary',
  size = 'medium',
  children,
  ...props
}: ButtonProps) => {
  // Estilos base que se aplican a todos los botones
  const baseClasses = 'font-bold rounded-lg transition-colors duration-200';

  // Clases específicas para las variantes de color
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-700', // Clases de ejemplo
    secondary: 'bg-gray-500 text-white hover:bg-gray-700',
  };

  // Clases específicas para los tamaños
  const sizeClasses = {
    small: 'text-sm py-1 px-2',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6',
  };

  return (
    <button
      type="button"
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} `}
      {...props}
    >
      {children}
    </button>
  );
};