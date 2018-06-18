import React, {Component, Fragment} from 'react'
import {StyledPLP, StyledImageBlock} from './style'
import Divider from '@material-ui/core/Divider';
import "isomorphic-fetch";
import { Link, Router } from '../../routes'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import LazyLoad from 'react-lazyload'
import {connect} from 'react-redux'
import Carousel from '../../components/Carousel'

async function fetchItems(route, start, end) {
  const res = await fetch(`https://specsavers-images.firebaseio.com/${route}.json?orderBy="$key"&startAt="${start}"&endAt="${end}"`)
  const data = await res.json()
  return data
}

const addListings = (data, type) => {
  return dispatch => dispatch({
    type, payload: Object.values(data)
  })
}
const viewProductPdp = (item) => {
  return dispatch => dispatch({
    type: 'VIEW_PRODUCT_PDP',
    payload: item
  })
}

class ProductListing extends Component {

  static async getInitialProps ({query, reduxStore}) {
    const route = query['0']
    const data = await fetchItems(route, 0, 19)
    reduxStore.dispatch(addListings(data, 'ADD_INITIAL_LISTINGS'))
    return {route}
  }

  async fetchMoreItems(start, end) {
    const {route, dispatch} = this.props
    const data = await fetchItems(route, start, end)
    console.log('data', data)
    dispatch(addListings(data, 'ADD_MORE_LISTINGS'))
  }

  handleProductClick = (route, item) => {
    this.props.dispatch(viewProductPdp(item))
    Router.pushRoute(`/${route}/${item.id}`)
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
          <h2>All {route}</h2>
          <h3>Showing {(page)*20} of {route === 'sunglasses'? 65 : 599}</h3>
          <div className='filters'>
            <div>Filter frames</div>
            <div>Search frames</div>
          </div>
          {
            data.map((item, i) =>
              <LazyLoad key={item.id + i} height={300} offset={800}>
                <Carousel id={item.id} images={item.urls} brand={item.brand} price={item.price} route={route}/>
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
