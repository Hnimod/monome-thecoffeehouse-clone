import styled from 'styled-components';

export const Section = styled.section`
  background: #f5f5f5;
`;

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 0;
  font-size: 1rem;

  @media screen and (max-width: 1100px) {
    padding: 2em 1em;
    font-size: 0.8rem;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
