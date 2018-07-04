import React, {Component} from 'react'
import styled from 'styled-components'
import Nav from '../../components/Nav'
import InfoBox from '../../components/InfoBox';
import Footer from '../../components/Footer';
import { Link, Router } from '../../routes'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, offwhite} from '../../colors'
import Image from '../../components/Image';

const StyledButtonBase = styled.div`
  cursor: pointer;
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
    width: 100vw;
    height: 82.758620918vw;
    display: block;
    max-width:510px;
    max-height:422.06896551px;
    img {
      min-height: 200px;
      display: block;
      width: 100%;
      height: auto;
      transition: opacity 0.3s;
      opacity: 1 !important;
      &.image-loaded {
        opacity: 1 !important;
      }
    }
  }
`

export default class Home extends Component {
  render() {
    return (
      <StyledHome>
        <Nav/>
        <div className='imageWrap'>
          <img src="/static/home/home100.jpg" alt="" style={{background: '#0b6281'}}/>
          <Link prefetch route="/glasses">
            <StyledButtonBase>Shop Glasses</StyledButtonBase>
          </Link>
        </div>
        <div className='imageWrap'>
          <img src="/static/home/home200.jpg" alt="" style={{background: '#010101'}}/>
          <Link prefetch route="/sunglasses">
            <StyledButtonBase>Shop Sunglasses</StyledButtonBase>
          </Link>
        </div>
        <InfoBox/>
        <Footer/>
      </StyledHome>
    )
  }
}
