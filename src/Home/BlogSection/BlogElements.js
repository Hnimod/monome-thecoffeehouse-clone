import styled from 'styled-components';
import { appColor } from '../../appConfig';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  max-width: 1800px;
  background: #333;
`;

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 0;
  font-size: 1.1rem;

  @media screen and (max-width: 1100px) {
    padding: 2em 1em;
    font-size: 0.8rem;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
`;

export const Blogs = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;

  @media screen and (max-width: 767.98px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Blog = styled.li`
  background: #fff;
  display: flex;
  flex-direction: column;
  &:first-child {
    grid-column: 1 / -1;
  }
`;

export const BlogImage = styled.img`
  width: 100%;
`;

export const BlogDetail = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;

  & > :last-child {
    justify-self: flex-end;
  }
`;

export const BlogTitle = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active {
    color: ${appColor.primary};
  }
`;

export const BlogContent = styled.p`
  padding: 2em 0;
  flex: 1;
`;
