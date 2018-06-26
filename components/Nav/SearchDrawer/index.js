import React, {Fragment, Component} from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Modal from '@material-ui/core/Modal';
import Dictaphone from './Dictaphone'
import {connect} from 'react-redux'
import {fetchSearchItems} from './search_api'
import Delete from '../../Buttons/Delete'
import Carousel from '../../../components/Carousel'
// import LazyLoad from 'react-lazyload'
import {MicrophoneIcon, BackwardsArrowIcon, Spinner} from '../nav_components'
import {StyledButtonBase} from '../style'
import {StyledSearchHeader, StyledSearchResults, StyledShowingResultsBar} from './search_style'

const Results = ({items, route, toggleDrawer}) =>
  <StyledSearchResults>
    {
      items.map((item, i) =>
        <span key={item.id}>
          <Carousel key={item.id} id={item.id} images={item.urls} brand={item.brand} price={item.price} route={route}/>
        </span>
      )
    }
  </StyledSearchResults>


const Header = ({toggleDrawer, toggleVoiceModal, searchQuery, handleInput }) =>
  <StyledSearchHeader>
    <StyledButtonBase
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}>
      <BackwardsArrowIcon/>
    </StyledButtonBase>
    <input autoFocus placeholder="Search" type="text" value={searchQuery} onChange={handleInput}/>
    <StyledButtonBase onClick={() => toggleVoiceModal()}>
      <MicrophoneIcon/>
    </StyledButtonBase>
  </StyledSearchHeader>

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
    console.log("query: ", query)
    fetchSearchItems(query, this.props.dispatch)
  }
  componentWillReceiveProps() {
    if(this.state.searchQuery !== '') this.setState({searchQuery:'', searching: false})
  }
  toggleVoiceModal = (value) => {
    setTimeout(() => {
      this.setState({voiceModalOpen: !this.state.voiceModalOpen})
    }, 0)
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
        {
          searching?
          <Spinner active={!!searchQuery.length}/>
          :
          <Results
            toggleDrawer={toggleDrawer}
            items={search.results}
            route={search.route}
          />
        }
        <Modal
          open={voiceModalOpen}
          onClose={this.toggleVoiceModal}
          >
          <span>
            <Dictaphone
              open={open}
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
