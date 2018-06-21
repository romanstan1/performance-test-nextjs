import React, {Fragment} from 'react';
import { Link, Router } from '../../routes'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, electricblue, hoverelectricblue} from '../../colors'

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

const StyledList = styled.div`
  width: 250px;
`
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
`
const StyledMenuItem = styled(MenuItem)`
  font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif !important;
  font-size: 14px !important;
`;

const Heading = styled.h2`
  color: #414b56;
  display: inline-block;
  font-size: 18px;
  font-weight: 400;
  line-height: 48px;
  cursor: pointer;
`;

const Drawer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
  padding: 0 15px;
`;

const StyledButtonBase = styled.div`
  width: 48px;
  height: 48px;
  cursor: pointer;
  background: white;
  outline: none;
  display: flex;
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

const SideList = () =>
  <StyledList>
    <br/><br/><br/>
    <Divider />
    <Link prefetch route="/">
      <StyledMenuItem>Home</StyledMenuItem>
    </Link>
    <Divider />
    <Link prefetch route="/glasses">
      <StyledMenuItem>Glasses</StyledMenuItem>
    </Link>
    <Divider />
    <Link prefetch route="/sunglasses">
      <StyledMenuItem>Sunglasses</StyledMenuItem>
    </Link>
    <Divider />
    <StyledMenuItem>Contact lenses</StyledMenuItem>
    <Divider />
    <StyledMenuItem>Accessories</StyledMenuItem>
    <Divider />
  </StyledList>

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({left: open})
  }

  render() {
    return (
      <Fragment>
        <Drawer>
          <StyledButtonBase onClick={this.toggleDrawer(true)}>
            <MenuIcon/>
          </StyledButtonBase>

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

        </Drawer>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer(false)}
          onOpen={this.toggleDrawer(true)}
          >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
            >
              <SideList/>
            </div>
        </SwipeableDrawer>
      </Fragment>
    )
  }
}


export default connect(state => ({
  basket: state.basket
}))(SwipeableTemporaryDrawer)
