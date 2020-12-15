import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';
import { breakpoint } from '../../../appConfig';

const Wrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 5em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled.p`
  text-align: center;
  margin-top: 2em;
  font-size: ${({ size }) => (size ? size : '1.5em')};
  padding: 0 6em;
  font-weight: 300;

  @media screen and (max-width: ${breakpoint.laptop}) {
    padding: 0 1em;
  }
`;

const TextContent = (props) => {
  return (
    <Wrap>
      <Title textColor={props.titleColor} weight={props.titleWeight} center>
        {props.title}
      </Title>
      <Content size={props.textSize}>{props.children}</Content>
    </Wrap>
  );
};

export default TextContent;
