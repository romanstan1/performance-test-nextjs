import React, {Component, Fragment} from 'react'
import {StyledPLP, StyledImageBlock} from './style'
import Divider from '@material-ui/core/Divider';
import "isomorphic-fetch";
import { Link, Router } from '../../routes'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import {connect} from 'react-redux'
import Carousel from '../../components/Carousel'
import {ShowMore} from '../../components/Buttons/ShowMore'
import CheckConnection from '../../components/CheckConnection'
import Drawer from './Drawer'
import {viewProductPdp, addListings} from './actions'

async function fetchItems(route, start, end) {
  const res = await fetch(`https://specsavers-images.firebaseio.com/${route}.json?orderBy="$key"&startAt="${start}"&endAt="${end}"`)
  const data = await res.json()
  return data
}

class ProductListing extends Component {

  static async getInitialProps ({query, reduxStore}) {
    const route = query['0']
    try {
      const data = await fetchItems(route, 0, 19)
      reduxStore.dispatch(addListings(data, 'ADD_INITIAL_LISTINGS'))
    } catch(err) {
      console.log('error: ', err)
    }
    return {route}
  }

  async fetchMoreItems(start, end) {
    const {route, dispatch} = this.props
    const data = await fetchItems(route, start, end)
    dispatch(addListings(data, 'ADD_MORE_LISTINGS'))
  }

  state = {
    whichDrawer: null,
    drawerOpen: false,
  }

  handleProductClick = (route, item) => {
    this.props.dispatch(viewProductPdp(item))
    Router.pushRoute(`/${route}/${item.id}`)
  }

  toggleDrawer = (bool, drawer) => () => {
    this.setState({drawerOpen: bool, whichDrawer: drawer})
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
          {
            data.length?
            <Fragment>
              <br/><br/>
              <h2>All {route}</h2>
              <h3>Showing {(page)*20} of {route === 'sunglasses'? 65 : 599}</h3>
              <div className='filters'>
                <div onClick={this.toggleDrawer(true, 'filters')}>Filters</div>
                <div onClick={this.toggleDrawer(true, 'sortBy' )}>Sort by</div>
              </div>
              <Drawer
                toggleDrawer={this.toggleDrawer}
                open={this.state.drawerOpen}
                whichDrawer={this.state.whichDrawer}
              />
            </Fragment>
          : null
          }
          {
            data.length? data.map((item, i) =>
              <Carousel key={item.id + i}
                id={item.id} images={item.urls}
                brand={item.brand}
                price={item.price} route={route}
              />
            )
            :
            <CheckConnection plural={true}/>
          }
          {
            data.length?
            <ShowMore onClick={() => this.fetchMoreItems(page*20, ((page+1)*20)-1) }>
              Show more
            </ShowMore>
            :null
          }
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
