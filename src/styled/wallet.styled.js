import styled from 'vue-styled-components';
import Colors from '../assets/color';
import { Button } from './button.styled';
import { FormGroup, InputControl } from './form.styled';

const Wallet = styled.div`
  position: relative;
  .add-box-enter,
  .add-box-leave-to {
    opacity: 0;
  }
  .log-enter,
  .log-leave-to {
    opacity: 0;
  }
  .log-enter {
    transform: translateY(50%);
  }
  .log-leave-to {
    transform: translateX(-30%);
  }
  .log-enter-active {
    transition-duration: 1s !important;
  }
  .log-leave-active {
    transition-duration: 0.5s !important;
  }
`;

const SignForm = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  width: 300px;
  transform: translateX(-50%) translateY(-30%);
  label {
    &:last-child {
    .form-control {
      margin-bottom: 0;
    }
  }
`;

const SignInput = InputControl.extend`
  border-bottom-color: ${Colors.gray};
  margin-bottom: 10px;
  color: ${Colors.black};
  &:focus {
    border-bottom-color: ${Colors.black};
  }
`;

const SignButton = Button.extend`
  width: 100%;
  margin-top: 20px;
`;

const TotalValue = styled.h3`
  position: fixed;
  top: 0;
  right: 0;
  display: inline-block;
  width: 100%;
  height: 60px;
  line-height: 60px;
  margin-right: 30px;
  text-align: right;
  font-size: 14px;
  z-index: 6;
  &.increase {
    color: ${Colors.blue};
    &:before {
      content: '+';
      margin-right: 5px;
    }
  }
  &.loss {
    color: ${Colors.red};
    &:before {
      content: '-';
      margin-right: 5px;
    }
  }
`;

const Timeline = styled.div``;

const Date = styled.h3`
  padding-left: 5px;
  margin: 20px 0;
`;

const Log = styled.div`
  margin: 0 auto 15px;
  transition: all 0.3s ease;
`;

const Card = styled.div`
  position: relative;
  border-radius: 10px;
  background: ${Colors.white};
  box-shadow: 0 0 30px 0 ${Colors.black}40;
  padding: 20px 20px 20px 50px;
`;

const SymbolText = styled('span', { expenses: Boolean })`
  position: absolute;
  display: inline-block;
  top: 14px;
  left: 20px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  color: ${props => (props.expenses ? Colors.red : Colors.blue)};
  font-style: italic;
  font-weight: bold;
  font-size: 18px;
`;

const CloseButton = Button.extend`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  &:before,
  &:after {
    position: absolute;
    content: '';
    top: 50%;
    width: 16px;
    height: 2px;
    border-radius: 2px;
    background: ${Colors.darkGray};
    transition: transform 0.3s ease;
  }
  &:before {
    left: 2px;
    transform: translateY(-50%) rotate(45deg);
  }
  &:after {
    right: 2px;
    transform: translateY(-50%) rotate(-45deg);
  }
`;

const TextLabel = styled.span`
  display: inline-block;
  width: auto;
`;
const CardLabel = TextLabel.extend`
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  color: ${Colors.boldGray};
`;
const UserLabel = TextLabel.extend`
  color: ${Colors.darkGray};
  font-size: 10px;
`;
const PlaceLabel = TextLabel.extend`
  //position: absolute;
  //left: 20px;
  //bottom: 20px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;
const DescriptionLabel = TextLabel.extend`
  width: 100%;
  text-align: right;
  font-size: 14px;
  color: ${Colors.darkGray};
  margin-top: 20px;
`;
const ValueLabel = TextLabel.extend`
  width: 100%;
  margin-top: 10px;
  text-align: right;
  font-size: 20px;
  font-weight: bold;
  &.income {
    &:before {
      content: '+';
      margin-right: 5px;
    }
    color: ${Colors.blue};
  }
  &.expenses {
    &:before {
      content: '-';
      margin-right: 5px;
    }
    color: ${Colors.red};
  }
`;
const ShortDateLabel = TextLabel.extend`
  display: inline-block;
  width: 100%;
  padding: 0 10px;
  margin: 10px 0;
  color: ${Colors.darkGray};
  text-align: right;
  font-size: 14px;
`;

const FloatingAddButton = Button.extend`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50%;
  background: ${Colors.blue};
  box-shadow: 0 0 5px 0 ${Colors.darkGray};
  color: ${Colors.white};
  padding: 0;
  margin: 0;
  transition: transform 0.3s ease;
  &.cancel {
    transform: rotate(45deg);
  }
  &:hover {
    background: ${Colors.blue} !important;
  }
`;

export default {
  Wallet,
  SignForm,
  FormGroup,
  SignInput,
  SignButton,
  TotalValue,
  Timeline,
  Date,
  Log,
  Card,
  SymbolText,
  CloseButton,
  CardLabel,
  UserLabel,
  PlaceLabel,
  DescriptionLabel,
  ValueLabel,
  ShortDateLabel,
  InputControl,
  FloatingAddButton,
  Button,
};
