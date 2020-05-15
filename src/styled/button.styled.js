import styled from 'vue-styled-components';
import Colors from '../assets/color';

const Button = styled.button`
  position: relative;
  height: 40px;
  padding: 0 20px;
  border: 1px solid ${Colors.gray};
  border-radius: 4px;
  background: ${Colors.white};
  transition: all 0.3s ease;
  cursor: pointer;
  outline: none;
  &.hidden {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
  &.btn-sm {
    height: 30px;
    padding: 0 10px;
    font-size: 12px;
  }
  &.btn-none {
    border: 0 !important;
    background: none !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  &.btn-select {
    border-radius: 2px;
    width: 100%;
  }
  &.btn-close {
    float: right;
    position: relative;
    width: 60px;
    height: 60px;
    i.img-sprite {
      left: 50%;
      width: 20px;
      height: 20px;
      margin: -10px 0 0 -10px;
      background-position: -275px -255px;
    }
  }
  &.btn-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 56px;
    height: 60px;
    padding: 0 20px;
    transition: all 0.3s ease;
    i.img-sprite {
      left: 50%;
      width: 16px;
      height: 30px;
      margin: -15px 0 0 -8px;
      background-position: -16px -98px;
      background-size: 260px 308px !important;
    }
  }
  &.btn-round {
    border-radius: 50%;
    padding: 0;
  }
  &.active,
  &.selected,
  &:hover:not(.btn-none) {
    border-color: ${Colors.black};
    background: ${Colors.black};
    color: ${Colors.white};
  }
`;

const ButtonGroup = styled.div`
  button,
  a {
    width: 18.4%;
    margin: 0 2% 2% 0;
    vertical-align: top;
    &:nth-child(5n),
    &:last-child {
      margin-right: 0;
    }
  }
  &.w2 {
    button,
    a {
      width: 49%;
      margin-bottom: 0;
    }
  }
  &.w3 {
    button,
    a {
      width: 32%;
      margin-bottom: 0;
    }
  }
  &.w4 {
    button,
    a {
      width: 23.5%;
      margin-bottom: 0;
    }
  }
  &.w5 {
    button,
    a {
      margin-bottom: 0;
    }
  }
  &.none-space {
    button,
    a {
      margin-right: 0;
      &:first-child {
        border-right: 0;
      }
      &:last-child {
        border-left: 0;
      }
    }
  }
`;

export { Button, ButtonGroup };
