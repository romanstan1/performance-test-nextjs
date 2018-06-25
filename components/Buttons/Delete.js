import {StyledButtonBase} from './ButtonBase'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, electricblue, hoverelectricblue} from '../../colors'
import styled from 'styled-components'
import Delete from '@material-ui/icons/Cancel';

const StyledDelete = styled.div`
  width: 34px;
  height: 34px;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
`

export default () =>
  <StyledDelete>
    <Delete style={{ fontSize:24, fill:'#414b56'}}/>
  </StyledDelete>
