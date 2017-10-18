import React, { Component } from 'react';
import Dashboard from '../components/Dashboard'
import api from '../api'

class DashboardContainer extends Component {
  state = {components: []}

  componentWillMount() {
    api.fetchComponents().then((json) => {
      this.setState({components: json.components})
    })
  }

  render() {
    return (
      <Dashboard components={this.state.components} />
    );
  }
}

export default DashboardContainer