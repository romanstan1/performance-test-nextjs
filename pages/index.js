import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Nav from '../components/Nav'
import InfoBox from '../components/InfoBox';
import homeOne from './Home/assets/home100.jpg'
import homeTwo from './Home/assets/home200.jpg'
import MenuItem from '@material-ui/core/MenuItem';
import Link from 'next/link'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, offwhite} from '../colors'

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .lazyload-placeholder {
    background: ${mediumgrey};
  }
  .imageWrap {
    position: relative;
    font-size: 0;
    min-width: 100%;
    background: ${darkgrey};
    img {
      min-height: 275px;
      max-width: 100%;
      height: auto;
    }
  }
`

const MenuButton = styled.div`
  position: absolute;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  li {
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    color: ${backgroundgrey};
    border-radius: 40px;
    border: 1px solid ${backgroundgrey};
    background:rgb(252, 252, 252, 0);
    padding: 8px 22px 6px 22px;
    list-style: none;
    box-sizing: content-box;
    height: 24px;
    display: block;
    line-height: 1.5em;
    &:hover {
      color: ${darkgrey};
      background:rgb(252, 252, 252, 0.9)
    }
  }
`

export default () =>
  <StyledHome>
    <Nav/>
    <div className='imageWrap'>
      <img src={homeOne} alt=""/>
      <MenuButton>
        <Link href="/glasses">
          <MenuItem>Shop Glasses</MenuItem>
        </Link>
      </MenuButton>
    </div>
    <div className='imageWrap'>
      <img src={homeTwo} alt=""/>

      <MenuButton>
        <Link href="/sunglasses">
          <MenuItem>Shop Sunglasses</MenuItem>
        </Link>
      </MenuButton>
    </div>
    <InfoBox/>
  </StyledHome>
