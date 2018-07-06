import React, {Fragment, Component} from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import {SideList} from './nav_components'
export default class SortByDrawer extends Component {

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
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          >
            <div>
              Sort By Drawer <br/><br/><br/>
              Stuff <br/>
              Stuff <br/>
              Stuff <br/>
              Stuff <br/>
              Stuff <br/>
              Stuff <br/>
              Stuff <br/>
            </div>
          </div>
      </SwipeableDrawer>
    )
  }
}
