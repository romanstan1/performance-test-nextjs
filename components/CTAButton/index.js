import {lightgrey, mediumgrey, darkgrey, backgroundgrey, electricblue, hoverelectricblue} from '../../colors'
import styled from 'styled-components'

const CTAButton = styled.div`
  li {
    margin: 20px auto;
    width: 200px;
    justify-content: center;
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    color: ${backgroundgrey};
    border-radius: 40px;
    ${'' /* border: 1px solid ${darkgrey}; */}
    background:${electricblue};
    ${'' /* background:rgb(252, 252, 252, 0); */}
    padding: 10px 28px;
    text-align: center;
    &:hover {
      ${'' /* color: ${darkgrey}; */}
      background:${hoverelectricblue};
      ${'' /* background:rgb(252, 252, 252, 0.9) */}
    }
  }
`
export default CTAButton
