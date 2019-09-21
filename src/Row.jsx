import React, { Component } from 'react';
import Box from './Box.jsx';
import { stat } from 'fs';

class Row extends Component {

  render() {
    return (
      <div>
        <Box
          key="box1"
          id="0"
          rowID={this.props.rowID}
          state={this.props.state[0]}
          stateChanger={this.props.stateChanger} />
        <Box
          key="box2"
          id="1"
          rowID={this.props.rowID}
          state={this.props.state[1]}
          stateChanger={this.props.stateChanger} />
        <Box
          key="box3"
          id="2"
          rowID={this.props.rowID}
          state={this.props.state[2]}
          stateChanger={this.props.stateChanger} />
      </div>
    )
  }
}

export default Row;

// stateChanger() {
//   let currState = this.state.row;
//   console.log(`Current State is: ${this.state}`);
//   if (currState === 'X' || currState === '-') this.setState({ initialMove: 'O' });
//   else if (currState === 'O' || currState === '-') this.setState({ initialMove: 'X' });
// }