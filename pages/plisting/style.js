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
  > h2 {
    color: ${darkgrey};
    font-size: 24px;
    font-weight: 600;
    text-transform: capitalize;
  }
  > h3 {
    margin: 10px 0;
    color: ${mediumgrey};
    font-size: 13px;
    font-weight: 400;
  }
  div.filters {
    display: block;
    width: 85%;
    min-width: 255px;
    margin: 20px 0;
    div {
      cursor: pointer;
      margin: 0 10px;
      display: inline-block;
      padding: 8px 15px;
      width: 130px;
      font-size: 13px;
      color: ${mediumgrey};
      border: 1px solid ${lightgrey};
    }
  }
  div.view-it {
    width: 510px;
    border-bottom: 3px solid blue;
    margin-bottom: 30px;
    > span {
      padding: 20px 30px;
      display:inline-block;
      font-family: sans-serif;
      color: grey;
      font-size: 22px;
      font-weight: 700;
      span {
        padding-left: 10px;
        font-family: sans-serif;
        color: black
      }
    }
  }
}
`
