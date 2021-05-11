import React, { Component } from 'react';
import Display from '../components/display/Display';

export default class ColorRandomizer extends Component {
  state = {
    color: '',
    meme: '',
  };

  getRandColor = () => {
    const randColor = Math.floor(Math.random() * 16777215).toString(16);

    return `#${randColor}`;
  };

  handleColorChange = () =>
    setInterval(() => {
      const newColor = this.getRandColor();

      if (newColor !== this.state.color)
        this.setState({ color: newColor, meme: '' });
      else
        this.setState({
          color: '#FFFFFF',
          meme: 'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg',
        });
    }, 1000);

  componentDidMount = () => {
    this.handleColorChange();
  };

  render() {
    const { color, meme } = this.state;

    return <Display randColor={color} meme={meme} />;
  }
}
