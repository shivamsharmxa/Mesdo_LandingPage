// Design System Constants

// Colors (using CSS custom properties)
export const COLORS = {
  primary: {
    50: "var(--primary-1)",
    500: "var(--primary-5)",
    600: "var(--primary-6)",
    DEFAULT: "hsl(var(--primary))",
  },
  neutral: {
    1: "var(--neutral-1)",
    6: "var(--neutral-6)",
    7: "var(--neutral-7)",
    8: "var(--neutral-8)",
    9: "var(--neutral-9)",
  },
  semantic: {
    error: "var(--dust-red-5)",
    success: "#10b981",
    warning: "#f59e0b",
  },
};

// Typography
export const TYPOGRAPHY = {
  fontFamily: {
    sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
    display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
};

// Spacing
export const SPACING = {
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
  "3xl": "4rem",
  "4xl": "6rem",
  "5xl": "8rem",
};

// Breakpoints
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Common component sizes
export const COMPONENT_SIZES = {
  button: {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 py-2",
    lg: "h-12 px-6 text-lg",
  },
  input: {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-3 py-2",
    lg: "h-12 px-4 text-lg",
  },
};

// Layout constraints
export const LAYOUT = {
  maxWidth: {
    container: "1440px",
    content: "1140px",
    text: "65ch",
  },
  section: {
    padding: {
      mobile: "py-16 px-4",
      desktop: "py-24 px-8",
    },
  },
};

// Border radius
export const BORDER_RADIUS = {
  sm: "0.375rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
  full: "9999px",
};

// Shadows
export const SHADOWS = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
};
