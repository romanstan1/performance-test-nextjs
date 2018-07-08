import React, {Component, Fragment} from 'react'
import CTAButton from '../../components/CTAButton';
import Nav from '../../components/Nav';
import {connect} from 'react-redux'
import {HeroBlock} from '../../components/HeroBlock';
import {StyledContacts} from './style';
import Scanner from './Scanner'
import ContactPDP from './ContactPDP'
import {toggleScanning, addToBasket, clearContactLense} from './actions'
import { Link, Router } from '../../routes'
import * as firebase from 'firebase'

class Contacts extends Component {
  handleScan = () => {
    this.props.dispatch(toggleScanning(true))
  }
  componentWillUnmount() {
    this.props.dispatch(clearContactLense())
  }

  handleAddToBasket = () => {
    const {contactLense, dispatch, user} = this.props
    Router.pushRoute('/basket')
    dispatch(addToBasket({...contactLense, productCategory: 'contacts'}))

    const database = firebase.database();
    if (user) database.ref('users/' + user + "/basket").push().set({...contactLense,  productCategory: 'contacts'})
  }

  render() {
    const {contactLense, scanning} = this.props
    return (
      <Fragment>
        {
          contactLense?
          <ContactPDP content={contactLense} handleAddToBasket={this.handleAddToBasket}/>:
          scanning ?
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
  {
    scanning: state.scanning,
    contactLense: state.contactLense,
    user: state.user
  }
))(Contacts)
