import React, {Fragment} from 'react';
import { Link, Router } from '../../routes'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, electricblue, hoverelectricblue} from '../../colors'
import Dictaphone from './Dictaphone'

const StyledList = styled.div`
  width: 80vw;
  min-width: 250px;
  max-width: 400px;
`
const StyledMenuItem = styled(MenuItem)`
  font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif !important;
  font-size: 14px !important;
`;

const SideList = () =>
  <StyledList>
    <br/><br/><br/>
    <Divider />
    <Dictaphone></Dictaphone>
  </StyledList>

export default class NavigationDrawer extends React.Component {

  render() {
    const {open, toggleDrawer} = this.props
    return (
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        anchor="right"
        >
        <div
          tabIndex={0}
          role="button"
          // onClick={toggleDrawer(false)}
          // onKeyDown={toggleDrawer(false)}
          >
            <SideList/>
          </div>
      </SwipeableDrawer>
    )
  }
}
