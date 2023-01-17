import React from 'react';
import { useParams } from 'react-router-dom';
function Flow() {
  const { idFlow } = useParams();
  console.log(idFlow);
  return <div> hi{idFlow}</div>;
}

export default Flow;
