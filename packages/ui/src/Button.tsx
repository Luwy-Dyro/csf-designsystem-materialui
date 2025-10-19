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
  /** Variante semántica. 'primary' es alias de 'primary-blue'. */
  variant?:
    | 'primary'
    | 'primary-blue'
    | 'primary-green'
    | 'secondary'
    | 'error'
    | 'info'
    | 'warning'
    | 'success'
    | 'neutro-black'
    | 'neutro-white';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  /**
   * Color por tokens (opcional). Si se define, tiene prioridad sobre 'variant'.
   * Ej.: 'primary-blue', 'primary-green', 'alert-error', 'neutro-black', ...
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
  // Base CSS (no dependemos de Tailwind para estilos esenciales)
  const weightClass = {
    regular: 'csf-btn--weight-regular',
    medium: 'csf-btn--weight-medium',
    semibold: 'csf-btn--weight-semibold',
    bold: 'csf-btn--weight-bold',
  }[weight];

  const sizeClass = {
    small: 'csf-btn--sm',
    medium: 'csf-btn--md',
    large: 'csf-btn--lg',
  }[size];

  // Si usa bgToken/bgLevel, exponemos variables inline para customizar el color
  const isNeutroWhite = bgToken?.startsWith('neutro-white');
  const customColorStyle = bgToken
    ? ({
        ['--btn-bg' as any]: `var(--color-${bgToken}-${bgLevel})`,
        ['--btn-hover-bg' as any]: `var(--color-${bgToken}-${hoverLevel})`,
      } as React.CSSProperties)
    : undefined;

  const customColorClass = bgToken
    ? `csf-btn--custom ${isNeutroWhite ? 'csf-btn--custom-darktext' : ''}`
    : '';

  // Variantes estáticas para evitar dependencia del escaneo de Tailwind
  const normalizedVariant = variant === 'primary' ? 'primary-blue' : variant;
  const variantClassMap: Record<Exclude<ButtonProps['variant'], undefined>, string> = {
    'primary-blue': 'csf-btn--primary-blue',
    'primary-green': 'csf-btn--primary-green',
    secondary: 'csf-btn--secondary',
    error: 'csf-btn--error',
    info: 'csf-btn--info',
    warning: 'csf-btn--warning',
    success: 'csf-btn--success',
    'neutro-black': 'csf-btn--neutro-black',
    'neutro-white': 'csf-btn--neutro-white',
    primary: 'csf-btn--primary-blue', // no se usa realmente tras normalize
  } as any;

  const variantClass = bgToken ? '' : variantClassMap[normalizedVariant];

  return (
    <button
      type="button"
      className={`csf-btn ${weightClass} ${sizeClass} ${variantClass} ${customColorClass}`}
      style={customColorStyle}
      {...props}
    >
      {children}
    </button>
  );
};