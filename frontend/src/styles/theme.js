const theme = {
  colors: {
    primary: '#FFD166', // Amarelo Sol
    secondary: '#A8DADC', // Azul Claro
    accent: '#FF007F', // Rosa Choque
    success: '#28a745',
    error: '#dc3545',
    background: '#FFFFFF', // Branco
    darkBackground: '#000000', // Preto
    text: '#000000', // Preto para contraste
    lightText: '#A8DADC', // Azul Claro
    darkText: '#000000', // Preto
    border: '#FFD166', // Amarelo Sol
    lightBorder: '#A8DADC', // Azul Claro
    darkBorder: '#000000', // Preto
  },
  
  typography: {
    fontFamily: {
      primary: "'Poiret One', cursive",
      secondary: "'Poiret One', cursive",
      tertiary: "'Poiret One', cursive"
    },
    fontSize: {
      xs: '10pt',
      sm: '12pt',
      base: '14pt',
      lg: '16pt',
      xl: '18pt',
      '2xl': '20pt',
      '3xl': '24pt',
      '4xl': '28pt',
      '5xl': '36pt',
      '6xl': '48pt',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 600,
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    }
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
    '4xl': '4rem',
    '5xl': '6rem',
  },

  shadows: {
    none: 'none',
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
    none: '0',
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
  
  buttons: {
    primary: {
      background: '#FFD166',
      color: '#000000',
      hoverBackground: '#FF007F',
      hoverColor: '#FFFFFF',
      borderRadius: '0',
      padding: '15px 50px',
      fontSize: '15px',
      textTransform: 'uppercase',
      transition: '0.3s ease'
    },
    secondary: {
      background: 'transparent',
      color: '#000000',
      border: '2px solid #FFD166',
      hoverBackground: '#FFD166',
      hoverColor: '#000000',
      borderRadius: '0',
      padding: '15px 50px',
      fontSize: '15px',
      textTransform: 'uppercase',
      transition: '0.3s ease'
    }
  }
};

export default theme;
