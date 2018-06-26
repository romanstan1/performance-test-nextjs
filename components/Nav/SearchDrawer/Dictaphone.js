import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import {MicrophoneIcon, GoogleIcon} from '../nav_components'
import {StyledModalContent, ListeningButton} from '../style'

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
  }

  handleListeningInput = (interimTranscript, transcript) => {
    console.log('interim transcript::', interimTranscript)
    console.log('transcript::', transcript)
    clearTimeout(this.timer)
    let time = 5000
    if(transcript && transcript.length > 1) time = 1000

    console.log('time: ', time, this.timer)

    this.timer = setTimeout(this.handleStopListening, time)
  }

  handleStartListening = () => {
    const { resetTranscript, abortListening, stopListening, startListening } = this.props
    abortListening()
    resetTranscript()
    startListening()

    this.setState({listenedOnce: true})
    this.handleListeningInput()
  }

  handleStopListening = () => {
    clearTimeout(this.timer)
    const {stopListening, resetTranscript, abortListening, interimTranscript, makeQuery, toggleVoiceModal, transcript} = this.props

    console.log('Final Interim transcripts::', interimTranscript)
    console.log('Final transcripts::', transcript)
    console.log()

    makeQuery(transcript)
    abortListening()
    // toggleVoiceModal()


    // setTimeout(()=>{
    //   console.log('stop listening')
    //   this.props.stopListening()
    //   this.props.abortListening()
    //   this.props.resetTranscript()
    // }, 0)
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
      makeQuery
    } = this.props

    // if (!browserSupportsSpeechRecognition) return null
    // if(!listening && transcript.length > 1) {
    //   // abortListening()
    //   // setTimeout(()=>{
    //     // toggleVoiceModal()
    //   // }, 0)
    //   // setTimeout(()=>{
    //   //   // makeQuery(interimTranscript)
    //   //   abortListening()
    //   //   toggleVoiceModal()
    //   // }, 0)
    // }
    if(listening) {
      this.handleListeningInput(interimTranscript, transcript)
    }

    return (
      <StyledModalContent>
        {
          listening?
            <span>
              <h2>Listening...</h2>
              <h4></h4>
            </span> :
            this.state.listenedOnce?
              <span>
                <h2>Say Something.</h2>
                <h4>Please try again.</h4>
              </span>:
              <span>
                <h2>Say Something.</h2>
                <h4> </h4>
              </span>
        }

        <ListeningButton
          onClick={this.handleStartListening}
          className={ listening?
            interimTranscript.length > 1?
            'listening pulse': 'listening'
            :null }
            >
          <MicrophoneIcon />
        </ListeningButton>

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
