import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(240, 248, 250, 0.95);
  transition: all ${({ theme }) => theme.transitions.default};
  z-index: ${({ theme }) => theme.zIndex.sticky};
  padding: ${({ $isScrolled }) => $isScrolled ? '15px 0' : '25px 0'};
  backdrop-filter: blur(10px);
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing['2xl']};
  max-width: 1440px;
  margin: 0 auto;
`;

export const Logo = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
  transition: color ${({ theme }) => theme.transitions.default};
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${({ theme }) => theme.zIndex.dropdown};

  span {
    width: 24px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transition: all ${({ theme }) => theme.transitions.default};
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => $isOpen ? '0' : '1'};
      transform: ${({ $isOpen }) => $isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

export const Nav = styled.nav`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ $isOpen }) => $isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(240, 248, 250, 0.95);
    backdrop-filter: blur(10px);
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

export const MenuList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const MenuItem = styled.li`
  position: relative;
`;

export const MenuLink = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamily.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all ${({ theme }) => theme.transitions.default};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  position: relative;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: width ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-1px);
    
    &::after {
      width: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.sm} 0;
  }
`;
