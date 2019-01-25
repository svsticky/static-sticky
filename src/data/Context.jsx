import React, { Component } from 'react';

export const globalState = React.createContext();

class globalStateProvider extends Component {
  state = {
    lastReadNewsPage: 0,
  };

  actions = {
    updateLastReadNewsPage: page => {
      this.setState({ lastReadNewsPage: page });
    },
  };

  render() {
    return (
      <globalState.Provider
        value={{
          state: this.state,
          actions: this.actions,
        }}
      >
        {this.props.children}
      </globalState.Provider>
    );
  }
}

export default globalStateProvider;
