import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

// Components
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App">
          <Header />
          <main style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <HeroSection />
            <ServicesSection />
            <GallerySection />
            <TestimonialsSection />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
