import React, {Component, Fragment} from 'react'
import CTAButton from '../../components/CTAButton';
import Nav from '../../components/Nav';
import {connect} from 'react-redux'
import {HeroBlock} from '../../components/HeroBlock';
import {StyledContacts} from './style';
import Scanner from './Scanner'
import ContactPDP from './ContactPDP'
import {toggleScanning, addContactToBasket} from './actions'

class Contacts extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('nextProps:', nextProps)
  }
  handleScan = () => {
    this.props.dispatch(toggleScanning())
  }

  handleAddToBasket = () => {
    // console.log('handleAddToBasket!: ', this.props.contactLense)

    const {contactLense, dispatch} = this.props
    dispatch(addContactToBasket(contactLense))


    // dispatch(addToBasket({...product, route}))
    // const database = firebase.database();
    // // if (user) database.ref('users/' + user + "/basket").push().set({...product, route})
    // Router.pushRoute('/basket')
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
  {scanning: state.scanning, contactLense: state.contactLense}
))(Contacts)
