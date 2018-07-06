import React, {Fragment, Component} from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {DrawerContentStyle, Header} from './style'
import Delete from '../../components/Buttons/Delete'
import {StyledButtonBase} from '../../components/Buttons/ButtonBase'


const SortByContent = () => <div> SortByContent</div>
const FiltersContent = () => <div> FiltersContent</div>

export default class Drawer extends Component {
  render() {
    const {open, whichDrawer, toggleDrawer} = this.props
    return (
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false, null)}
        onOpen={toggleDrawer(true, 'sortBy')}
        anchor="right"
        >
        <DrawerContentStyle>
          <Header>
            <span/>
            {whichDrawer}
            <StyledButtonBase
              onClick={toggleDrawer(false, null)}
              onKeyDown={toggleDrawer(false, null)}>
              <Delete/>
            </StyledButtonBase>
          </Header>

          { whichDrawer === 'filters'? <FiltersContent/> : null }
          { whichDrawer === 'sortBy'? <SortByContent/> : null }

        </DrawerContentStyle>
      </SwipeableDrawer>
    )
  }
}





//
//
//
// export const withGists = (PassedComponent) =>
// class WithGists extends Component {
//   state = {
//     gists: []
//   }
//   render() {
//     return (
//       <div style={{background:'red', fontSize: '20px'}}>
//         Hoc content {this.props.someProps}
//         <PassedComponent/>
//       </div>
//     )
//   }
// }
//
// export default (WrappedComponent) =>
//   class Drawer extends Component {
//   render() {
//     const {open, toggleDrawer} = this.props
//     return (
//       <SwipeableDrawer
//         open={open}
//         onClose={toggleDrawer(false)}
//         onOpen={toggleDrawer(true)}
//         anchor="right"
//         >
//         <DrawerContentStyle>
//           <Header>
//             <span/>
//             Filters
//             <StyledButtonBase
//               onClick={toggleDrawer(false)}
//               onKeyDown={toggleDrawer(false)}>
//               <Delete/>
//             </StyledButtonBase>
//           </Header>
//
//           <WrappedComponent/>
//
//         </DrawerContentStyle>
//       </SwipeableDrawer>
//     )
//   }
// }
