import React from 'react'
import InfoBox from '../../components/InfoBox';
import CTAButton from '../../components/CTAButton';
import Nav from '../../components/Nav';
import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, offwhite} from '../../colors'

import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Cancel';

const StyledBasket = styled.div``

const BasketItems = styled.div`
  border-top: 1px solid ${lightgrey};
  display: flex;
  flex-direction: column;
  background: white;
  padding: 0px 10px 0 10px;
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
    h4 {
      font-size: 15px;
      padding: 10px 0;
      color: ${darkgrey};
    }
    p {
      font-size: 13px;
      font-style: italic;
      text-indent: 5px;
      text-transform: capitalize;
      color: ${mediumgrey};
    }
    img {
      max-width: 40%;
      height: 100px;
    }
    div.price {
      color: ${darkgrey};
      margin-botton: 10px;
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
`
const GoToCheckout = styled.div`
display: flex;
justify-content:center;
align-self: center;
flex-direction: column;
padding: 40px 0;
h3 {
  text-align: center;
  padding: 10px 0;
  font-size: 16px;
}
`


const Basket = ({basket, dispatch}) => {
  const handleDelete = (id) => () => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: id
    })
  }
  return <StyledBasket>
    <Nav/>
    <GoToCheckout>
      <h3>You have {basket.length} item{basket.length === 1?'':'s'} in your basket</h3>
      <CTAButton>
        <MenuItem>Go to checkout</MenuItem>
      </CTAButton>
    </GoToCheckout>
    <BasketItems>
      {
        basket.map((item, i)=>
        <div className='item' key={i}>
          <img src={'/'+ item.image} alt=""/>
          <div className='text'>
            <h4>{item.brand}</h4>
            <p>{item.color}</p>
          </div>
          <div className="price">£{item.price}</div>
          <div className='remove'>
            <IconButton onClick={handleDelete(item.id)} style={{ width:42, height:42}}>
              <Delete style={{ fontSize:24, fill:'#414b56'}}/>
            </IconButton>
          </div>
        </div>
      )}
    </BasketItems>

    <InfoBox/>
  </StyledBasket>
}

export default connect(state => ({
  basket: state.basket
}))(Basket)
