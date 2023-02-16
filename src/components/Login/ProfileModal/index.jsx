import React from 'react';
import { Modal } from 'antd';
import { Wrapper } from './style';

const ProfileModal = ({ open, onCancel }) => {
  return (
    <Modal
      title="Profile"
      open={open}
      okText="Save"
      onCancel={onCancel}
      okButtonProps={{ disabled: true }}
    >
      <Wrapper>
        <Wrapper.Avatar>A</Wrapper.Avatar>
        <Wrapper.Form>
          <Wrapper.InputWrapper>
            <Wrapper.InputText>Username:</Wrapper.InputText>
            <Wrapper.Input disabled={true} />
          </Wrapper.InputWrapper>
          <Wrapper.InputWrapper>
            <Wrapper.InputText>Password:</Wrapper.InputText>
            <Wrapper.InputPassword disabled={true} />
          </Wrapper.InputWrapper>
        </Wrapper.Form>
      </Wrapper>
    </Modal>
  );
};

export default ProfileModal;
