import React from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'
import InfoBox from '../components/InfoBox';
import homeOne from './Home/assets/home100new.jpg'
import homeTwo from './Home/assets/home200new.jpg'
import Link from 'next/link'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, offwhite} from '../colors'
import ButtonBase from '@material-ui/core/ButtonBase';

const StyledButtonBase = styled(ButtonBase)`
  position: absolute !important;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);

  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  color: ${backgroundgrey} !important;
  border-radius: 40px !important;
  border: 1px solid ${backgroundgrey} !important;
  background:rgb(252, 252, 252, 0) !important;
  padding: 8px 22px 6px 22px !important;
  list-style: none;
  box-sizing: content-box;
  height: 24px !important;
  display: block !important;
  line-height: 1.5em !important;
  &:hover {
    color: ${darkgrey} !important;
    background:rgb(252, 252, 252, 0.9) !important;
  }
`;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  .imageWrap {
    position: relative;
    font-size: 0;
    min-width: 100%;
    display: block;
    max-width:725px;
    max-height:600px;
    img {
      min-height: 200px;
      display: block;
      width: 100%;
      height: auto;
    }
  }
`

export default () =>
  <StyledHome>
    <Nav/>
    <div className='imageWrap'>
      <img src={homeOne} alt=""/>
      <Link href="/glasses">
        <StyledButtonBase>Shop Glasses</StyledButtonBase>
      </Link>
    </div>
    <div className='imageWrap'>
      <img src={homeTwo} alt=""/>
      <Link href="/sunglasses">
        <StyledButtonBase>Shop Sunglasses</StyledButtonBase>
      </Link>
    </div>
    {/* <InfoBox/> */}
  </StyledHome>
