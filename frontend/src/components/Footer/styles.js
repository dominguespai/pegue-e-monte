import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FooterContainer = styled.footer`
  background-color: rgb(240, 248, 250);
  color: ${({ theme }) => theme.colors.text};
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
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const FooterDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: 300;
  line-height: 1.6;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

export const FooterTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: 300;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

export const ContactIcon = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.primary};
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: 300;
  transition: opacity ${({ theme }) => theme.transitions.default};
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    opacity: 1;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: 300;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: all ${({ theme }) => theme.transitions.default};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    text-shadow: none;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => `${theme.colors.primary}30`};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  text-align: center;
  background-color: rgb(240, 248, 250);
`;

export const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: 300;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;
