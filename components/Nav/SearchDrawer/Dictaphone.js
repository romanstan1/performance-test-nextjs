import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import {MicrophoneIcon, GoogleIcon} from '../nav_components'
import {StyledModalContent, ListeningButton} from '../style'
// import 'volume-main.js'
// import {beginVolumeAnimation, stopVolumeAnimation} from './volume-main.js'

class Dictaphone extends Component {

  state = {
    listenedOnce: false
  }
  componentDidMount() {
    console.log('Dictaphone mounted here')
    this.handleStartListening()
  }
  componentWillUnmount() {
    const { resetTranscript, abortListening, stopListening } = this.props
    // resetTranscript()
    clearTimeout(this.timer)
    abortListening()
    // stopVolumeAnimation()
  }

  handleListeningInput = (interimTranscript, transcript) => {
    clearTimeout(this.timer)
    let time = 5000
    if(transcript && transcript.length > 1) time = 1000
    this.timer = setTimeout(this.handleStopListening, time)
  }

  handleStartListening = () => {
    const { resetTranscript, abortListening, stopListening, startListening } = this.props
    abortListening()
    resetTranscript()
    startListening()

    this.setState({listenedOnce: true})

    // beginVolumeAnimation()
    this.handleListeningInput()
  }

  handleStopListening = () => {
    clearTimeout(this.timer)
    const {stopListening, resetTranscript, abortListening, interimTranscript, makeQuery, toggleVoiceModal, transcript} = this.props

    console.log('Final transcripts::', transcript)
    console.log()

    const cleanTranscript = transcript.split(' ')
      .filter((item, pos, self) => self.indexOf(item) === pos)
      .join(' ')

    console.log('cleanTranscript:', cleanTranscript)

    // stopVolumeAnimation()
    makeQuery(cleanTranscript)
    abortListening()
    if(cleanTranscript.length > 1) toggleVoiceModal()
  }

  render() {
    const {
      transcript,
      resetTranscript,
      browserSupportsSpeechRecognition,
      startListening,
      abortListening,
      listening,
      interimTranscript,
      recognition,
      toggleVoiceModal,
      makeQuery,
      open
    } = this.props

    if(!browserSupportsSpeechRecognition) return null
    if(!open) return null
    if(listening) this.handleListeningInput(interimTranscript, transcript)

    return (
      <StyledModalContent>
        {
          listening?
          <span>
            <h2>Listening...</h2>
            <h4></h4>
          </span>:
            this.state.listenedOnce?
            <span>
              <h2>Say Something.</h2>
              <h4>Please try again.</h4>
            </span>:
              <span>
                <h2>Say Something.</h2>
                <h4></h4>
              </span>
        }

        <ListeningButton
          onClick={this.handleStartListening}
          className={ listening?
            interimTranscript.length > 1 || transcript.length ?
            'listening pulse': 'listening'
            :null }
            >
          <MicrophoneIcon />
        </ListeningButton>

        {/* <canvas id="meter" width="500" height="50"></canvas> */}

        <GoogleIcon/>
      </StyledModalContent>
    )
  }
}
// {/* {
//   listening?
//   <Countdown
//   start={listening}
//   handleStopListening={this.handleStopListening}
//   // handleStartListening={this.handleStartListening}
//   interimTranscript={interimTranscript}
// />
// :null
// } */}

const options = {
  autoStart: false
}

export default SpeechRecognition(options)(Dictaphone)
