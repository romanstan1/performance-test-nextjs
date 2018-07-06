import React, {Component, Fragment} from 'react'
import {Style, Shipping, RecentlyViewed} from './style'
import CTAButton from '../../components/CTAButton'
import Radio from '@material-ui/core/Radio';
import MenuItem from '@material-ui/core/MenuItem';
import {connect} from 'react-redux'
import {addToBasket, updateRecentlyViewed} from './actions'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import Carousel from '../../components/Carousel'
import "isomorphic-fetch";
import { Link, Router } from '../../routes'
import CheckConnection from '../../components/CheckConnection'
import * as firebase from 'firebase'
import ProductDetailList from '../../components/ProductDetailList';

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

  componentWillReceiveProps(nextProps) {
    if(!!nextProps.user && !nextProps.recent) {
      this.addToRecentlyViewed(nextProps.user)
    }
  }

  addToRecentlyViewed = (user) => {
    const database = firebase.database().ref('users/' + user + "/recent");
    const {product, dispatch, route} = this.props

    database.once('value', snapshot => {
      const count = snapshot.numChildren()
      if(count) {
        const originalItems = Object.values(snapshot.val())
        dispatch(updateRecentlyViewed(originalItems))
        const isUnique = !originalItems.some(item => item.id === product.id)

        let newItems = [].concat(originalItems)
        if(isUnique) newItems = [].concat(newItems, {...product, route})
        newItems = newItems.slice(-3)
        database.set(newItems)

      } else {
        database.push().update({...product, route})
      }
    })

  }

  componentDidMount() {
    window.scrollTo( 0, 0 )
    if(!!this.props.user) {
      this.addToRecentlyViewed(this.props.user)
    }
  }


  handleChange = e => {
    this.setState({ color: e.target.value })
  }

  handleAddToBasket = () => {
    const {product, dispatch, user, route} = this.props
    dispatch(addToBasket({...product, route}))
    const database = firebase.database();
    if (user) database.ref('users/' + user + "/basket").push().set({...product, route})
    Router.pushRoute('/basket')
  }

  render() {
    const {product, user, recent, route} = this.props
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
        {
          recent?
          <RecentlyViewed>
            <ProductDetailList items={recent}/>
          </RecentlyViewed>
          :null
        }
        <Footer/>
      </Style>
    )
  }
}

export default connect(state => ({
  user: state.user,
  recent: state.recent
}))(ProductDisplay)
