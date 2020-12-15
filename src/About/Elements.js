import styled from 'styled-components';
import gridImg1_1 from '../assets/images/about-grid1-1.jpg';
import gridImg1_2 from '../assets/images/about-grid1-2.jpg';
import gridImg1_3 from '../assets/images/about-grid1-3.jpg';
import gridImg1_4 from '../assets/images/about-grid1-4.jpg';

export const Container = styled.div`
  font-size: 1rem;
  margin-top: 60px;
`;

export const Wrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Block1 = styled.div`
  background: #f5f5f5;
`;

export const Block2 = styled.div`
  background: #fff;
`;

export const Block2Grid = styled.div`
  display: grid;
  padding: 2em;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
`;

export const Block2Tile1 = styled.div`
  background-image: url(${gridImg1_1});
  background-size: cover;
`;

export const Block2Tile2 = styled.div`
  background-image: url(${gridImg1_2});
  background-size: cover;
`;

export const Block2Tile3 = styled.div``;
export const Head = styled.h4`
  margin: 1em 0;
`;
export const Content = styled.p``;

export const Block2Tile4 = styled.div`
  grid-row: 2 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Block2Tile5 = styled.div`
  grid-column: 2 / -1;
  grid-row: 2 / 4;
  background-image: url(${gridImg1_3});
  background-size: cover;
`;
export const Block2Tile6 = styled.div`
  grid-row: 4 / 6;
  grid-column: 1 / 3;
  background-image: url(${gridImg1_4});
  background-size: cover;
`;

export const Block2Tile7 = styled.div`
  grid-row: 4 / 6;
  grid-column: 3 / 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Block2Tile8 = styled.div`
  grid-column: 1 / 3;
  background-image: url(${gridImg1_1});
  background-size: cover;
`;

export const Block2Tile9 = styled.div``;

export const Block3 = styled.div``;
export const Block4 = styled.div``;
