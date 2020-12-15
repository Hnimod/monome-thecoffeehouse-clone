import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { appColor, breakpoint } from '../appConfig';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  height: max-content;
  min-width: max-content;
  padding: 1em 2em;
  font-size: 0.8rem;
  position: sticky;
  top: 70px;

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: row;
    padding: 0;
  }
`;

const Category = styled(Link)`
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    color: ${appColor.primary};
  }

  &:not(:last-child) {
    padding-bottom: 1rem;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    padding: 1em;
  }
`;

const SideMenu = () => {
  return (
    <Container>
      <Category
        to="noi-bat"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        NỔI BẬT
      </Category>
      <Category
        to="cafe-viet"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        CÀ PHÊ VIỆT NAM
      </Category>
      <Category
        to="cafe-may"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        CÀ PHÊ MÁY
      </Category>
      <Category
        to="cold-brew"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        COLD BREW
      </Category>
      <Category
        to="tra-trai-cay"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        TRÀ TRÁI CÂY
      </Category>
      <Category
        to="macchiato"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        TRÀ SỮA MACCHIATO
      </Category>
      <Category
        to="cafe-da-xay"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        CÀ PHÊ ĐÁ XAY
      </Category>
      <Category
        to="trai-cay"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        THỨC UỐNG TRÁI CÂY
      </Category>
      <Category
        to="matcha"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        MATCHA - SÔCÔLA
      </Category>
      <Category to="snack" smooth={true} duration={500} spy={true} exact="true">
        BÁNH & SNACK
      </Category>
      <Category
        to="cafe-goi"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        CÀ PHÊ GÓI
      </Category>
      <Category
        to="merchandise"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        MERCHANDISE
      </Category>
    </Container>
  );
};

export default SideMenu;
