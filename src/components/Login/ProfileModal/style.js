import styled from 'styled-components';
import { Input } from 'antd';
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
Wrapper.Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: rgb(245, 106, 0);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: capitalize;
`;

Wrapper.Input = styled(Input)`
  width: 90%;
  height: 40px;
  background: rgb(250, 251, 254);
  outline: none;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  padding-left: 15px;
  color: rgb(89, 90, 98);
  margin-bottom: 30px;
`;
Wrapper.Name = styled.div`
  width: 90%;
`;
