import React, { useState } from 'react';
import { Wrapper } from './style';
import logo from '../../assets/icon/logo.jpg';
import ShapeSvg from '../../components/Generic/ShapeSVG';

import { LoadingOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import axios from 'axios';
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
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BASE_URL}/user/login`,
      data: userInfo,
    })
      .then((res) => {
        const { token, user } = res.data.data;
        localStorage.setItem('token', token);
        localStorage.setItem('fullName', user.fullName);
        localStorage.setItem('isAuthed', true);
        setLoading(false);
      })
      .catch((error) => {
        if (error.request.status >= 500)
          return customNotifaction({
            type: 'error',
            message: 'ERROR',
            description: 'Server is not working!',
            placement: 'topRight',
          });

        customNotifaction({
          type: 'error',
          message: 'ERROR',
          description: error.response.data.extraMessage,
          placement: 'topRight',
        });
        setLoading(false);
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
