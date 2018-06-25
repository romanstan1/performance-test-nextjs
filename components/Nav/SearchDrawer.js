import React, {Fragment, Component} from 'react';
import { Link, Router } from '../../routes'
import Drawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, electricblue, hoverelectricblue} from '../../colors'
import Modal from '@material-ui/core/Modal';
import Dictaphone from './Dictaphone'
import {connect} from 'react-redux'
import {fetchSearchItems} from './searchApi'
import Spinner from './Spinner'
import Delete from '../Buttons/Delete'
import Carousel from '../../components/Carousel'
import LazyLoad from 'react-lazyload'

const StyledList = styled.div`
  width: 100vw;
  min-width: 250px;
  max-width: 510px;
  padding-bottom: 100px;
`
const SwipeableDrawer = styled(Drawer)`
  display: block;
   > div:last-of-type  {
     background: white !important;
   }
`
const StyledMenuItem = styled(MenuItem)`
  font-family: "Helvetica Neue", "Calibri Light", Roboto, sans-serif !important;
  font-size: 14px !important;
`;

const Microphone = () =>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"/>
  </svg>

const BackwardsArrow = () =>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
  </svg>

const StyledHeader = styled.div`
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
  font-size: 19px;
  position: relative;
  border: 0px solid white;
  &:hover {
    border: 0px solid ${lightgrey};
    background: ${lightgrey};
  }
`;


const StyledShowingResultsBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  margin: 15px;
  border-radius: 30px;
  background: ${mediumgrey};
  color: white;
  line-height: 35px;
  min-height: 49px;
  position: relative;
  p {
    text-align: left;
    width: 85%;
    font-weight: 400;
    font-size: 15px;
    span {
      font-weight: 600;
    }
  }

  div.close {
    position: absolute;
    right: 10px;
    width: 30px;
    height: 30px;
    background: red;
  }
`

const Results = ({items, route, toggleDrawer}) =>
  <StyledList>
    {
      items.map((item, i) =>
        <span key={item.id}>
          <Carousel key={item.id} id={item.id} images={item.urls} brand={item.brand} price={item.price} route={route}/>
        </span>
      )
    }
  </StyledList>


const Header = ({toggleDrawer, toggleVoiceModal, searchQuery,handleInput }) =>
  <StyledHeader>
    <ButtonBase
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <BackwardsArrow/>
    </ButtonBase>
    <input autoFocus placeholder="Search" type="text" value={searchQuery} onChange={handleInput}/>
    <ButtonBase onClick={() => toggleVoiceModal()}>
      <Microphone/>
    </ButtonBase>
  </StyledHeader>

const ShowingResultsBar = ({handleClearSearch, query, resultsLength}) =>
  <StyledShowingResultsBar>
    {resultsLength > 0?
      <p>Showing {resultsLength} results for <span>"{query}"</span></p>:
      <p>No results for <span>"{query}"</span> </p>
    }
    <span onClick={handleClearSearch}>
      <Delete />
    </span>
  </StyledShowingResultsBar>

const clearSearch = () => dispatch => {
  return dispatch({
    type: 'CLEAR_SEARCH_RESULTS'
  })
}

class SearchDrawer extends Component {

  state = {
    voiceModalOpen: false,
    searchQuery: '',
    searching: false
  }

  handleMakeQuery = (query) => {
    fetchSearchItems(query, this.props.dispatch)
  }
  componentWillReceiveProps() {
    if(this.state.searchQuery !== '') this.setState({searchQuery:'', searching: false})
  }
  toggleVoiceModal = () => {
    this.setState({voiceModalOpen: !this.state.voiceModalOpen})
  }

  handleInput = (e) => {
    this.setState({searchQuery: e.target.value, searching: true})
    clearTimeout(this.timer);
    this.timer = setTimeout(fetchSearchItems, 1500, e.target.value, this.props.dispatch)
  }

  handleClearSearch = () => {
    this.props.dispatch(clearSearch())
  }

  render() {
    const {open, toggleDrawer, search} = this.props
    const {searching, searchQuery, voiceModalOpen} = this.state
    return (
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        anchor="right"
        >
          <Header
            handleInput={this.handleInput}
            searchQuery={searchQuery}
            toggleDrawer={toggleDrawer}
            toggleVoiceModal={this.toggleVoiceModal}
          />
          {
            !searching && search.query.length > 0?
            <ShowingResultsBar
              handleClearSearch={this.handleClearSearch}
              resultsLength={search.results.length}
              query={search.query}/> : null
          }
          {searching? <Spinner/> :
            <Results
              toggleDrawer={toggleDrawer}
              items={search.results}
              route={search.route} />}

          <Modal
            open={voiceModalOpen}
            onClose={this.toggleVoiceModal}
            >
            <span>
              <Dictaphone
                makeQuery={this.handleMakeQuery}
                toggleVoiceModal={this.toggleVoiceModal}
              />
            </span>
          </Modal>

      </SwipeableDrawer>
    )
  }
}

export default connect(state => ({
  search: state.search
}))(SearchDrawer)
