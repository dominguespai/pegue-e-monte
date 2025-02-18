import styled from 'styled-components';

export const HeroContainer = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  width: 100%;
  gap: ${({ theme }) => theme.spacing['3xl']};
  margin-top: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: column;
    text-align: center;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

export const HeroTextContent = styled.div`
  flex: 1;
  max-width: 600px;
  color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.background};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;

export const CTAButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  position: relative;
  z-index: 2;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

export const HeroImageWrapper = styled.div`
  flex: 1;
  max-width: 600px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 100%;
    width: 100%;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.slow};

  &:hover {
    transform: scale(1.05);
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing['2xl']};
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  justify-content: center;
  padding-top: ${({ theme }) => theme.spacing.xs};
  z-index: 2;

  span {
    width: 4px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
