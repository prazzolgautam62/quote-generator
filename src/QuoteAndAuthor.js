import React from 'react';

class QuoteAndAuthor extends React.Component {

    render() {
        const randomColor = this.props.displayColor();
        const html = document.documentElement;
        html.style.backgroundColor = "#6dfc00";
        return (
            <div style={{ backgroundColor: "white" }} className="quotebox">
                <div className="fadeIn" key={Math.random()} style={{ color: randomColor }}>
                    <h1 id="quote">"{this.props.quote}"</h1>
                    <h4 id="author">-{this.props.author}</h4>
                </div>
                <div className="butun">
                    <button style={{ backgroundColor: randomColor }} id="newquote" onClick={this.props.handleClick}>New Quote</button>
                </div>
            </div>

        );
    }
}

export default QuoteAndAuthor;