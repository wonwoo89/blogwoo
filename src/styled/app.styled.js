import styled from 'vue-styled-components';
import Colors from '../assets/color';

const App = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  transition: background-color 0.5s ease;
  .router-view {
    width: 100%;
    max-width: 1024px;
    padding: 20px 30px;
    margin: 80px auto 30px;
    transition: background-color 0.5s ease;
  }
`;
const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 10px 30px;
  z-index: 5;
`;
const NavBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${Colors.white};
  opacity: 0.9;
  z-index: 1;
  transition: background-color 0.5s ease;
`;
const Inner = styled.div`
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  z-index: 2;
`;
const Title = styled.h1`
  display: inline-block;
  margin-right: 6px;
  line-height: 40px;
`;

export default {
  App,
  Nav,
  NavBack,
  Inner,
  Title,
};
