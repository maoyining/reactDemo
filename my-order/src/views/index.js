import React, { Component } from 'react';
import './index.css';
import Header from '../components/Header/index'
import Button from '../components/Button/index'
class index extends Component {
  render() {
    return (
      <div className="ui-index-body">
        <Header></Header>
        <div className="ui-index-picture"></div>
        <div className="ui-index-des">
          <span>HELLO! Welcome To 阿毛的 Blog! </span>
        </div>
        <div className="ui-index-box">
          <div className="ui-index-item">
            <Button value="My Create"/>
          </div>
          <div className="ui-index-item">
            <Button value="Good Notes"></Button>
          </div>
          <div className="ui-index-item">
            <Button value="Sharing"></Button>
          </div>
        </div>
      </div>
    );
  }
}

export default index;