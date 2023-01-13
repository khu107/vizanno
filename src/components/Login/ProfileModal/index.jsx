import React from 'react';
import { Modal } from 'antd';
import { Wrapper } from './style';

function ProfileModal({ open, onCancel, onOk }) {
  return (
    <Modal
      title="Profile"
      open={open}
      okText="Save"
      okButtonProps={{ disabled: true }}
      onCancel={onCancel}
    >
      <Wrapper>
        <Wrapper.Avatar>H</Wrapper.Avatar>
        <Wrapper.Name>Name:</Wrapper.Name>
        <Wrapper.Input disabled value="H" />
        <Wrapper.Name>Surname:</Wrapper.Name>
        <Wrapper.Input disabled />
        <p style={{ color: '#8888' }}>Vizzano 0.0.1 version</p>
      </Wrapper>
    </Modal>
  );
}

export default ProfileModal;
