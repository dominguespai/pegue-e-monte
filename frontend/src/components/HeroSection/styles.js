import styled from 'styled-components';

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  overflow: hidden;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/galeria/ANOS_DOURADO/ANOS1.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: scale(1.1);
  transition: transform 0.6s ease-out;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing['2xl']};
  margin-top: ${({ theme }) => theme.spacing['4xl']};
  padding-bottom: ${({ theme }) => theme.spacing['4xl']};
  text-align: center;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: clamp(2.5rem, 5vw, ${({ theme }) => theme.typography.fontSize['6xl']});
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.1;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.7);
  letter-spacing: -1px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 0.2s;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  font-size: clamp(1.125rem, 2vw, ${({ theme }) => theme.typography.fontSize.xl});
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  line-height: 1.6;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  max-width: 800px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 0.4s;
`;

export const CTAButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.darkBackground};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px 60px;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease-out forwards;
  animation-delay: 0.6s;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  &:hover {
    color: ${({ theme }) => theme.colors.background};
    background-color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-2px);
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing['4xl']};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards 1.2s;
  z-index: 10;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @keyframes fadeIn {
    to {
      opacity: 0.8;
    }
  }

  &::before {
    content: '';
    width: 1px;
    height: 50px;
    background: ${({ theme }) => theme.colors.primary};
    margin: ${({ theme }) => theme.spacing.xl} 0;
    animation: scrollPulse 2s ease-out infinite;
  }

  @keyframes scrollPulse {
    0%, 100% {
      transform: scaleY(0.5);
      opacity: 0.5;
    }
    50% {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: translateX(-50%) translateY(-2px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
