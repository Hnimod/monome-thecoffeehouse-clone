import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 899;
  background: rgba(0, 0, 0, 0.8);
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  transition: all 0.3s ease-in-out;
`;

export const Side = styled.aside`
  display: flex;
  flex-direction: column;
  background-color: #000;
  width: 80%;
  height: 100%;
  z-index: 900;
  text-transform: uppercase;
  padding: 1rem;
`;

export const MainLinks = styled.ul`
  list-style: none;
`;

export const MainLink = styled.li`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const MainLinkItem = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const SubLinks = styled.ul`
  list-style: none;
  margin-left: 1rem;
`;

export const SubLink = styled.li`
  margin: 1rem;
`;

export const SubLinkItem = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export const CloseIcon = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  align-self: flex-end;
`;
