import React, {Component, Fragment} from 'react'
import Dictaphone from './Dictaphone'

class ProductListing extends Component {

  state = {
    left: false,
  }

  toggleDrawer = (open) => () => {
    this.setState({right: open})
  }

  render() {
    return(
      <div>

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
              <div>
                skjsgfkjsfgh <br/>
                skjsgfkjsfgh <br/>
                skjsgfkjsfgh <br/>
                skjsgfkjsfgh <br/>
                skjsgfkjsfgh <br/>
                skjsgfkjsfgh <br/>
                skjsgfkjsfgh <br/>
                skjsgfkjsfgh <br/>
                skjsgfkjsfgh <br/>
                skjsgfkjsfgh <br/>
              </div>
            </div>
        </SwipeableDrawer>
      </div>
    )
  }
}
