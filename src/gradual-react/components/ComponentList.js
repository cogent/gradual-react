import React, { Component } from 'react';
import glamorous from 'glamorous'

const SectionHeading = glamorous.h2({
  fontSize: 20,
})

class ComponentList extends Component {
  render() {
    return (
      <div>
        <SectionHeading>Components</SectionHeading>
        <ul>
          <li>ComponentOne</li>
          <li>ComponentTwo</li>
          <li>ComponentThree</li>
          </ul>
      </div>
    );
  }
}

export default ComponentList