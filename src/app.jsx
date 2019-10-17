import React, { Component } from 'react';
import { render } from 'react-dom';
import Board from './Board.jsx';

class App extends Component {

  render() {
    return (
      <div>
          <Board />
      </div>
    )
  }
}

render(<App />, document.getElementById('content'));
