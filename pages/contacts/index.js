import React, {Component, Fragment} from 'react'
import CTAButton from '../../components/CTAButton';
import Nav from '../../components/Nav';
import {connect} from 'react-redux'
import {HeroBlock} from '../../components/HeroBlock';
import {StyledContacts} from './style';
import Scanner from './Scanner/Scanner'
import {toggleScanning} from './actions'

class Contacts extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('nextProps:', nextProps)
  }
  handleScan = () => {
    this.props.dispatch(toggleScanning())
  }
  render() {
    return (
      <Fragment>
        {
          this.props.scanning ?
          <Scanner/> :
          <StyledContacts>
            <Nav/>
            <HeroBlock>
              {/* <h2>Contact Lenses</h2> */}
              <h2>Find Your Product</h2>
              <CTAButton onClick={this.handleScan}>
                Scan Barcode
              </CTAButton>
            </HeroBlock>
          </StyledContacts>
        }
      </Fragment>
    )
  }
}
export default connect(state => (
  {scanning: state.scanning, contactLense: state.contactLense}
))(Contacts)
