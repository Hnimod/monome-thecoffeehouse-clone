import React from 'react';
import { Container, Name } from './TitleElements';

const Title = (props) => {
  return (
    <Container lineColor={props.lineColor} center={props.center}>
      <Name textColor={props.textColor} weight={props.weight} size={props.size}>
        {props.children}
      </Name>
    </Container>
  );
};

export default Title;
