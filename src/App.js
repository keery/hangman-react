import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Keyboard from './Keyboard';


class App extends Component {
  state = {
    usedLetters: ['b'],
    guessWord : 'maison'
  }

  computeDisplay(phrase, usedLetters) {
    return phrase.replace(/\w/g,
      (letter) => (usedLetters.has(letter) ? letter : '_')
    )
  }

  render() {
    return (
      <Keyboard usedLetters={this.state.usedLetters} />
    );
  }
}

export default App;
