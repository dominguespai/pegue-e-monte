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
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const FooterDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: 600;
  line-height: 1.6;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

export const FooterTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
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
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
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
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: 600;
  transition: opacity ${({ theme }) => theme.transitions.default};
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  &:hover {
    opacity: 1;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const SocialLink = styled(motion.a)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.darkBackground};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 8px 16px;
  min-width: auto;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  overflow: hidden;
  text-decoration: none;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => `${theme.colors.primary}30`};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  text-align: center;
  background-color: rgb(240, 248, 250);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;


export const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: 600;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;
