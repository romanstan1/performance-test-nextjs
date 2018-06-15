import React, {Component, Fragment} from 'react'
import {StyledPLP, StyledImageBlock} from './style'
import Divider from '@material-ui/core/Divider';
import "isomorphic-fetch";
import { Link, Router } from '../../routes'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import LazyLoad from 'react-lazyload'
import {connect} from 'react-redux'
import Radio from '@material-ui/core/Radio';


class Carousel extends Component {
  state = {
    level: '0'
  }
  handleClick = (e) => {
    this.setState({level: e.target.value})
  }

  render() {
    const {images, brand, price} = this.props
    const {level} = this.state
    return (
      <StyledImageBlock>
        <div className='eachItem'>
          {
            images.map(item =>
              <img
                style={{transform: `translateX(-${level * (100 / 0.8)}%)`}}
                src={'static/all-plp/' + item} alt="" key={item}
              />
            )
          }
        </div>

        <div className='radios'>
          {
            images.map((item, i) =>
              <Radio
                key={item + i}
                checked={level === i.toString()}
                onChange={this.handleClick}
                value={`${i}`}
                name="radio-button-demo"
                color="default"
              />
            )
          }
        </div>

        <h2>{brand}</h2>
        <h3>£{price}</h3>
      </StyledImageBlock>
    )
  }
}












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
                  <Carousel id={item.id} images={item.images} brand={item.brand} price={item.price}/>
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
