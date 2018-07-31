import React, { Component } from 'react';
import style from '../../style/styles.css';

class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleEnter(e) {
    e.preventDefault();
    this.setState({
      hover: true,
    });
    this.props.handleZoom(this.props.displayedPicture);
  }

  handleLeave(e) {
    e.preventDefault();
    this.setState({
      hover: false,
    });
    this.props.handleZoom('');
  }

  render() {
    return (
      <div className={style.displayImage}>
        <img
          src={`https://fakeimg.pl/640x480/?text=${this.props.displayedPicture}`}
          className={style.displayedPic}
          onMouseEnter={this.handleEnter}
          onMouseLeave={this.handleLeave}
        />
        <div className={style.displayImageText}>
          {this.state.hover ? 'Click image to open expanded view' : 'Roll over image to zoom in'}
        </div>
      </div>
    );
  }
}

export default DisplayImage;