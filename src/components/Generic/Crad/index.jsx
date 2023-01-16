import React from 'react';
import { Wrapper } from './style';
import { Link, useParams } from 'react-router-dom';

function Card({ title, img }) {
  const { idFlow } = useParams();
  console.log(idFlow);
  return (
    <Link>
      <Wrapper>
        <Wrapper.Title> {title}</Wrapper.Title>
        <Wrapper.Img src={img} />
      </Wrapper>
    </Link>
  );
}

export default Card;
