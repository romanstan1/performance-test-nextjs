import {lightgrey, mediumgrey, darkgrey, backgroundgrey} from '../../colors'
import styled from 'styled-components'

export const StyledPLP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  text-align: center;
  background: white;
  padding-bottom: 20px;
  div.landing-image {
    font-size: 0px;
    overflow: hidden;
    img {
      background: ${darkgrey};
      width: 100%;
      height: 64.705882352vw;
      max-height: 330px;
    }
  }
  div.filters {
    display: flex;
    justify-content:space-around;
    align-items: center;
    width: 65%;
    min-width: 245px;
    margin: 20px 0;
    div {
      cursor:not-allowed;
      padding: 8px 15px;
      font-size: 13px;
      color: ${mediumgrey};
      border: 1px solid ${lightgrey};
    }
  }
  div.show-more {
    cursor: pointer;
    padding: 8px 26px;
    font-size: 13px;
    color: ${mediumgrey};
    border: 1px solid ${lightgrey};
    margin: 20px 0;
    &:hover {
      color: white;
      border: 1px solid ${darkgrey};
      background: ${darkgrey}
    }
  }
}
`

export const StyledImageBlock = styled.div`
  width: 100%;
  cursor: pointer;
  img {
    width: 80%;
    height: 45.019607843vw;
    max-height: 229.6px;
  }
  h2 {
    transform: translateY(-35px);
    font-size: 15px;
  }
  h3 {
    transform: translateY(-30px);
    font-size: 14px;
  }
`
