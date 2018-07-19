import React, {Fragment, Component} from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Modal from '@material-ui/core/Modal';
import Dictaphone from './Dictaphone'
import {connect} from 'react-redux'
import {fetchSearchItems} from './search_api'
import {ShowMore} from '../../Buttons/ShowMore'
import Delete from '../../Buttons/Delete'
import Carousel from '../../../components/Carousel'
import {MicrophoneIcon, BackwardsArrowIcon, Spinner} from '../nav_components'
import {StyledButtonBase} from '../style'
import {showMoreSearchItems} from './actions'
import {StyledSearchHeader, StyledSearchResults, StyledShowingResultsBar, StyledHintText} from './search_style'

const Results = ({items, route, toggleDrawer, resultsShown, showMoreItems}) => {
  return <StyledSearchResults>
    {
      items.slice(0, resultsShown).map((item, i) =>
      <span key={item.id}>
        <Carousel key={item.id} id={item.id} images={item.urls} brand={item.brand} price={item.price} route={route}/>
      </span>
    )
  }
  {
    items.length === 0?
    <StyledHintText>
      <span className='title'> Try </span> <br/>
      <span>Colour: </span><p> "red sunglasses"</p> <br/>
      <span>Brand: </span><p> "Converse sunglasses" </p> <br/>
      <span>Price: </span><p> "over/under £80 sunglasses" </p> <br/>
    </StyledHintText> : null
  }
  {
    resultsShown === items.length || items.length === 0? null
    :
    <Fragment>
      <br/><br/><br/>
      <ShowMore onClick={showMoreItems}>
        Show More
      </ShowMore>
    </Fragment>
  }
</StyledSearchResults>
}



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

const ShowingResultsBar = ({handleClearSearch, query, resultsLength, resultsShown}) =>
  <StyledShowingResultsBar>
    {resultsLength > 0?
      <p>Showing {resultsShown} results of {resultsLength} for <span>"{query}"</span></p>:
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
  showMoreItems = () => {
    this.props.dispatch(showMoreSearchItems())
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
            resultsShown={search.resultsShown}
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
            resultsShown={search.resultsShown}
            showMoreItems={this.showMoreItems}
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
