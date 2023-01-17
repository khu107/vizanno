import React from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper } from './style';
function Flow() {
  const { idFlow } = useParams();
  console.log(idFlow);
  return (
    <Wrapper>
      <Wrapper.Title>Flow № {idFlow}</Wrapper.Title>
    </Wrapper>
  );
}

export default Flow;
