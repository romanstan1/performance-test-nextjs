import React, {Component, Fragment} from 'react'
import {StyledPLP, StyledImageBlock} from './style'
import Divider from '@material-ui/core/Divider';
import "isomorphic-fetch";
import { Link, Router } from '../../routes'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import LazyLoad from 'react-lazyload'
import {connect} from 'react-redux'

class ProductListing extends Component {

  static async getInitialProps ({query, reduxStore}) {
    const route = query['0']
    const res = await fetch(`https://performance-test-next.firebaseio.com/${route}.json?orderBy="$key"&endAt="19"`)
    const data = await res.json()
    reduxStore.dispatch({
      type: 'ADD_INITIAL_PROPS',
      payload: Object.values(data)
    })
    return {route}
    // return {route, data: Object.values(data)}
  }

  async fetchMoreItems(start, end) {

    const res = await fetch(`https://performance-test-next.firebaseio.com/${this.props.route}.json?orderBy="$key"&startAt="${start}"&endAt="${end}"`)
    const data = await res.json()

    this.props.dispatch({
      type: 'ADD_MORE_LISTINGS',
      payload: Object.values(data)
    })

  }

  render() {
    const {data, route, page} = this.props
    return (
      <Fragment>
        <Nav/>
        <StyledPLP>
          <div className="landing-image">
            <img src={`/static/landing-plp/${route}.jpg`} alt=""/>
          </div>
          <br/><br/>
          <h3>All {route}</h3>
          <h2>Showing {(page)*20} of {route === 'sunglasses'? 85 : 615}</h2>
          <div className='filters'>
            <div>Filter frames</div>
            <div>Search frames</div>
          </div>
          {
            data.map(item =>
              <LazyLoad height={300} offset={0} key={item.id}>
                <Link route={`/${route}/${item.id}-${item.brand}-${item.price}`}>
                  <StyledImageBlock>
                    <img src={'static/all-plp/' + item.images[0]} alt=""/>
                    <h2>{item.brand}</h2>
                    <h3>£{item.price}</h3>
                  </StyledImageBlock>
                </Link>
              </LazyLoad>
            )
          }
          <div className='show-more'
            onClick={() => this.fetchMoreItems(page*20, ((page+1)*20)-1) }>
            Show more
          </div>
          </StyledPLP>
          <Footer/>
      </Fragment>
    )
  }
}

export default connect(state => ({
  data: state.data,
  page: state.page
}))(ProductListing)





// {/* <div className="heading">{content.heading} </div>
// <div className="subheading">{content.subheading} </div> */}
// {/* <Divider style={{width:'100%'}} /> */}
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
