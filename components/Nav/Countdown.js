import React, {Fragment, Component} from 'react';

export default class Countdown extends Component {
  state = {count: 3}

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
    if(this.state.count === 0) this.props.fetchData()
    return null
  }
}
