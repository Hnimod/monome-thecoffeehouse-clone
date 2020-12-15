import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  font-size: inherit;
  text-transform: uppercase;
  text-decoration: none;
  padding: ${({ padding }) => (padding ? padding : '0.5em 1em')};
  background: transparent;
  color: ${(props) => {
    if (props.reverse) return '#ea8025';
    if (props.light) return '#fff';
    else return '#fff';
  }};
  border: 2px solid
    ${(props) => {
      if (props.primary || props.reverse) return '#ea8025';
      if (props.light) return '#fff';
      else return '#000';
    }};
  transition: all 0.4s ease-in-out;
  transition-delay: 0.2s;
  position: relative;
  cursor: pointer;
  z-index: 2;

  &:hover {
    color: ${(props) => {
      if (props.primary) return '#ea8025';
      if (props.light || props.reverse) return '#fff';
      else return '#000';
    }};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: ${(props) => {
      if (props.primary) return '#ea8025';
      if (props.reverse || props.light) return '#fff';
      else return '#000';
    }};
    z-index: -1;
    ${(props) => {
      if (props.reverse || props.light) return 'transform: scale(0, 1)';
      else return 'transform: scale(1, 1)';
    }};
    transform-origin: right center;
    transition: all 0.4s ease-in-out;
  }

  &:hover::before {
    transform: ${(props) => {
      if (props.reverse || props.light) return 'scale(1, 1)';
      else return 'scale(0, 1)';
    }};
    ${(props) => {
      if (props.reverse) return 'background: #ea8025';
      if (props.light) return 'background: #000';
    }};
    transform-origin: left center;
  }
`;
