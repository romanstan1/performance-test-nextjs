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
    margin: 5px;
    border-bottom: 1px solid ${lightgrey};
    a {
      display: block;
      width: 100%;
      position: relative;
      display: flex;
      justify-content:space-around;
      align-items: center;
      margin: 40px 0;
      padding: 5px 0;
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
      top: 0px;
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

export default ({items, handleDelete}) => {
  return <StyledProductDetails>
  {
    items.map((item, i)=>
      <div className='item' key={i}>
        <Link key={i} prefetch route={`/${item.route}/${item.id}`}>
          <a>
            <div className='image'>
              <img src={item.urls[0]} alt=""/>
            </div>
            <div className='text'>
              <h4>{item.brand}</h4>
            </div>
            <div className="price">£{item.price}</div>
          </a>
        </Link>
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
