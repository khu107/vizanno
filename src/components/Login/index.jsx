import React from 'react';
import { Wrapper } from './style';
import ShapeSvg from '../../Generic/ShapeSVG';
import logo from '../../assets/icons/icon.jpg';
function Login() {
  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Left>
          <ShapeSvg
            firstColor={'#376dd2'}
            secondColor={'#39acea'}
            top="0"
            right="0"
          />
          <Wrapper.LoginGIf />
          <ShapeSvg
            firstColor={'#376dd2'}
            secondColor={'#39acea'}
            bottom="0"
            left="0"
          />
        </Wrapper.Left>
        <Wrapper.Right>
          <Wrapper.RightContainer>
            <Wrapper.Icon src={logo} />
            <Wrapper.Title>Hello again!</Wrapper.Title>
            <Wrapper.Desc>
              Every day we try to sew with the best for you 😊. Vizzano has been
              with you for over 10 years. 😎 🙃
            </Wrapper.Desc>
            <Wrapper.Input name="fullName" placeholder="Name" />
            <Wrapper.PasswordInput name="password" placeholder="Password" />
            <Wrapper.Button>Login</Wrapper.Button>
          </Wrapper.RightContainer>
        </Wrapper.Right>
      </Wrapper.Container>
    </Wrapper>
  );
}

export default Login;
