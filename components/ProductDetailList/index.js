import React, {Component} from 'react'
import styled from 'styled-components'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, offwhite} from '../../colors'
import Delete from '@material-ui/icons/Cancel';
import {StyledButtonBase} from '../Buttons/ButtonBase'
import { Link, Router } from '../../routes'

const StyledProductDetails = styled.div`
  border-top: 1px solid ${lightgrey};
  display: flex;
  flex-direction: column;
  background: white;
  padding: 0px 10px 0 10px;
  width: 100%;
  div.item {
    position: relative;
    display: flex;
    justify-content:space-around;
    align-items: center;
    margin: 20px 20px;
    padding: 20px 0 30px 0;
    border-bottom: 1px solid ${lightgrey};
    &:first-child {
      margin-top: 40px;
    }
    &:last-child {
      border-bottom: 0px solid ${lightgrey};
    }
    div.text {
      width: 30%;
      display: inline-flex;
      h4 {
        font-size: 15px;
        padding: 10px 0;
        color: ${darkgrey};
      }
    }
    p {
      font-size: 13px;
      font-style: italic;
      text-indent: 5px;
      text-transform: capitalize;
      color: ${mediumgrey};
    }
    div.image {
      position: relative;
      max-width: 40%;
      height: 100px;
      width: 40%;
      display: inline-flex;
      img {
        top: 50%;
        left: 0;
        position: absolute;
        transform: translate(0, calc(-50% - 0px));
        width: 100%;
      }
    }
    div.price {
      color: ${darkgrey};
      margin-botton: 10px;
      display: inline-flex;
      text-align: right;
    }
    div.remove {
      position: absolute;
      top: -20px;
      right: -10px;
      span.text {
        font-style: italic;
        font-size: 12px;
        color: ${mediumgrey};
        padding-right: 10px;
      }
    }
  }
`;

// {/* <Link prefetch route="/">
// </Link> */}

export default ({items, handleDelete}) => {
  return <StyledProductDetails>
  {
    items.map((item, i)=>
    <div className='item' key={i}>
      <div className='image'>
        <img src={item.urls[0]} alt=""/>
      </div>
      <div className='text'>
        <h4>{item.brand}</h4>
      </div>
      <div className="price">£{item.price}</div>
      {
        handleDelete?
        <div className='remove'>
          <StyledButtonBase
            onClick={handleDelete(item.uuid)}
            style={{ width:42, height:42}}>
            <Delete style={{ fontSize:24, fill:'#414b56'}}/>
          </StyledButtonBase>
        </div>
        :null
      }
    </div>
    )
  }
</StyledProductDetails>}
