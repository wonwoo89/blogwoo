import styled from 'vue-styled-components';
import Colors from '../assets/color';
import { Button, ButtonGroup } from './button.styled';

const Alert = styled.div`
  .alert-enter,
  .alert-leave-to {
    transform: translateY(-200%);
  }
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${Colors.white};
  opacity: 0.5;
  z-index: 100;
`;
const MessageBox = styled.div`
  position: fixed;
  top: 48px;
  left: 50%;
  width: 300px;
  border: 0;
  border-radius: 4px;
  background: ${Colors.white};
  padding: 15px 30px;
  margin: 0 0 0 -150px;
  transition: all 0.3s ease;
  z-index: 110;
  box-shadow: 0 10px 20px 0 ${Colors.darkGray};
`;
const MessageWrap = styled.div`
  margin-bottom: 0;
`;
const Message = styled.div`
  position: relative;
  margin: 10px 0 30px;
  font-size: 18px;
  word-break: break-all;
  white-space: pre-wrap;
  line-height: 1.5;
  .text {
    word-break: keep-all;
  }
`;
const ButtonWrap = styled.div``;
const AlertButtonGroup = ButtonGroup.extend`
  &:not(.w2) {
    button,
    a {
      width: 100%;
    }
  }
`;
const AlertButton = Button.extend`
  height: 48px;
  line-height: 48px;
  border-radius: 4px;
  border-color: ${Colors.black};
  margin-bottom: 0;
  &.btn-default {
    border: 0;
    background: ${Colors.black};
    color: ${Colors.white};
    .text {
      color: ${Colors.white};
    }
  }
`;

export default {
  Alert,
  Background,
  MessageBox,
  MessageWrap,
  Message,
  ButtonWrap,
  AlertButtonGroup,
  AlertButton,
};
