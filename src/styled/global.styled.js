import { injectGlobal } from 'vue-styled-components';
import Colors from '../assets/color';

injectGlobal`
  html,
  body {
    height: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
    * {
      font-family: "Nanum Gothic Coding", Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }
  
  ul {
    padding: 0 0 0 10px;
    margin: 0;
  }
  
  li {
    list-style: none;
  }
  
  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }
  
  p {
    padding: 0;
    margin: 0;
  }
  
  .font {
    &.black {
      color: ${Colors.black}
    }
    &.white {
      color: ${Colors.white}
    }
    &.gray-light {
      color: ${Colors.lightGray}
    }
    &.gray {
      color: ${Colors.gray}
    }
    &.gray-bold {
      color: ${Colors.boldGray}
    }
    &.gray-dark {
      color: ${Colors.darkGray}
    }
    &.red {
      color: ${Colors.red}
    }
    &.blue {
      color: ${Colors.blue}
    }
    &.blue-dark {
      color: ${Colors.darkBlue}
    }
    &.yellow-light {
      color: ${Colors.lightYellow}
    }
    &.yellow {
      color: ${Colors.yellow}
    }
    &.apricot {
      color: ${Colors.apricot}
    }
    &.apricot-bold {
      color: ${Colors.boldApricot}
    }
    &.s10 {
      font-size: 10px;
    }
    &.s12 {
      font-size: 12px;
    }
    &.s14 {
      font-size: 14px;
    }
    &.s16 {
      font-size: 16px;
    }
    &.s18 {
      font-size: 18px;
    }
    &.s20 {
      font-size: 20px;
    }
    &.s24 {
      font-size: 24px;
    }
    &.s30 {
      font-size: 30px;
    }
    &.s36 {
      font-size: 36px;
    }
    &.s40 {
      font-size: 40px;
    }
    &.s50 {
      font-size: 50px;
    }
    &.s60 {
      font-size: 60px;
    }
    &.w1 {
      font-weight: 100;
    }
    &.w2 {
      font-weight: 200;
    }
    &.w3 {
      font-weight: 300;
    }
    &.w4 {
      font-weight: 400;
    }
    &.w5 {
      font-weight: 500;
    }
    &.w6 {
      font-weight: 600;
    }
    &.w7 {
      font-weight: 700;
    }
    &.w8 {
      font-weight: 800;
    }
    &.w9 {
      font-weight: 900;
    }
    &.normal {
      font-weight: normal;
    }
    &.bold {
      font-weight: bold;
    }
    &.bolder {
      font-weight: bolder;
    }
    &.left {
      text-align: left;
    }
    &.center {
      text-align: center;
    }
    &.right {
      text-align: right;
    }
  }
  
  #calendar {
    position: absolute;
    top: 0;
    right: 0;
    width: 245px;
    border-radius: 4px;
    background: ${Colors.white};
    box-shadow: 0 0 30px 0 ${Colors.black1d}40;
    overflow: hidden;
    z-index: 1;
    transform: translateY(50px);
    &.sticker {
      position: static;
      width: 247px;
      border: 1px solid ${Colors.gray};
      box-shadow: none;
      margin: 5px auto;
      transform: none;
    }
    .year-month {
      position: relative;
      padding: 15px 10px;
      border-bottom: 1px solid ${Colors.gray};
      text-align: center;
      font-size: 14px;
      .icon {
        position: absolute;
        top: 50%;
        height: 19px;
        transform: translateY(-50%);
        &.left {
          left: 10px;
        }
        &.right {
          right: 10px;
        }
      }
    }
    .date {
      display: inline-block;
      width: 35px;
      height: 35px;
      line-height: 33px;
      text-align: center;
      color: ${Colors.black};
      font-size: 12px;
      cursor: pointer;
      &.sun {
        .value {
          color: ${Colors.red};
        }
      }
      &.today {
        .value {
          background: ${Colors.red};
          color: ${Colors.white};
        }
      }
      &.selected {
        .value {
          background: ${Colors.black};
          color: ${Colors.white};
        }
      }
      &.active {
        .value {
          opacity: 1;
        }
      }
      .value {
        display: inline-block;
        width: 25px;
        height: 25px;
        line-height: 25px;
        border-radius: 50%;
        margin: 5px;
        opacity: 0.3;
      }
    }
    .time {
      padding: 5px 10px;
      text-align: center;
      border-top: 1px solid ${Colors.gray};
      .time-label {
        display: inline-block;
        width: 50px;
        height: 100%;
        font-size: 12px;
      }
      .hour,
      .minute {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 30px;
        border: 0;
        margin: 0;
        text-align: center;
        cursor: pointer;
        &.open {
          .time-selector {
            display: block;
          }
        }
        input {
          width: 100%;
          height: 100%;
          text-align: center;  
          outline: none;
        }
        .time-selector {
          position: absolute;
          display: none;
          top: 0;
          left: 0;
          width: 100%;
          height: 150px;
          border-radius: 4px;
          background: #fff;
          box-shadow: 0 0 30px 0 ${Colors.black1d}40;
          padding: 0;
          margin: 0;
          overflow: auto;
          transform: translateY(-100%);
          .time-item {
            list-style: none;
            width: 100%;
            height: 30px;
            padding: 10px;
            text-align: center;
          }
        }
      }
      .time-separator {
        display: inline-block;
        width: 20px;
      }
    }
  }
`;
