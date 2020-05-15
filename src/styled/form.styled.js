import styled from 'vue-styled-components';
import Colors from '../assets/color';

const FormGroup = styled.div``;
const FormControl = styled.input`
  width: 100%;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid ${Colors.gray};
  background: none;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  &:active,
  &:focus,
  &.active {
    border-color: ${Colors.black};
  }
  &.border-none {
    border: 0;
  }
  &.warning {
    border-color: ${Colors.red};
  }
  &.warning + label {
    border-color: ${Colors.red} !important;
  }
`;

const InputControl = FormControl.extend`
  height: 30px;
  padding: 0 10px 5px;
  line-height: 25px;
`;

const TextControl = FormControl.extend`
  padding: 0 15px;
`;

export { FormGroup, FormControl, InputControl, TextControl };
