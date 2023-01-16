import React, { useState } from 'react';
import { Wrapper } from './style';
import { useSignOut } from 'react-auth-kit';
import { Dropdown, Space } from 'antd';
import { SettingTwoTone, LogoutOutlined } from '@ant-design/icons';
import { useNavigate, Outlet } from 'react-router-dom';
import NavbarLogo from '../../assets/icon/navbarLogo.png';
import { warning } from '../Generic/Notification/ByModal';
import ProfileModal from '../Login/ProfileModal';

function Navbar() {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const items = [
    {
      key: '1',
      label: (
        <Space
          onClick={() => {
            setShowProfileModal(true);
          }}
        >
          <SettingTwoTone twoToneColor="#56ac2b" />
          Setting
        </Space>
      ),
    },
    {
      key: '2',
      label: (
        <Space
          onClick={() => {
            setOpen(true);
            warning({
              title: 'Are you sure!!!',
              content: 'This action can be ignore after confirming this!',
              onOk: () => {
                signOut();
                navigate('/login');
                setOpen(false);
              },
              okButtonProps: { danger: true },
              okText: 'LogOut',
              open: open,
            });
          }}
        >
          <LogoutOutlined />
          LogOut
        </Space>
      ),
    },
  ];

  return (
    <Wrapper>
      <Wrapper.NavbarWrapper>
        <ProfileModal
          open={showProfileModal}
          onCancel={() => setShowProfileModal(false)}
        />
        <Wrapper.Container>
          <Wrapper.Logo loading="lazy" src={NavbarLogo} />

          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            arrow
          >
            <Wrapper.Avatar>H</Wrapper.Avatar>
          </Dropdown>
        </Wrapper.Container>
        <Outlet />
      </Wrapper.NavbarWrapper>
    </Wrapper>
  );
}

export default Navbar;
