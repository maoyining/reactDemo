import React, { Component } from 'react';
import './index.css'
class index extends Component {
  render() {
    return (
      <div className="ui-header-wrapper">
        <a href="https://github.com/maoyining/reactDemo" className="ui-header-gitlogo">
          <img alt="github logo" src="../assets/img/github.png"></img>
        </a>
        <div className="ui-header-name">My Treasure</div>
        <div className="ui-header-right">
         
        </div>
      </div>
    );
  }
}

export default index;