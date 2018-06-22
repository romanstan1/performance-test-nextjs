import React, {Fragment, Component} from 'react';
import { Link, Router } from '../../routes'
import Drawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, electricblue, hoverelectricblue} from '../../colors'
// import Dictaphone from './Dictaphone'

const StyledList = styled.div`
  width: 100vw;
  min-width: 250px;
`
const SwipeableDrawer = styled(Drawer)`
   > div:last-of-type  {
     background: ${backgroundgrey} !important;
   }
`
const StyledMenuItem = styled(MenuItem)`
  font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif !important;
  font-size: 14px !important;
`;

const Microphone = () =>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>

const BackwardsArrow = () =>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
  </svg>

const SearchBox = styled.div`
  width: 100%;
  font-size: 0px;
  padding: 5px 15px;
  position: relative;
  display: grid;
  grid-template-columns: 48px auto 48px ;
  background: white;
  box-shadow: 0 4px 15px -4px ${mediumgrey};

  input {
    display: inline-block;
    line-height: 48px;
    height: 48px;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    text-indent: 10px;
    font-size: 16px;
    border-width: 0px;
    padding: 5px 0;
  }
`
const ButtonBase = styled.div`
  float: right;
  width: 48px;
  height: 48px;
  cursor: pointer;
  background: white;
  outline: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-style: 0px;
  position: relative;
  border: 0px solid white;
  &:hover {
    border: 0px solid ${lightgrey};
    background: ${lightgrey};
  }
`;

const Results = ({items, toggleDrawer}) =>
  <StyledList>
    <SearchBox>
      <ButtonBase
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}>
        <BackwardsArrow/>
      </ButtonBase>

      <input autoFocus placeholder="Search" type="text"/>

      <ButtonBase>
        <Microphone/>
      </ButtonBase>

    </SearchBox>

  </StyledList>

export default class SearchDrawer extends Component {

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
            <Results toggleDrawer={toggleDrawer} items={null}/>
          </div>
      </SwipeableDrawer>
    )
  }
}
