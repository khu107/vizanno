import React from 'react';
import { Wrapper } from './style';
import NavbarLogo from '../../assets/icon/navbarLogo.png';

function Navbar() {
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Logo loading="lazy" src={NavbarLogo} />
        <Wrapper.Avatar>H</Wrapper.Avatar>
      </Wrapper.Container>
    </Wrapper>
  );
}

export default Navbar;
