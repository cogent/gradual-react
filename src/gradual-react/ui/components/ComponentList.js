import React, { Component } from 'react';
import glamorous from 'glamorous'

const SectionHeading = glamorous.h2({
  fontSize: 20,
})

class ComponentList extends Component {
  render() {
    const {components} = this.props

    return (
      <div>
        <SectionHeading>Components</SectionHeading>
        <ul>
          {components.map((component) =>
            <li key={component}>{component}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default ComponentList