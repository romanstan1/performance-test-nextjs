import styled from 'styled-components'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, offwhite} from '../../../colors'

export const CameraWrapper = styled.div`
  canvas {
    position: absolute;
    left: 0;
    top: 0;
    display: none;
    width: 0;
    height: 0;
  }
  position: relative;
  background: black;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  div#interactive {
    position: relative;
    width: 100%;
    height: 100%;
    video {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      ${'' /* // right: 5px;
      // bottom: 100px;
      // height: 100%;
      // margin: 0px 10px; */}
    }
  }
  div.cancel-button {
    position: absolute;
    bottom: 25px;
    width: 110px;
    padding: 8px;
    color: white;
    font-size: 18px;
    font-weight: bold;
    ${'' /* // text-transform: uppercase; */}
    text-align: center;
    cursor: pointer;
    z-index: 100;
    font-family: sans-serif;
    font-weight: lighter;
    &.reroute {
      font-size: 13px;
      right: 10px;
      color: black;
    }
    &.scan-pres {
      font-size: 13px;
      right: 130px;
      color: black;
    }
    &:hover {
      opacity: 1;
    }
  }
`;
