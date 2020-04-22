import React, { Component } from 'react';
import './index.css'
class index extends Component {
  render() {
    return (
      <div className="ui-button-wrapper">
        <button>{this.props.value}</button>
      </div>
    );
  }
}

export default index;