import React, {Component} from 'react'
import InfoBox from '../../components/InfoBox';
import CTAButton from '../../components/CTAButton';
import Nav from '../../components/Nav';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import {StyledBasket} from './style'
import ProductDetailList from '../../components/ProductDetailList';
import {HeroBlock} from '../../components/HeroBlock';

const deleteItem = (uuid) => (dispatch) => {
  return dispatch({
    type: 'DELETE_ITEM',
    payload: uuid
  })
}

class Basket extends Component {

  handleDelete = (uuid) => () => {
    const {user, dispatch} = this.props
    dispatch(deleteItem(uuid))
    const database = firebase.database().ref('users/' + user + "/basket/" + uuid).remove();
  }

  render() {
    const {basket} = this.props
    return (
      <div>
        <Nav/>
        <HeroBlock>
          <h3>You have {basket.length} item{basket.length === 1?'':'s'} in your basket</h3>
          <CTAButton>
            Go to checkout
          </CTAButton>
        </HeroBlock>
        <ProductDetailList items={basket} handleDelete={this.handleDelete} isBasket={true}/>
        <InfoBox/>
      </div>
    )
  }
}
export default connect(state => ({
  user: state.user,
  basket: state.basket
}))(Basket)
