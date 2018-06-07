import React from 'react';
import Button from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import styled from 'styled-components'
// import Link from 'next/link'

import Drawer from './Drawer'

const Header = styled.div`
  background: #fff;
  padding: 8px 8px;
  button {
    span {
      color: white;
    }
  }
`;

// const MenuLink = styled(Link)`
//   width: 100%;
//   height: 100%;
//   display: block;
//   line-height: 24px;
//   outline: none;
//   padding: 0px 0px;
// `;

export default class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
    route: 'Home'
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = (e) => {
    this.setState({ anchorEl: null, route: e.target.dataset.value})
  }

  render() {
    const { anchorEl } = this.state
    return (
      <Header>
        <Drawer></Drawer>
      </Header>
    )
  }
}
