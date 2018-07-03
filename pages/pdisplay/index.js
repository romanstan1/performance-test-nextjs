import React, {Component, Fragment} from 'react'
import {Style, Shipping, Recommended} from './style'
import CTAButton from '../../components/CTAButton'
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux'
import {addToBasket} from './actions'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import Carousel from '../../components/Carousel'
import "isomorphic-fetch";
import { Link, Router } from '../../routes'
import CheckConnection from '../../components/CheckConnection'
import * as firebase from 'firebase'

async function fetchItem(route, id) {
  const res = await fetch(`https://specsavers-images.firebaseio.com/${route}.json?orderBy="id"&equalTo="${id}"`)
  const data = await res.json()
  return Object.values(data)[0]
}

class ProductDisplay extends Component {

  static async getInitialProps ({query}) {
    const route = query['0']
    const id = query.slug
    let product
    try {
      product = await fetchItem(route, id)
    } catch(err) {
      console.log('error: ', err)
      product = null
    }

    return {route, product}
  }


  componentDidMount() {
    window.scrollTo( 0, 0 )

    const {product, dispatch} = this.props
    //
    // const database = firebase.database();
    // const auth = firebase.auth()
    //
    // auth.onAuthStateChanged(user => {
    //   if (user) database.ref('users/' + user.uid + "/recent").push().set(product)
    // })

  }

  handleChange = e => {
    this.setState({ color: e.target.value })
  }

  handleAddToBasket = () => {
    const {product, dispatch} = this.props
    dispatch(addToBasket(product))

    const database = firebase.database();
    const auth = firebase.auth()

    auth.onAuthStateChanged(user => {
      if (user) database.ref('users/' + user.uid + "/basket").push().set(product)
    })

    // Router.pushRoute('/basket')
  }

  render() {
    const {product} = this.props
    return (
      <Style>
        <Nav/>
        {
          product?
          <Fragment>
            <Carousel id={product.id} images={product.urls} brand={product.brand} price={product.price}/>
            <br/><br/>
            <CTAButton onClick={this.handleAddToBasket}>
              Add To Basket
            </CTAButton>
          </Fragment>
          :
          <CheckConnection plural={false}/>
        }

        <br/><br/>
        <Shipping>
          <h3>Free shipping and returns on every order</h3>
          <p>
            We have a 30-day, hassle-free return or exchange policy as well as a one-year,
            no scratch guarantee for our lenses;
            we'll replace your scratched lenses for free within the first 12 months.
          </p>
        </Shipping>
        <Recommended>
          [Recommended items go here]
        </Recommended>
        <Footer/>
      </Style>
    )
  }
}

export default connect(state => ({
  // product: state.product
}))(ProductDisplay)
