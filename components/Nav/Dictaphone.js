import React, { PropTypes, Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import styled from 'styled-components'
import {lightgrey, mediumgrey, darkgrey, backgroundgrey, electricblue, hoverelectricblue} from '../../colors'

const ButtonBase = styled.div`
  float: right;
  width: 68px;
  height: 68px;
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
  -webkit-box-shadow: 6px 11px 39px -2px rgba(138,138,138,0.5);
  -moz-box-shadow: 6px 11px 39px -2px rgba(138,138,138,0.5);
  box-shadow: 6px 11px 39px -2px rgba(138,138,138,0.5);
  &.listening {
    background: ${electricblue};
    -webkit-box-shadow: 6px 11px 39px -2px rgba(138,138,138,0);
    -moz-box-shadow: 6px 11px 39px -2px rgba(138,138,138,0);
    box-shadow: 6px 11px 39px -2px rgba(138,138,138,0);
    &.pulse {
      animation: pulse 1s forwards;
    }
    svg {
      fill: white;
    }
  }
  @keyframes pulse {
    0% {
      -moz-box-shadow: 0 0 0 1px rgba(14, 88, 206, 0.1);
      box-shadow: 0 0 0 1px rgba(14, 88, 206, 0.1);
    }
    50% {
        -moz-box-shadow: 0 0 0 14px rgba(14, 88, 206, 0.3);
        box-shadow: 0 0 0 14px rgba(14, 88, 206, 0.3);
    }
    100% {
        -moz-box-shadow: 0 0 0 2px rgba(14, 88, 206, 0.1);
        box-shadow: 0 0 0 2px rgba(14, 88, 206, 0.1);
    }
  }
`;

const Modal = styled.div`
  background: ${backgroundgrey};
  width: 90%;
  height: 300px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2 {
    color: ${darkgrey};
    text-align: center;
    font-weight: 400;
    display: block;
  }
  h4 {
    padding-top: 5px;
    color: ${mediumgrey};
    text-align: center;
    font-weight: 400;
    line-height: 25px;
    display: block;
    height: 25px;
  }
  svg {
    fill: grey;
    fill: ${lightgrey};
  }
`
const Microphone = () =>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"/>
  </svg>

const Google = () =>
  <svg width="74" height="24" viewBox="0 0 74 24" strokeWidth="0">
    <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z"/>
    <path d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z"/>
    <path d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54.01 2.03-1.36 3.5-3.1 3.5z"/>
    <path d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z"/>
    <path d="M58 .24h2.51v17.57H58z"/>
    <path d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z"/>
  </svg>


class Countdown extends Component {
  state = {count: 7}

  timer = () => {
    this.setState({ count: this.state.count - 1})
    if(this.state.count < 1) clearInterval(this.intervalId)
  }

  componentDidMount() {
    this.intervalId = setInterval(this.timer, 800);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps', this.props.interimTranscript)
    if(this.props.interimTranscript.length > 2) this.setState({ count: 3})
  }

  render() {
    console.log('count: ', this.state.count)
    if(this.state.count === 0) this.props.handleStopListening()
    return null
  }
}


class Dictaphone extends Component {

  state = {
    listenedOnce: false
  }

  componentDidMount() {
    console.log('startListening')
    this.setState({ listenedOnce: false})
    setTimeout(()=>{
      this.handleStartListening()
    }, 200)
  }
  componentWillUnmount() {
    const { resetTranscript, abortListening, stopListening } = this.props
    console.log('componentWillUnmount')
    stopListening()
    abortListening()
    resetTranscript()
  }

  handleStartListening = () => {
    this.props.startListening()
    this.setState({listenedOnce: true})
  }

  handleStopListening = () => {
    console.log('stopListening fired!')
    this.props.stopListening()
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

    if (!browserSupportsSpeechRecognition) return null
    if(!listening && transcript.length > 1) {
      makeQuery(transcript)
      toggleVoiceModal()
    }


    return (
      <Modal>
        {
          listening?
            <span>
              <h2>Listening ...</h2>
              <h4>  </h4>
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

        <ButtonBase
          onClick={this.handleStartListening}
          className={ listening?
            interimTranscript.length > 1?
            'listening pulse': 'listening'
            :null }
            >
          <Microphone />
        </ButtonBase>

        {
          listening?
          <Countdown
            start={listening}
            handleStopListening={this.handleStopListening}
            handleStartListening={this.handleStartListening}
            interimTranscript={interimTranscript}
           />
           :null
        }
        <Google/>
      </Modal>
    )
  }
}

const options = {
  autoStart: false
}

export default SpeechRecognition(options)(Dictaphone)
