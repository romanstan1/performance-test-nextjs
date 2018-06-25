import {lightgrey, mediumgrey, darkgrey, backgroundgrey, electricblue, hoverelectricblue} from '../../colors'
import styled from 'styled-components'

export const StyledButtonBase = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
  outline: none;
  display: flex;
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
