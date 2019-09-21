import React, { Component } from 'react';

class Box extends Component {

  render() {
    return (
      <button onClick={() => this.props.stateChanger(this.props.id, this.props.rowID)}>{this.props.state}
      </button>
    )
  }
}

export default Box;
