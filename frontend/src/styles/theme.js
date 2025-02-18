const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    accent: '#ffc107',
    success: '#28a745',
    error: '#dc3545',
    background: '#ffffff',
    text: '#212529',
    lightText: '#6c757d',
    darkText: '#343a40',
    border: '#dee2e6',
    lightBorder: '#e9ecef',
    darkBorder: '#ced4da',
  },
  
  typography: {
    fontFamily: {
      primary: "'Inter', sans-serif",
      secondary: "'Poppins', sans-serif",
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },

  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    laptop: '992px',
    desktop: '1200px',
  },

  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
  },

  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
  },

  transitions: {
    default: '0.3s ease',
    fast: '0.15s ease',
    slow: '0.5s ease',
  },

  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },

  zIndex: {
    hide: -1,
    base: 0,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
  },
};

export default theme;
