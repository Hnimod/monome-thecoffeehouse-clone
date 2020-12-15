import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Nav = styled.header`
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  z-index: 10;
`;

export const Container = styled.nav`
  display: flex;
  max-width: 1100px;
  width: 100%;
  align-items: stretch;
  text-transform: uppercase;
`;

export const Logo = styled(Link)`
  color: #fff;
  align-self: center;
  text-decoration: none;
  margin: 0 2rem;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    flex: 1;
    margin-left: -2rem;
  }
`;

export const MainLinks = styled.ul`
  flex: 1;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: max-content;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MainLink = styled.li`
  display: flex;
  align-items: center;
  padding: 0 0.8rem;
  position: relative;
  width: max-content;

  @media screen and (max-width: 960px) {
    font-size: 0.9rem;
    padding: 0 0.5rem;
  }

  &::after {
    content: '';
    width: 0%;
    height: 4px;
    display: block;
    position: absolute;
    top: 100%;
    margin-top: -4px;
    left: 0;
    border-bottom: 4px solid transparent;
    transition: all 0.4s ease-in-out;
  }

  &:hover::after {
    border-bottom: 4px solid #ea8025;
    width: 100%;
  }

  &:hover > ul {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MainLinkItem = styled(NavLink)`
  text-decoration: none;
  color: #fff;
`;

export const SubLinks = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: max-content;
  background: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  visibility: hidden;
  opacity: 0;
  transform: translateY(50%);
  transition: all 0.4s ease-in-out;
`;

export const SubLink = styled.li`
  position: relative;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &::after {
    content: '';
    width: 0%;
    height: 4px;
    margin-top: -4px;
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    border-bottom: 4px solid transparent;
    transition: all 0.4s ease-in-out;
  }

  &:hover::after {
    border-bottom: 4px solid #ea8025;
    width: 100%;
  }
`;

export const SubLinkItem = styled(Link)`
  color: #000;
  text-decoration: none;
`;

export const SideMenuBtn = styled.div`
  display: none;
  z-index: 11;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    color: #fff;
    margin-left: 2rem;
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
