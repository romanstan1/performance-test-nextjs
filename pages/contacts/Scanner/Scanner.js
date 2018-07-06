import React, { Component } from 'react';
import Quagga from 'quagga';
import {toggleScanning, detectedBarcode} from '../actions'
import {connect} from 'react-redux'
import {CameraWrapper} from './style'

class Scanner extends Component {

  state = {
    count:0
  }

  componentDidMount() {
    var decoder = 'code_128_reader'

    Quagga.init({
        inputStream: {
          type : "LiveStream",
          constraints: {
            width: window.innerHeight - 110,
            height: window.innerWidth - 10,
            facingMode: "environment" // or user
          }
        },
        locator: {
            patchSize: "medium",
            halfSample: true
        },
        numOfWorkers: 4,
        decoder: {
          readers : [ decoder ]
        },
        locate: true
    }, function(err) {
        if (err) {
            return console.log(err);
        }
        Quagga.start();
    });
    Quagga.onDetected(this.onDetected);
  }

  componentWillUnmount() {
    Quagga.offDetected(this.onDetected);
  }

  cancelCamera = () => {
    Quagga.stop()
    Quagga.offDetected(this.onDetected);
    this.props.dispatch(toggleScanning())
  }

  fakeDetect = () => {
    this.props.dispatch(detectedBarcode('112933002780160460'))
    this.cancelCamera()
  }

  onDetected = (result) => {
    const {dispatch} = this.props
    const {count} = this.state
    console.log("detected!! :: ", result.codeResult.code, typeof result.codeResult.code)

    if(count < 3) this.setState({count: count + 1})
    else if(count === 3) {
      this.setState({count: 0})
      dispatch(detectedBarcode(result.codeResult.code))
      this.cancelCamera()
    }
  }

  render() {
    return (
      <CameraWrapper>
        <div id="interactive" className="viewport"></div>
        <div onClick={this.cancelCamera} className='cancel-button'>Cancel</div>
        <div onClick={this.fakeDetect} className='cancel-button reroute'>ReRoute</div>
      </CameraWrapper>
    )
  }
}

export default connect(state => ({
  // scanning: state.scanning,
  // productResult: state.data.productResult,
  // prescriptionResult: state.prescriptionResult,
}))(Scanner)
