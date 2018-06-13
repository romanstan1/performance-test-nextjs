import {lightgrey, mediumgrey, darkgrey, backgroundgrey} from '../../colors'
import styled from 'styled-components'

export const StyledPLP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  text-align: center;
  background: white;
  div.landing-image {
    max-height: 330px;
    overflow: hidden;
    min-width: 100%;
    background: ${darkgrey};
    img {
      min-height: 200px;
      max-width: 100%;
      height:auto;
    }
  }
  div.heading {
    margin: 10px;
    padding-top: 30px;
    font-weight: 600;
    font-size: 19px;
  }
  div.subheading {
    margin: 10px;
    font-size: 15px;
    padding: 0 10%;
  }
}
`
export const ImageBlock = styled.div`
  
`
