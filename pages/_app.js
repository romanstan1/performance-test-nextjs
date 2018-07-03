import App, {Container} from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import config from './firebase'
import firebase from 'firebase'

class MyApp extends App {

  componentDidMount() {
    console.log('did mount: ')
    const configapp = firebase.initializeApp(config);
    const auth = firebase.auth()
    auth.signInAnonymously().catch(error => {
      console.log('error: ', error)
    })

    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('user signed in: ', user, user.uid)
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
