import React, { Component } from 'react';
import Display from '../components/display/Display';

export default class ColorRandomizer extends Component {
  state = {
    color: '',
    letters: ['b', 'e', 'l', 'i', 'v', 'n', 'y', 'o', 'u', 'r', 's', 'f'],
  };

  getRandColor = () => {
    const randColor = Math.floor(Math.random() * 16777215).toString(16);

    return `#${randColor}`;
  };

  handleColorChange = () =>
    setInterval(() => {
      const newColor = this.getRandColor();

      // TODO attempting to have each letter change independently
      // this.state.letters.forEach(letter => {
      //     this.setState
      // });
      this.setState({ color: newColor, meme: '' });
    }, 1000);

  componentDidMount = () => {
    this.handleColorChange();
  };

  render() {
    const { color } = this.state;

    return <Display randColor={color} />;
  }
}
