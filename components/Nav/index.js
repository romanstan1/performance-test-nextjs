import React from 'react';
import Button from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import styled from 'styled-components'
// import Link from 'next/link'

import Drawer from './Drawer'

const Header = styled.header`
  background: #fff;
  padding: 8px 8px;
  width: 100%;
  button {
    width: 48px;
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: white;
      text-align: center;
    }
  }
`;

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
