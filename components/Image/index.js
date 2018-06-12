import React from 'react';
import styled from 'styled-components'
import ReactDOM from 'react-dom'

export default class Image extends React.Component {
  state = {
    loaded: false
  }

  onImageLoad = () => {
    this.setState({ loaded: true });
  }

  componentDidMount() {
    var imgTag = ReactDOM.findDOMNode(this.refs.img);
    var imgSrc = imgTag.getAttribute('src');
    var img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = imgSrc;
  }

  render() {
    var { className, ...props } = this.props
    return (
      <img ref="img" {...props} className={this.state.loaded ? className : ''} />
    )
  }
}
