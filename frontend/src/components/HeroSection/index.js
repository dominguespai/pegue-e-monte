import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as S from './styles';

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundY = useTransform(scrollY, [0, 500], ['0%', '20%']);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <S.HeroContainer id="home">
      <motion.div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          y: backgroundY,
          opacity
        }}
      >
        <S.BackgroundImage />
      </motion.div>

      <S.HeroContent>
        <motion.div
          initial="hidden"
          animate={isMounted ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <S.Title
            as={motion.h1}
            variants={fadeInVariants}
          >
            Transforme seus eventos em
            <br />
            momentos inesquecíveis
          </S.Title>
          
          <S.Subtitle
            as={motion.p}
            variants={fadeInVariants}
          >
            Decorações personalizadas para festas e eventos que encantam e surpreendem.
            <br />
            Aluguel de móveis e acessórios para criar o ambiente perfeito para sua celebração.
          </S.Subtitle>
          
          <motion.div variants={fadeInVariants}>
            <S.CTAButton
              as={motion.button}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Solicite um Orçamento
            </S.CTAButton>
          </motion.div>
        </motion.div>
      </S.HeroContent>

      <S.ScrollIndicator>
        Scroll
      </S.ScrollIndicator>
    </S.HeroContainer>
  );
};

export default HeroSection;
