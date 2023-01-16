import React from 'react';
import { Modal } from 'antd';
import { Wrapper } from './style';
import { useAuthUser } from 'react-auth-kit';

function ProfileModal({ open, onCancel }) {
  const auth = useAuthUser();
  const { fullName } = auth();
  console.log(fullName);
  return (
    <Modal
      title="Profile"
      open={open}
      okText="Save"
      okButtonProps={{ disabled: true }}
      onCancel={onCancel}
    >
      <Wrapper>
        <Wrapper.Avatar>{fullName[0]}</Wrapper.Avatar>
        <Wrapper.Name>Name:</Wrapper.Name>
        <Wrapper.Input disabled value={fullName} />
        <Wrapper.Name>Password:</Wrapper.Name>
        <Wrapper.InputPassword disabled />
        <p style={{ color: '#8888' }}>Vizzano 0.0.1 version</p>
      </Wrapper>
    </Modal>
  );
}

export default ProfileModal;
