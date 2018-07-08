import styled from 'styled-components'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, offwhite} from '../../colors'

export const StyledContacts = styled.div`
  background: white;
  height: 100vh;
  > div {
    padding-bottom: 50px;
    height: calc(60vh - 64px);
    background: ${backgroundgrey};
  }
`;

export const StyledContactPDP = styled.div`
  background: white;
`;

export const ProductDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div.image {
    background: white;
    width: calc(100% - 30px);
    max-height: 229.6px;
    height: 45.019607843vw;
    position: relative;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      display: block;
      max-height: 100%;
    }
  }
  div.text {
    border-top: 1px solid ${lightgrey};
    width: calc(100% - 30px);
    padding: 40px 15px;
    text-align: left;
    position: relative;
    color: ${darkgrey};
    h3 {
      font-size: 20px;
    }
    > div {
      justify-content: space-between;
      display: flex;
      h4 {
        color: ${darkgrey};
        font-size: 15px;
        padding: 20px 0;
        font-weight:400;
      }
    }
    h5 {
      font-size: 15px;
      font-weight:400;
    }
  }
  div.prescription {
    border-top: 1px solid ${lightgrey};
    width: calc(100% - 30px);
    padding: 30px 15px 60px 15px;
    text-align: center;
    color: ${mediumgrey};
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    p {
      padding: 0px 4px;
    }
  }

`;
