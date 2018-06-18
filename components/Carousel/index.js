import React, {Component, Fragment} from 'react'
import Radio from '@material-ui/core/Radio';
import {lightgrey, mediumgrey, darkgrey, backgroundgrey} from '../../colors'
import styled from 'styled-components'

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
    svg {
      font-weight: 100;
      width: 22px;
      height: 22px;
      fill: ${mediumgrey};
    }
  }
  h2 {
    transform: translateY(-15px);
    font-size: 15px;
  }
  h3 {
    transform: translateY(-10px);
    font-size: 14px;
  }
`

export default class Carousel extends Component {
  state = {
    level: '0'
  }
  handleClick = (e) => {
    this.setState({level: e.target.value})
  }

  render() {
    const {images, brand, price} = this.props
    const {level} = this.state
    return (
      <StyledImageBlock>
        <div className='eachItem'>
          {
            images.map(item =>
              <img
                style={{transform: `translateX(-${level * (100 / 0.8)}%)`}}
                src={item} alt="" key={item}
              />
            )
          }
        </div>

        <div className='radios'>
          {
            images.map((item, i) =>
              <Radio
                key={item + i}
                checked={level === i.toString()}
                onChange={this.handleClick}
                value={`${i}`}
                name="radio-button-demo"
                color="default"
              />
            )
          }
        </div>

        <h2>{brand}</h2>
        <h3>£{price}</h3>
      </StyledImageBlock>
    )
  }
}
