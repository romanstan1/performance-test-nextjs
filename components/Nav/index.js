import React from 'react';
import styled from 'styled-components'
import Drawer from './Drawer'

const Header = styled.header`
  background: #fff;
  padding: 8px 8px;
  width: 100%;
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
