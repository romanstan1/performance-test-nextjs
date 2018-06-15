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

class ProductListing extends Component {

  static async getInitialProps ({query, reduxStore}) {
    const route = query['0']
    // const res = await fetch(`https://performance-test-next.firebaseio.com/${route}.json?orderBy="$key"&endAt="19"`)
    const res = await fetch(`https://performance-test-next.firebaseio.com/${route}.json?orderBy="$key"`)
    const data = await res.json()
    reduxStore.dispatch({
      type: 'ADD_INITIAL_PROPS',
      payload: Object.values(data)
    })
    return {route}
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
          <h2>All {route}</h2>
          <h3>Showing {(page)*20} of {route === 'sunglasses'? 85 : 615}</h3>
          <div className='filters'>
            <div>Filter frames</div>
            <div>Search frames</div>
          </div>
          {
            data.map((item, i) =>
              <Link route={`/${route}/${item.id}-${item.brand}-${item.price}`} key={item.id}>
                <LazyLoad height={300} offset={0}>
                  <Carousel id={item.id} images={item.images} brand={item.brand} price={item.price}/>
                  <div className='view-it'>
                    <span>ID:<span> {item.id} </span></span>
                    <span>Index: <span>{i}</span></span>
                  </div>
                </LazyLoad>
              </Link>
            )
          }
          {/* <div className='show-more'
            onClick={() => this.fetchMoreItems(page*20, ((page+1)*20)-1) }>
            Show more
          </div> */}
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
