import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as S from './styles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Início', href: '#home' },
    { label: 'Serviços', href: '#services' },
    { label: 'Galeria', href: '#gallery' },
    { label: 'Depoimentos', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ];

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <S.HeaderContainer $isScrolled={isScrolled}>
      <S.HeaderContent>
        <S.Logo href="/" $isScrolled={isScrolled}>
          Pegue e Monte
        </S.Logo>

        <S.MenuButton 
          onClick={toggleMenu} 
          $isOpen={isMenuOpen}
          $isScrolled={isScrolled}
        >
          <span></span>
          <span></span>
          <span></span>
        </S.MenuButton>

        <AnimatePresence mode="wait">
          <S.Nav
            as={motion.nav}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            $isOpen={isMenuOpen}
          >
            <S.MenuList>
              {menuItems.map((item, index) => (
                <S.MenuItem
                  key={index}
                  as={motion.li}
                  variants={itemVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                >
                  <S.MenuLink 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    $isScrolled={isScrolled}
                  >
                    {item.label}
                  </S.MenuLink>
                </S.MenuItem>
              ))}
            </S.MenuList>
          </S.Nav>
        </AnimatePresence>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
