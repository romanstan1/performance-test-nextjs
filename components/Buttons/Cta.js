import {lightgrey, mediumgrey, darkgrey, backgroundgrey, electricblue, hoverelectricblue} from '../../colors'
import styled from 'styled-components'

const CTAButton = styled.div`
  margin: 20px auto;
  width: 200px;
  justify-content: center;
  font-size: 14px;
  font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif;
  color: ${backgroundgrey};
  border-radius: 40px;
  cursor: pointer;
  background:${electricblue};
  padding: 12px 33px;
  text-align: center;
  &:hover {
    background:${hoverelectricblue};
  }
`
export default CTAButton
