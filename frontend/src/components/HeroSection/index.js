import React from 'react';
import { motion } from 'framer-motion';
import * as S from './styles';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <S.HeroContainer id="home">
      <S.HeroContent
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <S.HeroTextContent>
          <S.Title
            as={motion.h1}
            variants={itemVariants}
          >
            Transforme seus eventos em momentos inesquecíveis
          </S.Title>
          
          <S.Subtitle
            as={motion.p}
            variants={itemVariants}
          >
            Decorações personalizadas para festas e eventos que encantam e surpreendem. 
            Aluguel de móveis e acessórios para criar o ambiente perfeito para sua celebração.
          </S.Subtitle>
          
          <S.CTAButton
            as={motion.button}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicite um Orçamento
          </S.CTAButton>
        </S.HeroTextContent>

        <S.HeroImageWrapper
          as={motion.div}
          variants={itemVariants}
        >
          <S.HeroImage
            src="/images/hero-image.jpg"
            alt="Decoração de evento"
          />
        </S.HeroImageWrapper>
      </S.HeroContent>

      <S.ScrollIndicator
        as={motion.div}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span></span>
      </S.ScrollIndicator>
    </S.HeroContainer>
  );
};

export default HeroSection;
