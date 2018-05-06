import React, { Component } from 'react';
import './App.css';
import Keyboard from './Keyboard';
import Counter from './Counter';

const DEFAULT_STATE = {usedLetters: [], guessWord : '', countTry : 0 }
// const words = ['ab'];
const words = ['maison', 'table', 'ordinateur'];
class App extends Component {
  state = { ...DEFAULT_STATE }

  constructor(props) {
    super(props)
    this.addLetterUsed = this.addLetterUsed.bind(this)
  }

  computeDisplay(phrase, usedLetters) {
    return phrase.replace(/\w/g,
      (letter) => (usedLetters.includes(letter) ? letter : '_')
    )
  }

  //Fonction qui sera appelé après le constructeur mais est idéal pour récuperer des informations exterieurs
  componentWillMount() {
    this.getRandomWord();
  }
  getRandomWord() {
    this.setState({ guessWord: words[Math.floor(Math.random()*words.length)] });
  }

  reset() {
    this.setState(DEFAULT_STATE);
  }

  addLetterUsed(letter) {
    this.setState({usedLetters: [...this.state.usedLetters, letter] })
    if(!this.state.guessWord.includes(letter)) this.incrementCountTry();
  }

  incrementCountTry() {
    const next = this.state.countTry+1;
    this.setState({countTry: next})
    if(next === 5) this.reset();
  }

  restartGame() {
    this.reset()
    this.getRandomWord()
  }

  render() {
    const hashWord = this.computeDisplay(this.state.guessWord, this.state.usedLetters);
    
    return (
        hashWord !== this.state.guessWord ?
        <div>
          <Counter tries={this.state.countTry} />
          <div className="guess_word">
            {this.computeDisplay(this.state.guessWord, this.state.usedLetters)}
          </div>
          <Keyboard usedLetters={this.state.usedLetters} onClick={this.addLetterUsed}/>
        </div>
        :
        <button onClick={() => this.restartGame()}>Nouvelle partie</button>

    );
  }
}

export default App;
