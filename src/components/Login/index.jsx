import React, { useState } from 'react';
import { Wrapper } from './style';
import logo from '../../assets/icon/logo.jpg';
import ShapeSvg from '../../components/Generic/ShapeSVG';

import { LoadingOutlined } from '@ant-design/icons';
import { notification } from 'antd';
export default function Login() {
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const customNotifaction = ({ type, message, description, placement }) => {
    notification[type]({
      message,
      description,
      placement,
    });
  };

  const handlerInput = (e) => {
    console.log(e.target.name);
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const onAuht = () => {
    if (!userInfo.fullName || !userInfo.password) {
      customNotifaction({
        type: 'error',
        message: 'Please fill all fields',
        placement: 'topRight',
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      customNotifaction({
        type: 'success',
        message: "You've been successfully loged in!",
        placement: 'topRight',
      });
    }, 3000);
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
              name="fullName"
              onChange={handlerInput}
              placeholder="name"
            />
            <Wrapper.PasswordInput
              name="password"
              placeholder="password"
              onChange={handlerInput}
            />
            <Wrapper.Button onClick={onAuht}>
              {loading ? <LoadingOutlined /> : 'Login'}
            </Wrapper.Button>
          </Wrapper.RightContainer>
        </Wrapper.Right>
      </Wrapper.Container>
    </Wrapper>
  );
}
