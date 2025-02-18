import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as S from './styles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.Logo href="/">
          Pegue e Monte
        </S.Logo>

        <S.MenuButton onClick={toggleMenu} $isOpen={isMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </S.MenuButton>

        <AnimatePresence>
          <S.Nav
            as={motion.nav}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            $isOpen={isMenuOpen}
          >
            <S.MenuList>
              {menuItems.map((item, index) => (
                <S.MenuItem
                  key={index}
                  as={motion.li}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <S.MenuLink 
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
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
