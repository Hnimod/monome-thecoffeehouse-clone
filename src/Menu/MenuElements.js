import styled from 'styled-components';
import { appColor, breakpoint } from '../appConfig';

export const Container = styled.div`
  font-size: 0.9rem;
  padding-left: 1em;
  border-left: 2px solid ${appColor.primary};

  @media screen and (max-width: 1199.98px) {
    font-size: 0.6rem;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    border: none;
    padding: 0;
  }
`;

export const Wrap = styled.div`
  display: flex;
  padding: 4em 8em 8em 8em;

  @media screen and (max-width: ${breakpoint.desktop}) {
    padding: 2em 4em 4em 4em;
  }

  @media screen and (max-width: ${breakpoint.laptop}) {
    padding: 2em;
  }

  @media screen and (max-width: ${breakpoint.mobile}) {
    flex-direction: column;
    padding: 1em;
  }
`;

export const MenuCategory = styled.div`
  & > :first-child {
    padding-bottom: 2em;
  }

  &:not(:first-of-type) {
    padding-top: 4em;
  }
`;

export const SideContainer = styled.div`
  padding-right: 1rem;
  width: 25rem;
  position: relative;

  @media screen and (max-width: ${breakpoint.mobile}) {
    width: 100%;
    padding: 0;
    overflow-x: scroll;
    margin-bottom: 1em;
  }
`;

export const TopImg = styled.div`
  background-image: url(${(props) => (props.image ? props.image : null)});
  background-size: cover;
  background-position: center;
  height: 20rem;
  margin-top: 60px;
`;
