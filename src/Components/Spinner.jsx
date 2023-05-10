import React, { Component } from 'react';
import loading from './loading_gif.gif';
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="" />
      </div>
    )
  }
}

export default Spinner