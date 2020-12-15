import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: max-content;

  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 50%;
    height: 4px;
    ${({ center }) => (center ? 'transform: translateX(50%);' : null)}
    border-bottom: 4px solid
      ${({ lineColor }) => (lineColor ? lineColor : '#000')};
  }
`;

export const Name = styled.h1`
  color: ${({ textColor }) => (textColor ? textColor : '#000')};
  text-transform: uppercase;
  font-size: ${({ size }) => (size ? size : '2em')};
  font-weight: ${({ weight }) => (weight ? +weight : 400)};
`;
