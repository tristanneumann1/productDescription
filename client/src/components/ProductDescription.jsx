import React, { Component } from 'react';
import DisplayImage from './Image/DisplayImage.jsx';
import ProductTitle from './ProductTitle.jsx';
import Description from './Description/Description.jsx';
import ImageList from './Image/ImageList';
import axios from 'axios';
import style from '../style/styles.css';

class ProductDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedPicture: ''
    };
    axios.get('/api/product')
      .then((product)=> {
        console.log('product got: ', product);
        // this.props.product = product.data;
        this.setState({
          productName: product.data.product_name,
          questions: product.data.questions,
          ratings: product.data.ratings,
          pictures: product.data.pictureUrls,
          price: product.data.price,
          descriptions: product.data.descriptionTexts,
          displayedPicture: product.data.pictureUrls[0] || '',
          hoveredPicture: '',
        });
      });
    this.handleChangeDisplay = this.handleChangeDisplay.bind(this);
    this.handleZoom = this.handleZoom.bind(this);
  }

  handleChangeDisplay(picture) {
    this.setState({
      displayedPicture: picture,
    });
  }

  handleZoom(picture) {
    this.setState({
      hoveredPicture: picture,
    });
  }

  render() {
    // console.log('disp pic sent', this.state.displayedPicture);
    return (
      <div className={style.appContainer}>
        <ImageList
          pictures={this.state.pictures}
          displayedPicture={this.state.displayedPicture}
          handleChangeDisplay={this.handleChangeDisplay}
        />
        <DisplayImage displayedPicture={this.state.displayedPicture} handleZoom={this.handleZoom}/>
        <ProductTitle
          productName={this.state.productName}
          questions={this.state.questions}
          ratings={this.state.ratings}
        />
        <Description price={this.state.price} descriptions={this.state.descriptions} hoveredPicture={this.state.hoveredPicture} />
      </div>
    );
  }
}

export default ProductDescription;