import styled from 'styled-components'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, electricblue, hoverelectricblue} from '../../../colors'

export const StyledSearchHeader = styled.div`
  width: 100%;
  font-size: 0px;
  padding: 5px 15px;
  position: relative;
  display: grid;
  grid-template-columns: 48px auto 48px ;
  background: white;
  box-shadow: 0 4px 15px -4px ${mediumgrey};

  input {
    display: inline-block;
    line-height: 48px;
    height: 48px;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    text-indent: 10px;
    font-size: 16px;
    border-width: 0px;
    padding: 5px 0;
  }
`;

export const StyledSearchResults = styled.div`
  width: 100vw;
  min-width: 250px;
  max-width: 510px;
  padding-bottom: 100px;
`;

export const StyledShowingResultsBar = styled.div`
  justify-content: center;
  align-items: center;
  padding: 7px 12px 7px 24px;
  margin: 20px;
  border-radius: 30px;
  background: ${mediumgrey};
  color: white;
  line-height: 35px;
  position: relative;
  p {
    text-align: left;
    width: 85%;
    font-weight: 400;
    font-size: 15px;
    span {
      font-weight: 600;
    }
  }
  > span {
    position: absolute;
    right: 15px;
    top: calc(50% - 17px);
  }
`;
