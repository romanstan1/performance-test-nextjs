import React from 'react'
import styled from 'styled-components'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, offwhite} from '../../colors'

const StyledInfoBox= styled.div`
  border-top: 1px solid ${lightgrey};
  padding: 25px 0;
  width: 100%;
  h2 {
    font-size: 16px;
    padding: 12px 35px;
    color: ${darkgrey};
  }
  div.content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    span {
      width: 50%;
      font-size: 13px;
      color: ${mediumgrey};
      padding: 12px 35px;
    }
  }
`
const InfoBox = () =>
  <StyledInfoBox>
    <h2>Products</h2>
    <div className="content">
      <span>Sunglasses</span> <span>Glasses</span>
      <span>Contact Lenses</span> <span>Accessories</span>
    </div>
    <div className="divider"/>
    <h2>Visit a store</h2>
    <div className="content">
      <span>Find a location</span><span>Book an eye test</span>
    </div>
    <div className="divider"/>
    <h2>About us</h2>
    <div className="content">
      <span>Our story</span> <span>Blog</span>
      <span>Careers</span> <span>Menu Item</span>
      <span>Menu Item</span> <span>Menu Item</span>
    </div>
  </StyledInfoBox>

export default InfoBox;
