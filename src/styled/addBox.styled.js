import styled from 'vue-styled-components';
import Colors from '../assets/color';
import { Button, ButtonGroup } from './button.styled';
import { FormGroup, InputControl } from './form.styled';

const AddBox = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${Colors.white}80;
  padding: 80px 30px 90px;
  transition: all 0.3s ease;
`;

const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  height: 100%;
  border: 0;
  border-radius: 10px;
  background: ${Colors.white};
  box-shadow: 0 0 30px 0 ${Colors.black}40;
  padding: 40px 25px;
  margin: 0 auto;
  overflow: auto;
`;

const BoxTitle = styled.h2`
  margin-bottom: 30px;
`;

const ValueBox = styled.div`
  margin-bottom: 40px;
`;

const ValueLabel = styled.span`
  display: inline-block;
  width: 100%;
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 14px;
  color: ${Colors.darkGray};
`;

const AddFormGroup = FormGroup.extend`
  position: relative;
  label {
    position: relative;
    display: inline-block;
    width: 50%;
    height: 100%;
    padding: 5px;
    &.full {
      width: 100%;
    }
  }
`;

const RadioControl = InputControl.extend`
  &[type='radio'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    visibility: hidden;
    z-index: -1;
    &:checked + .label {
      font-weight: bold;
      transform: scale(1.1);
      box-shadow: 0 0 30px 0 ${Colors.black}40;
      &:before,
      &:after {
        content: 'v';
        font-weight: bold;
      }
      &:before {
        margin-right: 5px;
      }
      &:after {
        margin-left: 5px;
      }
    }
  }
`;

const LabelButton = styled.span`
  display: inline-block;
  width: 100%;
  border: 1px solid ${Colors.darkGray};
  border-radius: 4px;
  background: ${Colors.white};
  padding: 10px;
  cursor: pointer;
  transition: all 1s cubic-bezier(0, 0.9, 0.58, 1);
  font-size: 14px;
  text-align: center;
  &.hyundai {
    border-color: ${Colors.black1d};
    background: ${Colors.black1d};
    color: ${Colors.white};
  }
  &.shinhan {
    border-color: #5fdcff;
    background: #5fdcff;
    color: ${Colors.black};
  }
  &.lotte {
    border-color: #9000ff;
    background: #9000ff;
    color: ${Colors.white};
  }
  &.samsung {
    border-color: ${Colors.blue};
    background: ${Colors.blue};
    color: ${Colors.white};
  }
  &.kb {
    border-color: ${Colors.boldApricot};
    background: ${Colors.boldApricot};
    color: ${Colors.black};
  }
  &.bc {
    border-color: ${Colors.red};
    background: ${Colors.red};
    color: ${Colors.white};
  }
  &.kakao {
    border-color: ${Colors.yellow};
    background: ${Colors.yellow};
    color: ${Colors.black};
  }
`;

const AddInputControl = InputControl.extend`
  font-size: 16px;
  &.center {
    text-align: center;
  }
`;

const CancelButton = Button.extend`
  font-size: 16px;
  color: ${Colors.boldGray};
`;

const SaveButton = Button.extend`
  font-size: 16px;
`;

export default {
  AddBox,
  Inner,
  BoxTitle,
  ValueBox,
  ValueLabel,
  AddFormGroup,
  RadioControl,
  LabelButton,
  FormGroup,
  AddInputControl,
  CancelButton,
  SaveButton,
  ButtonGroup,
};
