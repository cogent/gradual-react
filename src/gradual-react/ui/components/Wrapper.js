import React, { Component } from 'react';
import Dashboard from '../containers/DashboardContainer'
import glamorous from 'glamorous'

const WrapperBody = glamorous.div({
  display: 'flex',
  flex: 1,
  height: '100%',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
})

const AppContainer = glamorous.div({
  flex: 0.66,
})

const SidebarContainer = glamorous.div({
  padding: 0,
  flex: 0.33,
  textAlign: 'left',
})

class Wrapper extends Component {
  render() {
    return (
      <WrapperBody>
        <AppContainer>
          {this.props.children}
        </AppContainer>
        <SidebarContainer>
          <Dashboard />
        </SidebarContainer>
      </WrapperBody>
    );
  }
}

export default Wrapper;
