import { Modal } from 'antd';

const { confirm } = Modal;

const warning = ({ title, content, onOk, okText, okButtonProps, setOpen }) => {
  confirm({
    title,
    content,
    onOk,
    okButtonProps,
    okText,
    open: setOpen,
  });
};
export { warning };
