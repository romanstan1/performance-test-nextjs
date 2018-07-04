import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import config from './firebase'
import firebase from 'firebase'

export const addUserGlobally = (user) => {
  return dispatch => dispatch({
    type: "ADD_USER_GLOBALLY",
    payload: user
  })
}
export const setNewBasket = (basketData) => {
  return dispatch => dispatch({
    type: "SET_NEW_BASKET",
    payload: basketData
  })
}

class MyApp extends App {

  componentDidMount() {

    const configapp = firebase.initializeApp(config);
    const auth = firebase.auth()

    const database = firebase.database().ref('users/')

    auth.signInAnonymously().catch(error => {
      console.log('error: ', error)
    })

    auth.onAuthStateChanged(user => {
      if (user) {
        this.props.reduxStore.dispatch(addUserGlobally(user.uid))
        const userDatabase = database.child(user.uid + '/basket/');
        userDatabase.on('value', snapshot => {
          const basketData = snapshot.val()
          console.log('usersBasket', basketData)
          this.props.reduxStore.dispatch(setNewBasket(basketData))
        })
      } else {
        console.log('user signed out: ', user)
      }
    })



  }

  render () {
    const {Component, pageProps, reduxStore} = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
