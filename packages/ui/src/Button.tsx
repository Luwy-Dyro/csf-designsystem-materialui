import React from 'react';

type TokenFamily =
  | 'primary-blue'
  | 'primary-green'
  | 'alert-error'
  | 'alert-info'
  | 'alert-warning'
  | 'alert-success'
  | 'neutro-white'
  | 'neutro-black';

type Tone = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variante semántica (retrocompatibilidad). 'primary' es alias de 'primary-blue'. */
  variant?: 'primary' | 'primary-blue' | 'primary-green' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  /**
   * Familia de token para el fondo del botón. Si se define, tiene prioridad sobre 'variant' para el color.
   * Ejemplos: 'primary-blue', 'primary-green', 'alert-error', 'neutro-black', etc.
   */
  bgToken?: TokenFamily;
  /** Nivel de la escala (50..900). Por defecto 600. */
  bgLevel?: Tone;
  /** Nivel de hover (50..900). Por defecto 700. */
  hoverLevel?: Tone;
  /** Peso tipográfico sugerido: regular(400), medium(500), semibold(600), bold(700). */
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  bgToken,
  bgLevel = 600,
  hoverLevel = 700,
  weight = 'regular',
  ...props
}: ButtonProps) => {

  const weightClass = {
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  }[weight];

  const baseClasses = `${weightClass} rounded-lg transition-colors duration-200`;


  // Si se define bgToken/bgLevel, usamos clases dinámicas de Tailwind basadas en tokens.
  const dynamicColorClasses = bgToken
    ? `bg-${bgToken}-${bgLevel} hover:bg-${bgToken}-${hoverLevel} text-white`
    : '';

  const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
    // 'primary' = alias de blue
    primary: 'bg-primary-blue-600 text-white hover:bg-primary-blue-700',
    'primary-blue': 'bg-primary-blue-600 text-white hover:bg-primary-blue-700',
    'primary-green': 'bg-primary-green-600 text-white hover:bg-primary-green-700',
    secondary: 'bg-gray-500 text-white hover:bg-gray-700',
  };

  const sizeClasses = {
    small: 'text-sm py-1 px-2',
    medium: 'text-base py-2 px-4',
    large: 'text-lg py-3 px-6',
  };
  // -----------------------------

  // Selección final de clases de color: prioridad a bgToken si existe
  const colorClasses = dynamicColorClasses || variantClasses[variant];

  return (
    <button
      type="button"
      className={`${baseClasses} ${colorClasses} ${sizeClasses[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};