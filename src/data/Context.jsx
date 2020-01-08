import React, { Component } from 'react';

export const GlobalState = React.createContext();

class GlobalStateProvider extends Component {
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
      <GlobalState.Provider
        value={{
          state: this.state,
          actions: this.actions,
        }}
      >
        {this.props.children}
      </GlobalState.Provider>
    );
  }
}

export default GlobalStateProvider;
