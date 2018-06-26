import React from 'react';
import NavigationDrawer from './NavigationDrawer'
import SearchDrawer from './SearchDrawer'
import {connect} from 'react-redux'
import { Link, Router } from '../../routes'
import {MenuIcon, ShoppingBasketIcon, SearchIcon} from './nav_components'
import {Header, StyledButtonBase, Navbar, Heading, NotificationBubble} from './style'

class Nav extends React.Component {

  state = {
    left: false,
  }
  toggleNavDrawer = (open) => () => {
    this.setState({left: open, right: false})
  }
  toggleSearchDrawer = (open) => () => {
    this.props.dispatch({type: "OPEN_SEARCH_DRAWER", payload: open})
  }

  render() {
    return (
      <Header>

        <StyledButtonBase onClick={this.toggleNavDrawer(true)}>
          <MenuIcon/>
        </StyledButtonBase>
        <span></span>

        <Link prefetch route="/">
          <Heading>The Specs Store</Heading>
        </Link>

        <Link prefetch route="/basket">
          <StyledButtonBase>
            <ShoppingBasketIcon/>
            <NotificationBubble className={this.props.basket.length? '': 'active'}>
              {this.props.basket.length}
            </NotificationBubble>
          </StyledButtonBase>
        </Link>

        <StyledButtonBase onClick={this.toggleSearchDrawer(true)}>
          <SearchIcon/>
        </StyledButtonBase>

        <NavigationDrawer toggleDrawer={this.toggleNavDrawer} open={this.state.left}/>
        <SearchDrawer toggleDrawer={this.toggleSearchDrawer} open={this.props.searchDrawerOpen}/>

      </Header>
    )
  }
}

export default connect(state => ({
  basket: state.basket,
  searchDrawerOpen: state.searchDrawerOpen
}))(Nav)
