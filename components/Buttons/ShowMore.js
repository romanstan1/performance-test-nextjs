import {lightgrey, mediumgrey, darkgrey, backgroundgrey, electricblue, hoverelectricblue} from '../../colors'
import styled from 'styled-components'

export const ShowMore = styled.div`
  cursor: pointer;
  display: inline-block;
  align-self: center;
  position: relative;
  padding: 8px 26px;
  font-size: 13px;
  max-width: 125px;
  color: ${mediumgrey};
  border: 1px solid ${lightgrey};
  margin: 20px auto;
  &:hover {
    color: white;
    border: 1px solid ${darkgrey};
    background: ${darkgrey}
  }
`
