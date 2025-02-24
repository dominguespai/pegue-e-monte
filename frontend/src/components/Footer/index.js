import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faPinterestP, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import * as S from './styles';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <S.FooterContainer>
      <S.FooterContent
        as={motion.div}
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <S.FooterSection variants={itemVariants}>
          <S.FooterLogo>Pegue e Monte</S.FooterLogo>
          <S.FooterDescription>
            Transformando seus eventos em momentos inesquecíveis com decorações exclusivas e serviços personalizados
          </S.FooterDescription>
        </S.FooterSection>

        <S.FooterSection variants={itemVariants}>
          <S.FooterTitle>Contato</S.FooterTitle>
          <S.ContactList>
            <S.ContactItem>
              <S.ContactIcon>📍</S.ContactIcon>
              <span>São Paulo, SP</span>
            </S.ContactItem>
            <S.ContactItem>
              <S.ContactIcon>📞</S.ContactIcon>
              <span>(11) 99999-9999</span>
            </S.ContactItem>
            <S.ContactItem>
              <S.ContactIcon>✉️</S.ContactIcon>
              <span>contato@peguemonte.com.br</span>
            </S.ContactItem>
          </S.ContactList>
        </S.FooterSection>

        <S.FooterSection variants={itemVariants}>
          <S.FooterTitle>Links Rápidos</S.FooterTitle>
          <S.FooterLinks>
            <S.FooterLink href="#home">Início</S.FooterLink>
            <S.FooterLink href="#services">Serviços</S.FooterLink>
            <S.FooterLink href="#gallery">Galeria</S.FooterLink>
            <S.FooterLink href="#testimonials">Depoimentos</S.FooterLink>
          </S.FooterLinks>
        </S.FooterSection>

      </S.FooterContent>

      <S.FooterBottom
        as={motion.div}
        variants={itemVariants}
      >
        <S.SocialLinks>
          <S.SocialLink
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </S.SocialLink>
          <S.SocialLink
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </S.SocialLink>
          <S.SocialLink
            href="https://pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faPinterestP} size="lg" />
          </S.SocialLink>
          <S.SocialLink
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </S.SocialLink>
        </S.SocialLinks>
        <S.Copyright>
          © {currentYear} Pegue e Monte. Todos os direitos reservados.
        </S.Copyright>
      </S.FooterBottom>
    </S.FooterContainer>
  );
};

export default Footer;
