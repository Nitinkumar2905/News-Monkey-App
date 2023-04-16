import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c= 'nitin'
  render() {
    return (
      <div>
        hey class based component {this.c}
      </div>
    )
  }
}

