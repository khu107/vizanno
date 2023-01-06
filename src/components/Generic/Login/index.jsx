import React from 'react';
import { Wrapper } from './style';
import logo from '../../../assets/icon/logo.jpg';
export default function Login() {
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Left>leftssd</Wrapper.Left>
        <Wrapper.Right>
          <Wrapper.RightContainer>
            <Wrapper.Icon src={logo} />
            <Wrapper.Title>Hello again!</Wrapper.Title>
            <Wrapper.Desc>
              Hello again!Hello again!Hello again!Hello again! Hello again!Hello
              again!Hello again!Hello again!Hello again! Hello again!
            </Wrapper.Desc>
            <Wrapper.Input placeholder="name" />
            <Wrapper.PasswordInput placeholder="password" />
            <Wrapper.Button>Login</Wrapper.Button>
          </Wrapper.RightContainer>
        </Wrapper.Right>
      </Wrapper.Container>
    </Wrapper>
  );
}
