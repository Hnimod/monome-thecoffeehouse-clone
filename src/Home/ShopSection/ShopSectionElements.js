import styled from 'styled-components';
import { appColor } from '../../appConfig';

export const Section = styled.section`
  background: #f5f5f5;
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

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 767.98px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  background: ${appColor.primary};
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em;
`;

export const Head = styled.h3`
  margin-bottom: 1em;
`;

export const Description = styled.p`
  line-height: 24px;
  font-weight: 300;
`;

export const Image = styled.img`
  width: 100%;
`;
