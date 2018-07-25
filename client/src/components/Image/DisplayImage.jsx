import React, { Component } from 'react';
import style from '../../../dist/style/styles.css';

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
    console.log('img hovered');
    e.preventDefault();
    this.setState({
      hover: true,
    });
  }

  handleLeave(e) {
    console.log('img left');
    e.preventDefault();
    this.setState({
      hover: false,
    });
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