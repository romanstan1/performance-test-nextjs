import React, {Component} from 'react'
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

// const recommendedBrands =  [
//   'Specsavers',
//   'Aurora',
//   'Specsavers'
// ]
// const recommendedPrices =  [
//   '79',
//   '129',
//   '89'
// ]

async function fetchItem(route, id) {
  console.log(route, id)
  const res = await fetch(`https://specsavers-images.firebaseio.com/${route}.json?orderBy="id"&equalTo="${id}"`)
  const data = await res.json()
  return Object.values(data)[0]
}

class ProductDisplay extends Component {

  static async getInitialProps ({query}) {
    const route = query['0']
    const id = query.slug
    const product = await fetchItem(route, id)
    return {route, product}
  }

  handleChange = e => {
    this.setState({ color: e.target.value })
  }

  handleAddToBasket = () => {
    const {product, dispatch} = this.props
    dispatch(addToBasket(product))
    Router.pushRoute('/basket')
  }

  render() {
    const {urls, id, brand, price} = this.props.product
    return (
      <Style>
        <Nav/>
        <Carousel id={id} images={urls} brand={brand} price={price}/>
        <br/><br/>
        <CTAButton>
          <MenuItem onClick={this.handleAddToBasket}>
            Add To Basket
          </MenuItem>
        </CTAButton>
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

// {/* <Recommended>
//   <h3>Recommended</h3>
//
//   {
//     recommendedAssets.map((img, i) =>
//     <div className='image-wrap' key={img}>
//       <img src={img} alt=""/>
//       <div className="text">
//         {/* <div className="name">{recommendedBrands[i]}</div> */}
//         {/* <div className="price">£{recommendedPrices[i]}</div> */}
//       </div>
//     </div>
//   )
// }
//
// </Recommended> */}
