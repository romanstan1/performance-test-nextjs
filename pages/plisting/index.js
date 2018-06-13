import React, {Component, Fragment} from 'react'
import {StyledPLP} from './style'
// import landingGlassesImage from './assets/glasses.jpg'
// import landingSunglassesImage from './assets/sunglasses.jpg'
import Divider from '@material-ui/core/Divider';
import "isomorphic-fetch";
import { Link, Router } from '../../routes'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import LazyLoad from 'react-lazyload'

export default class ProductListing extends Component {
  state = {
    page: 0
  }
  static async getInitialProps ({query}) {
    const route = Object.values(query)[0]
    const res = await fetch(`https://performance-test-next.firebaseio.com/${route}.json`)
    const data = await res.json()
    return {route, data}
  }

  render() {

    const {data, route} = this.props
    const {page} = this.state
    console.log('data', data )
    console.log('page', page )

    return (
      <Fragment>
        <Nav/>
        <StyledPLP>
          <div className="landing-image">
            <img src={`/static/landing-plp/${route}.jpg`} alt=""/>
          </div>

          {/* <div className="heading">{content.heading} </div>
          <div className="subheading">{content.subheading} </div> */}
          <br/><br/>
          {/* <Divider style={{width:'100%'}} /> */}
          <h2>Showing {(page+1)*20} of {data.length} {route}'s </h2>
          {
            this.props.data.slice(page*20 , (page + 1)*20).map(item =>
              <Link route="/" key={item.id}>
                <LazyLoad height={300} offset={0}>
                  <img src={'static/all-plp/' + item.images[0]} alt=""/>
                </LazyLoad>
              </Link>
            )
        }
        </StyledPLP>
        <Footer/>
      </Fragment>
    )
  }
}



// // statepage this.state.page
// // data
// /* {
// content.assets.map((img, i) => {
// const brand = brandNames[i%9]
// const price = prices[i%9]
// return (
// <Link to={`/pdp/${brand}-${price}-${img.slice(1, -4)}`} key={img}>
// // <LazyLoad height={300} offset={400}>
// <div className='image-wrap'>
// <img src={img} alt=""/>
// <div className="text">
// <div className="name">{brand}</div>
// <div className="price">£{price}</div>
// </div>
// </div>
// </LazyLoad>
// </Link>
// )
// })
// } */
