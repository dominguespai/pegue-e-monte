import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as S from './styles';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { src: '/images/galeria/BOTECO/BOTECO1.jpeg', alt: 'Decoração Boteco', category: 'Boteco' },
    { src: '/images/galeria/PRINCESA/PRINCESA1.jpeg', alt: 'Decoração Princesa', category: 'Princesa' },
    { src: '/images/galeria/CHA_CASANOVA/CHACASANOVA.jpeg', alt: 'Chá Casa Nova', category: 'Chá Casa Nova' },
    { src: '/images/galeria/ANOS_DOURADO/ANOS1.jpeg', alt: 'Anos Dourados', category: 'Anos Dourados' },
    { src: '/images/galeria/CONJUNTO_COBRE/COBRE1.jpeg', alt: 'Conjunto Cobre', category: 'Conjuntos' },
    { src: '/images/galeria/VASOS_DOURADOS/VASOS1.jpeg', alt: 'Vasos Dourados', category: 'Acessórios' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <S.GalleryContainer id="gallery">
      <S.SectionTitle
        as={motion.h2}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Nossa Galeria
      </S.SectionTitle>

      <S.GalleryDescription
        as={motion.p}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Inspire-se com nossos trabalhos e descubra as possibilidades para seu evento
      </S.GalleryDescription>

      <S.GalleryGrid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {galleryImages.map((image, index) => (
          <S.GalleryItem
            key={index}
            as={motion.div}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedImage(image)}
          >
            <S.GalleryImage src={image.src} alt={image.alt} />
            <S.ImageOverlay>
              <S.ImageTitle>{image.category}</S.ImageTitle>
            </S.ImageOverlay>
          </S.GalleryItem>
        ))}
      </S.GalleryGrid>

      <AnimatePresence>
        {selectedImage && (
          <S.Modal
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <S.ModalContent
              as={motion.div}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              onClick={e => e.stopPropagation()}
            >
              <S.ModalImage src={selectedImage.src} alt={selectedImage.alt} />
              <S.ModalClose onClick={() => setSelectedImage(null)}>×</S.ModalClose>
              <S.ModalCaption>{selectedImage.category}</S.ModalCaption>
            </S.ModalContent>
          </S.Modal>
        )}
      </AnimatePresence>

      <S.ViewMoreButton
        as={motion.button}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Ver Mais Fotos
      </S.ViewMoreButton>
    </S.GalleryContainer>
  );
};

export default GallerySection;
