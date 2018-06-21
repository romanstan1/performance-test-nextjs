import React, {Component, Fragment} from 'react'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey} from '../../colors'
import styled from 'styled-components'
import { Link, Router } from '../../routes'
import LazyLoad from 'react-lazyload'

const StyledImageBlock = styled.div`
  display: block;
  text-align: center;

  div.eachItem {
    overflow-x:hidden;
    overflow-y: hidden;
    white-space: nowrap;
    position: relative;
    width: 100%;
    img {
      transition: 0.2s ease;
      margin: 0 10%;
      display: inline-block;
      width: 80%;
      height: 45.019607843vw;
      max-height: 229.6px;
    }
  }
  div.radios {
    margin: 0px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-26px);
    z-index: 300;
    svg {
      font-weight: 100;
      width: 22px;
      height: 22px;
      fill: ${mediumgrey};
    }
  }
  div.text {
    line-height: 140%;
    h2 {
      font-size: 15px;
      color: ${darkgrey};
    }
    h3 {
      font-size: 14px;
      color: ${mediumgrey};
      font-weight: 400;
      padding-bottom: 10px;
    }
  }
`


const Radios = styled.div`
  padding: 10px 0;
  transform: translateY(0px);
  div {
    margin: 4px 15px;
    height: 30px;
    width: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${lightgrey};
    border-radius: 50%;
    &:hover {
      border: 1px solid ${darkgrey};
    }
    span {
      height: 16px;
      width: 16px;
      border-radius: 50%;
      background: white;
      display: inline-block;
    }
    &.focus span {
      background: ${mediumgrey};
    }
  }
`

export default class Carousel extends Component {
  state = {
    level: '0'
  }
  handleClick = (e) => {
    this.setState({level: e.target.dataset.value})
  }

  render() {
    const {images, brand, price, route, id} = this.props
    const {level} = this.state
    return (
      <StyledImageBlock>
        <div className='eachItem'>
          {
            images.map((item,index) =>
              route?
              <Link prefetch route={`/${route}/${id}`} key={item}>
                <span style={{cursor: 'pointer'}}>
                  <img
                    style={{transform: `translateX(-${level * (100 / 0.8)}%)`}}
                    src={item}
                    alt="" key={item}
                  />
                </span>
              </Link>
              :
              <img
                style={{transform: `translateX(-${level * (100 / 0.8)}%)`}}
                src={item}
                key={item}
              />
            )
          }
        </div>
        <div className='text'>
          <h2>{brand}</h2>
          <h3>£{price}</h3>
        </div>
        <Radios>
          {
            images.map((item, i) =>
              <div
                className={level === i.toString()? 'focus': null}
                key={item + i}
                onClick={this.handleClick}
                data-value={`${i}`}>
                <span data-value={`${i}`}/>
              </div>
            )
          }
        </Radios>
      </StyledImageBlock>
    )
  }
}
