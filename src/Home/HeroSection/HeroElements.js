import styled from 'styled-components';
import heroImg from '../../assets/images/hero.jpg';

export const Section = styled.section`
  background: #fff;
  height: 100vh;
  max-width: 1800px;
`;

export const Container = styled.div`
  height: 100%;
  background-image: url(${heroImg});
  background-position: center;
  background-size: cover;
  overflow: hidden;
`;
