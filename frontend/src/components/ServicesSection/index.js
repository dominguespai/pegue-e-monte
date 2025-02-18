import React from 'react';
import { motion } from 'framer-motion';
import * as S from './styles';

const ServicesSection = () => {
  const services = [
    {
      icon: '🎉',
      title: 'Decoração Completa',
      description: 'Transformamos qualquer espaço com decorações personalizadas e tematizadas para seu evento.',
    },
    {
      icon: '🪑',
      title: 'Aluguel de Móveis',
      description: 'Ampla variedade de móveis e acessórios para complementar a decoração do seu evento.',
    },
    {
      icon: '🎨',
      title: 'Design Personalizado',
      description: 'Criamos projetos únicos que refletem seu estilo e atendem às suas necessidades.',
    },
    {
      icon: '📅',
      title: 'Consultoria de Eventos',
      description: 'Orientação profissional para garantir que cada detalhe do seu evento seja perfeito.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <S.ServicesContainer id="services">
      <S.SectionTitle
        as={motion.h2}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        Nossos Serviços
      </S.SectionTitle>

      <S.ServicesDescription
        as={motion.p}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oferecemos soluções completas para tornar seu evento único e memorável
      </S.ServicesDescription>

      <S.ServicesGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <S.ServiceCard
            key={index}
            as={motion.div}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 25px rgba(0, 0, 0, 0.15)'
            }}
          >
            <S.ServiceIcon>{service.icon}</S.ServiceIcon>
            <S.ServiceTitle>{service.title}</S.ServiceTitle>
            <S.ServiceDescription>{service.description}</S.ServiceDescription>
            <S.LearnMoreButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Saiba Mais
            </S.LearnMoreButton>
          </S.ServiceCard>
        ))}
      </S.ServicesGrid>

      <S.ContactInfo
        as={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p>Precisa de ajuda para planejar seu evento?</p>
        <S.ContactButton
          as={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Entre em Contato
        </S.ContactButton>
      </S.ContactInfo>
    </S.ServicesContainer>
  );
};

export default ServicesSection;
