import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  z-index: ${({ theme }) => theme.zIndex.sticky};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  margin: 0 auto;
`;

export const Logo = styled.a`
  font-family: ${({ theme }) => theme.typography.fontFamily.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: ${({ theme }) => theme.zIndex.dropdown};

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
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
    background-color: ${({ theme }) => theme.colors.background};
    padding: ${({ theme }) => theme.spacing.lg};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export const MenuList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const MenuItem = styled.li`
  position: relative;
`;

export const MenuLink = styled.a`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text};
  transition: color ${({ theme }) => theme.transitions.default};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.lightBorder};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all ${({ theme }) => theme.transitions.default};
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;
