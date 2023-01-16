import React from 'react';
import Card from '../Generic/Crad';
import { Wrapper } from './style';
import Patok1 from '../../assets/image/patok1.svg';
import Patok2 from '../../assets/image/patok2.svg';
import Patok3 from '../../assets/image/patok3.svg';
import Patok4 from '../../assets/image/patok4.svg';
import Patok5 from '../../assets/image/patok5.svg';
import Sklad from '../../assets/image/sklad.jpg';
import Schot from '../../assets/image/schot.jpg';

function Home() {
  return (
    <Wrapper>
      <Wrapper.Title>Flows</Wrapper.Title>
      <Wrapper.CardContainer>
        <Card title={'Flow 1'} img={Patok1} />

        <Card title={'Flow 2'} img={Patok2} />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card title={'Flow 3'} img={Patok3} />
        <Card title={'Flow 4'} img={Patok4} />
      </Wrapper.CardContainer>
      <Wrapper.CardContainer>
        <Card title={'Flow 5'} img={Patok5} />
      </Wrapper.CardContainer>
      <Wrapper.Title>Store and Report</Wrapper.Title>
      <Wrapper.CardContainer>
        <Card title={'Store'} img={Sklad} />
        <Card title={'Repots'} img={Schot} />
      </Wrapper.CardContainer>
    </Wrapper>
  );
}

export default Home;
