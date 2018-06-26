import React, {Fragment} from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {SideList} from './nav_components'
import {StyledList, StyledMenuItem} from './nav_components'

export default class NavigationDrawer extends React.Component {

  render() {
    const {open, toggleDrawer} = this.props
    return (
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          >
            <SideList/>
          </div>
      </SwipeableDrawer>
    )
  }
}
