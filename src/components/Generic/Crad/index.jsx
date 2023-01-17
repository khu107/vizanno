import React from 'react';
import { Wrapper } from './style';

function Card({ title, img, onClick }) {
  return (
    <Wrapper onClick={onClick}>
      <Wrapper.Title> {title}</Wrapper.Title>
      <Wrapper.Img src={img} />
    </Wrapper>
  );
}

export default Card;
