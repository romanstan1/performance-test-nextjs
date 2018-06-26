import {lightgrey, mediumgrey, darkgrey, backgroundgrey, electricblue, hoverelectricblue} from '../../colors'
import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem';

export const Header = styled.header`
  background: #fff;
  width: 100%;
  font-size: 0px;
  display: grid;
  grid-template-columns: 48px 48px auto 48px 48px;
  align-items: center;
  padding: 8px;
`;

export const StyledButtonBase = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background: white;
  outline: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
  border: 0px solid white;
  &:hover {
    border: 0px solid ${lightgrey};
    background: ${lightgrey};
  }
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  padding: 0 15px;
`;

export const Heading = styled.div`
  color: #414b56;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 48px;
  height: 48px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const NotificationBubble = styled.div`
  width: 22px;
  height: 22px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 11px;
  color: white;
  right: 0px;
  font-family: sans-serif;
  top: 0px;
  border: 2px solid white;
  border-color: inherit !important;
  background: ${electricblue};
  border-radius: 50%;
  &.active {
    display: none;
  }
`;

export const StyledList = styled.div`
  width: 85vw;
  min-width: 220px;
`
export const StyledMenuItem = styled(MenuItem)`
  font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif !important;
  font-size: 14px !important;
`;

export const StyledSpinner = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-width: 250px;
  max-width: 510px;
  .spinner {
    animation: rotator  1.4s linear infinite;
  }

  @keyframes rotator {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(270deg); }
  }

  .path {
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: dash  1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
  }

  @keyframes colors {
    0% { stroke: #4285F4; }
    25% { stroke: #DE3E35; }
    50% { stroke: #F7C223; }
    75% { stroke: #1B9A59; }
    100% { stroke: #4285F4; }
  }

  @keyframes dash {
    0% { stroke-dashoffset: 187; }
    50% {
      stroke-dashoffset: 46.75;
      transform:rotate(135deg);
    }
    100% {
      stroke-dashoffset: 187;
      transform:rotate(450deg);
    }
  }
`;

export const StyledModalContent = styled.div`
  background: ${backgroundgrey};
  width: 90%;
  height: 300px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2 {
    color: ${darkgrey};
    text-align: center;
    font-weight: 400;
    display: block;
  }
  h4 {
    padding-top: 5px;
    color: ${mediumgrey};
    text-align: center;
    font-weight: 400;
    line-height: 25px;
    display: block;
    height: 25px;
  }
  svg {
    fill: grey;
    fill: ${lightgrey};
  }
`;

export const ListeningButton = styled.div`
  float: right;
  width: 68px;
  height: 68px;
  cursor: pointer;
  background: white;
  outline: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 19px;
  position: relative;
  border: 0px solid white;
  -webkit-box-shadow: 6px 11px 39px -2px rgba(138,138,138,0.5);
  -moz-box-shadow: 6px 11px 39px -2px rgba(138,138,138,0.5);
  box-shadow: 6px 11px 39px -2px rgba(138,138,138,0.5);
  &.listening {
    background: ${electricblue};
    -webkit-box-shadow: 6px 11px 39px -2px rgba(138,138,138,0);
    -moz-box-shadow: 6px 11px 39px -2px rgba(138,138,138,0);
    box-shadow: 6px 11px 39px -2px rgba(138,138,138,0);
    &.pulse {
      animation: pulse 1s forwards;
    }
    svg {
      fill: white;
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 1px rgba(14, 88, 206, 0.1);
      box-shadow: 0 0 0 1px rgba(14, 88, 206, 0.1);
    }
    50% {
        -moz-box-shadow: 0 0 0 14px rgba(14, 88, 206, 0.3);
        box-shadow: 0 0 0 14px rgba(14, 88, 206, 0.3);
    }
    100% {
        -moz-box-shadow: 0 0 0 2px rgba(14, 88, 206, 0.1);
        box-shadow: 0 0 0 2px rgba(14, 88, 206, 0.1);
    }
  }
`;
