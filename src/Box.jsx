import React, { Component } from 'react';

// class Box extends Component {

//   render() {
//     return (
//       <button onClick={() => this.props.stateChanger(this.props.boxID, this.props.rowID)}>{this.props.state}
//       </button>
//     )
//   }
// }

function Box(props) {
  return (
    <button onClick={() => props.stateChanger(props.boxID, props.rowID)}>
      {props.state}
    </button>
  )
}

export default Box;
