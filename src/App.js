import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Keyboard from './Keyboard';
import Counter from './Counter';


class App extends Component {
  state = {
    usedLetters: ['a'],
    guessWord : 'maison',
    countTry : 0
  }

  computeDisplay(phrase, usedLetters) {
    return phrase.replace(/\w/g,
      (letter) => (usedLetters.includes(letter) ? letter : '_')
    )
  }

  render() {
    return (
      <div>
        <Counter tries={this.state.countTry} />
        <div className="guess_word">
          {this.computeDisplay(this.state.guessWord, this.state.usedLetters)}
        </div>
        <Keyboard usedLetters={this.state.usedLetters} />
      </div>
    );
  }
}

export default App;
