import React from 'react';
import './App.css';
import quotes from './QuotesDatabase';
import QuoteAndAuthor from './QuoteAndAuthor';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
    };
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote,
      author: generateRandomQuote.author
    });
    this.shuffleQuotes(quotes)
  }

  randomQuote() {
    const randomNum = Math.floor(Math.random() * quotes.length);
    return quotes[randomNum];
  }

  shuffleQuotes(array) {
    return array.sort(() => Math.random() - 0.5)
  }


  randomColor() {
    const color = `rgb(
      ${ Math.floor(Math.random() * 155)},
      ${ Math.floor(Math.random() * 155)},
      ${ Math.floor(Math.random() * 155)})`;
    return color;
  }

  render() {
    return (
      <div>
        <QuoteAndAuthor displayColor={this.randomColor} handleClick={this.handleClick} {...this.state} />
      </div>
    );
  }
}

export default App;
