import React, {Component, Fragment} from 'react'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey} from '../../colors'
import styled from 'styled-components'
import { Link, Router } from '../../routes'
import {connect} from 'react-redux'
import {LazyImage} from 'lazy-react'
import LazyLoad from 'react-lazy-load'
import ReactTouchEvents from "react-touch-events";

const StyledCarousel = styled.div`
  display: block;
  text-align: center;
  position: relative;

  div.images {
    overflow-x:hidden;
    overflow-y: hidden;
    white-space: nowrap;
    position: relative;
    width: 100%;
    span {
      transition: 0.2s ease;
      margin: 0 10%;
      display: inline-block;
      width: 80%;
      height: 45.019607843vw;
      max-height: 229.6px;
    }
    img {
      width: 100%;
      display: block;
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
`;

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
`;

class Carousel extends Component {
  state = {
    level: '0'
  }
  handleClick = (e) => {
    this.setState({level: e.target.dataset.value})
  }
  handleRouteClick = () => {
    const {route, id} = this.props
    this.props.dispatch({type: "OPEN_SEARCH_DRAWER", payload: false })
    Router.pushRoute(`/${route}/${id}`)
  }
  handleSwipe = (direction) => {
    if(direction === 'left') this.changeLevel(1)
    else if (direction === 'right') this.changeLevel(-1)
  }
  changeLevel = (dir) => {
    console.log('length of image data: ', this.props.images.length)
    const {images} = this.props
    let newLevel = parseInt(this.state.level) + dir
    if(newLevel > images.length - 1) newLevel = 0
    else if(newLevel < 0) newLevel = images.length - 1
    this.setState({level: newLevel.toString()})
  }

  render() {

    const {images, brand, price, route, id} = this.props
    const {level} = this.state
    return (
      <StyledCarousel>
        <ReactTouchEvents onSwipe={ this.handleSwipe } >
          <div className='images'>
              {
                images.map((item,index) =>
                <span
                  style={!!route ?
                    {transform: `translateX(-${level * (100 / 0.8)}%)`,cursor: 'pointer'}:
                    {transform: `translateX(-${level * (100 / 0.8)}%)`}}
                  onClick={!!route ? this.handleRouteClick : null}  // if route is true means its the plp page
                  onDragEnd={!!route ? this.handleRouteClick : null}
                  key={item}
                  >
                  <LazyLoad
                    offsetVertical={400}
                    offsetHorizontal={!!route || level === '0' ? 100 : 1000}
                      // if route is true means its the plp page // ie prefetch quicker on pdp and search
                  >
                    <img src={item} alt=""/>
                    {/* <LazyImage
                      link={item}
                      offset={!!route ? 50 : 1000} // if route is true means its the plp page // ie
                        fetch all on pdp and search
                    /> */}
                  </LazyLoad>
                </span>
                )
              }
          </div>
        </ReactTouchEvents>

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

      </StyledCarousel>
    )
  }
}
export default connect()(Carousel)
