import React, { useState } from 'react';
import { Wrapper } from './style';
import logo from '../../../assets/icon/logo.jpg';
import ShapeSvg from '../ShapeSVG';

import { notification } from 'antd';
export default function Login() {
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    password: '',
  });

  const customNotifaction = (type, message, description, placement) => {
    notification[type]({
      message,
      description,
      placement,
    });
  };

  const handlerInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onAuht = () => {
    customNotifaction({
      type: 'error',
      message: 'Please fill all fields',
      placement: 'topRight',
    });
  };

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
          <Wrapper.LoginGIF />
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
              Hello again!Hello again!Hello again!Hello again! Hello again!Hello
              again!Hello again!Hello again!Hello again! Hello again!
            </Wrapper.Desc>
            <Wrapper.Input
              name="fullname"
              onChange={handlerInput}
              placeholder="name"
            />
            <Wrapper.PasswordInput
              name="password"
              placeholder="password"
              onChange={handlerInput}
            />
            <Wrapper.Button onClick={onAuht}>Login</Wrapper.Button>
          </Wrapper.RightContainer>
        </Wrapper.Right>
      </Wrapper.Container>
    </Wrapper>
  );
}
