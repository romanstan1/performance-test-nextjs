import React from 'react';
import styled from 'styled-components'
import NavigationDrawer from './NavigationDrawer'
import SearchDrawer from './SearchDrawer'
import {connect} from 'react-redux'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, electricblue, hoverelectricblue} from '../../colors'
import { Link, Router } from '../../routes'

const Header = styled.header`
  background: #fff;
  width: 100%;
  font-size: 0px;
  display: grid;
  grid-template-columns: 48px 48px auto 48px 48px;
  align-items: center;
  padding: 8px;
`;

const StyledButtonBase = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background: white;
  outline: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;
  border: 0px solid white;
  &:hover {
    border: 0px solid ${lightgrey};
    background: ${lightgrey};
  }
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  padding: 0 15px;
`;

const Heading = styled.div`
  color: #414b56;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 48px;
  height: 48px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

const NotificationBubble = styled.div`
  width: 22px;
  height: 22px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 11px;
  color: white;
  right: 0px;
  font-family: sans-serif;
  top: 0px;
  border: 2px solid white;
  border-color: inherit !important;
  background: ${electricblue};
  border-radius: 50%;
  &.active {
    display: none;
  }
`;

const MenuIcon = () =>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>

const ShoppingBasket = () =>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
  </svg>

const SearchIcon = () =>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>

class Nav extends React.Component {

  state = {
    left: false,
    right: false
  };

  toggleNavDrawer = (open) => () => {
    this.setState({left: open, right: false})
  }

  toggleSearchDrawer = (open) => () => {
    this.setState({right: open, left: false})
  }

  render() {
    return (
      <Header>

        <StyledButtonBase onClick={this.toggleNavDrawer(true)}>
          <MenuIcon/>
        </StyledButtonBase>
        <span></span>

        <Link prefetch route="/">
          <Heading>The Spectacle Store</Heading>
        </Link>

        <Link prefetch route="/basket">
          <StyledButtonBase>
            <ShoppingBasket/>
            <NotificationBubble className={this.props.basket.length? '': 'active'}>
              {this.props.basket.length}
            </NotificationBubble>
          </StyledButtonBase>
        </Link>

        <StyledButtonBase onClick={this.toggleSearchDrawer(true)}>
          <SearchIcon/>
        </StyledButtonBase>

        <NavigationDrawer toggleDrawer={this.toggleNavDrawer} open={this.state.left}/>
        <SearchDrawer toggleDrawer={this.toggleSearchDrawer} open={this.state.right}/>

      </Header>
    )
  }
}

export default connect(state => ({
  basket: state.basket
}))(Nav)
