import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Footer = styled.footer`
  background: #000;
  color: #fff;
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

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2em;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Logo = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Address = styled.div`
  & h3:last-of-type {
    margin-top: 1em;
  }
`;

export const Delivery = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Copyright = styled.div`
  width: 100%;
  border-top: 1px solid #fff;
  margin-top: 2em;
  padding-top: 1em;
  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Text = styled.p`
  font-size: 0.8em;
  font-weight: 300;
  flex: 0 0 50%;
`;

export const Policy = styled.div`
  text-transform: uppercase;
  font-weight: bold;
`;

export const Privacy = styled(LinkR)`
  text-decoration: none;
  color: #fff;
  border-right: 2px solid #fff;
  padding: 0 1em;
`;

export const Terms = styled(LinkR)`
  text-decoration: none;
  color: #fff;
  padding: 0 1em;
`;

export const Head = styled.h3`
  text-transform: uppercase;
  margin-bottom: 1em;

  @media screen and (max-width: 500px) {
    margin-top: 1em;
  }
`;

export const Detail = styled.p`
  font-weight: 300;
  font-size: 0.9em;
`;

export const Link = styled(LinkR)`
  text-decoration: none;
  color: #fff;
  font-weight: 300;
  font-size: 0.9em;
`;
