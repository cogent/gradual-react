import React, { Component } from 'react';
import glamorous from 'glamorous'
import ComponentList from './ComponentList'

const DashboardContainer = glamorous.div({
  padding: 10,
  backgroundColor: '#333',
  height: '100%',
  color: '#CCCCCC'
})

const Heading = glamorous.h1({
  fontSize: 22,
  marginTop: 0,
  paddingTop: 0,
  color: '#CC3A4B',
})

class Dashboard extends Component {
  render() {
    return (
      <DashboardContainer>
        <Heading>Gradual React</Heading>
        <ComponentList components={this.props.components} />
      </DashboardContainer>
    );
  }
}

export default Dashboard;
