import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Products = styled.ul`
  font-size: ${({ size }) => (size ? size : 'inhereit')};
  list-style: none;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  grid-gap: 2em;

  @media screen and (max-width: 767.98px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Product = styled.li`
  font-size: inherit;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Name = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 400;
  font-size: 1.2em;
  padding-top: 0.5em;
  padding-bottom: 1em;
  flex: 1;
  transition: all 0.4s ease-in-out;

  &:hover,
  &:active {
    color: #ea8025;
  }

  @media screen and (max-width: 767.98px) {
    padding-bottom: 0.5em;
  }
`;

export const Price = styled.h2`
  color: #ea8025;
  font-weight: 400;
  font-size: 1.5em;
`;

export const Detail = styled.div`
  justify-self: flex-end;
`;

export const Order = styled.div`
  padding-top: 1em;

  & > :first-child {
    margin-right: 1em;
  }

  @media screen and (max-width: 767.98px) {
    font-size: 0.8em;
    & > :first-child {
      margin-right: 0.5em;
    }
  }

  @media screen and (max-width: 370px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    & > :first-child {
      margin-bottom: 0.5em;
    }
  }
`;
