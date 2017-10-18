import React, { Component } from 'react';
import Dashboard from './Dashboard'

class Wrapper extends Component {
  render() {
    return (
      <div>
        <div style={{border: '1px solid red'}}>
          {this.props.children}
        </div>
        <div style={{border: '1px solid blue'}}>
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default Wrapper;
