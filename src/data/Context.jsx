import React, { Component } from 'react';

const globalState = React.createContext();

class globalStateProvider extends Component {
  state = {
    lastReadNewsPage: 0,
  };
  render() {
    return (
      <globalState.Provider value={this.state}>
        {this.props.children}
      </globalState.Provider>
    );
  }
}
