import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing['3xl']} 0 0;
`;

export const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const FooterSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const FooterLogo = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.background};
`;

export const FooterDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  line-height: 1.6;
  opacity: 0.9;
`;

export const FooterTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

export const ContactIcon = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  transition: opacity ${({ theme }) => theme.transitions.default};
  opacity: 0.9;

  &:hover {
    opacity: 1;
    text-decoration: underline;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.background};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => `${theme.colors.background}30`};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  text-align: center;
  background-color: ${({ theme }) => `${theme.colors.primary}90`};
`;

export const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  opacity: 0.9;
`;
