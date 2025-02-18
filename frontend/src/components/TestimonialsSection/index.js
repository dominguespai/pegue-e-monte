import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as S from './styles';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Maria Silva',
      event: 'Festa de Aniversário',
      image: '/images/testimonials/maria.jpg',
      text: 'A decoração superou todas as minhas expectativas! Cada detalhe foi cuidadosamente pensado e o resultado foi simplesmente incrível.',
    },
    {
      name: 'João Santos',
      event: 'Casamento',
      image: '/images/testimonials/joao.jpg',
      text: 'Profissionalismo e criatividade excepcionais. Nossa festa ficou exatamente como sonhamos, com um toque único e especial.',
    },
    {
      name: 'Ana Oliveira',
      event: 'Chá de Bebê',
      image: '/images/testimonials/ana.jpg',
      text: 'Adorei o trabalho! A equipe foi muito atenciosa e trouxe ideias incríveis que transformaram a celebração em um momento mágico.',
    },
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    const nextIndex = (currentIndex + newDirection + testimonials.length) % testimonials.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <S.TestimonialsContainer id="testimonials">
      <S.SectionTitle
        as={motion.h2}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Depoimentos
      </S.SectionTitle>

      <S.TestimonialsDescription
        as={motion.p}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Veja o que nossos clientes dizem sobre nossos serviços
      </S.TestimonialsDescription>

      <S.TestimonialsSlider>
        <AnimatePresence initial={false} custom={currentIndex}>
          <S.TestimonialCard
            key={currentIndex}
            as={motion.div}
            custom={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <S.TestimonialContent>
              <S.QuoteIcon>"</S.QuoteIcon>
              <S.TestimonialText>{testimonials[currentIndex].text}</S.TestimonialText>
              <S.TestimonialAuthor>
                <S.AuthorName>{testimonials[currentIndex].name}</S.AuthorName>
                <S.EventType>{testimonials[currentIndex].event}</S.EventType>
              </S.TestimonialAuthor>
            </S.TestimonialContent>
          </S.TestimonialCard>
        </AnimatePresence>

        <S.SliderControls>
          <S.SliderButton
            onClick={() => paginate(-1)}
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ←
          </S.SliderButton>
          <S.SliderDots>
            {testimonials.map((_, index) => (
              <S.SliderDot
                key={index}
                $active={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </S.SliderDots>
          <S.SliderButton
            onClick={() => paginate(1)}
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            →
          </S.SliderButton>
        </S.SliderControls>
      </S.TestimonialsSlider>
    </S.TestimonialsContainer>
  );
};

export default TestimonialsSection;
