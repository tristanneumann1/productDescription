import React, { Component } from 'react';
import DisplayImage from './Image/DisplayImage.jsx';
import ProductTitle from './ProductTitle.jsx';
import Description from './Description/Description.jsx';
import ImageList from './Image/ImageList';
import axios from 'axios';


class App extends Component {
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
          rating: product.data.rating,
          pictures: product.data.pictureUrls,
          price: product.data.price,
          descriptions: product.data.descriptionTexts,
          displayedPicture: product.data.pictureUrls[0] || '',
        });
      });
  }

  handleChangeDisplay(e) {
    e.preventDefault();
    this.setState({
      displayedPicture: e.target.value,
    });
  }

  render() {
    console.log('disp pic sent', this.state.displayedPicture);
    return (
      <div class="app-container">
        <ImageList pictures={this.state.pictures} displayedPicture={this.state.displayedPicture} handleChangeDisplay={this.handleChangeDisplay}/>
        <DisplayImage displayedPicture={this.state.displayedPicture} />
        <ProductTitle productName={this.state.productName} rating={this.state.rating} />
        <Description price={this.state.price} descriptions={this.state.descriptions} />
      </div>
    );
  }
}

export default App;