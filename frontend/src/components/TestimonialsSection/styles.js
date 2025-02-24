import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TestimonialsContainer = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  background-color: rgb(240, 248, 250);
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

export const TestimonialsDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing['3xl']};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.75);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  }
`;

export const TestimonialsSlider = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
`;

export const TestimonialCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing['3xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  margin: 0 auto;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`;

export const TestimonialContent = styled.div`
  position: relative;
  text-align: center;
`;

export const QuoteIcon = styled.span`
  font-size: 6rem;
  color: ${({ theme }) => `${theme.colors.primary}20`};
  font-family: Georgia, serif;
  position: absolute;
  top: -3rem;
  left: -1rem;
  user-select: none;
`;

export const TestimonialText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
  z-index: 1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.75);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

export const TestimonialAuthor = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const AuthorName = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
`;

export const EventType = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.lightText};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.75);
`;

export const SliderControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

export const SliderButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.darkBackground};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: 600;
  border: none;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

export const SliderDots = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const SliderDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${({ theme, $active }) => 
    $active ? theme.colors.primary : `${theme.colors.primary}30`};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme, $active }) => 
      $active ? theme.colors.primary : `${theme.colors.primary}50`};
  }
`;
