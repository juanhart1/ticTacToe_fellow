import React, { Component } from 'react';
import Box from './Box.jsx';
import { stat } from 'fs';

// class Row extends Component {

//   render() {
//     // console.log(`Here is props from Board => Row: ${this.props.state}`);
//     return (
//       <div>
//         <Box
//           key="box1"
//           boxID="0"
//           rowID={this.props.rowID}
//           state={this.props.state[0]}
//           stateChanger={this.props.stateChanger} />
//         <Box
//           key="box2"
//           boxID="1"
//           rowID={this.props.rowID}
//           state={this.props.state[1]}
//           stateChanger={this.props.stateChanger} />
//         <Box
//           key="box3"
//           boxID="2"
//           rowID={this.props.rowID}
//           state={this.props.state[2]}
//           stateChanger={this.props.stateChanger} />
//       </div>
//     )
//   }
// }

function Row(props) {
  return (
    <div>
      <Box
        key="box1"
        boxID="0"
        rowID={props.rowID}
        state={props.state[0]}
        stateChanger={props.stateChanger} />
      <Box
        key="box2"
        boxID="1"
        rowID={props.rowID}
        state={props.state[1]}
        stateChanger={props.stateChanger} />
      <Box
        key="box3"
        boxID="2"
        rowID={props.rowID}
        state={props.state[2]}
        stateChanger={props.stateChanger} />
    </div>
  )
}

export default Row;
