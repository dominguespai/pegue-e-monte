import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ServicesContainer = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.xl};
  background-color: #f8f9fa;
  position: relative;
  z-index: 1;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

export const ServicesDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing['3xl']};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
    margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  }
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing['3xl']};
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl} 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const ServiceCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing['3xl']};
  min-height: 200px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.slow};
  cursor: pointer;
  will-change: transform;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.background} 0%,
      ${({ theme }) => `${theme.colors.primary}05`} 100%
    );
  }
`;

export const ServiceIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  transition: all ${({ theme }) => theme.transitions.slow};
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  
  ${ServiceCard}:hover & {
    transform: scale(1.1);
  }
`;

export const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  transition: all ${({ theme }) => theme.transitions.slow};

  ${ServiceCard}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  flex-grow: 1;
`;

export const LearnMoreButton = styled(motion.button)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const ContactInfo = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing['3xl']};
  padding: ${({ theme }) => theme.spacing['2xl']};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};

  p {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const ContactButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  cursor: pointer;
  border: none;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.md};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;
