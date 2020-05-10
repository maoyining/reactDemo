import React, { Component } from 'react';

class Todoitem extends Component {
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this)//这种写法会节约性能
  }
  render() {
    const {value} = this.props;//解构赋值
    return (
      <div onClick={this.handleClick}>
        {value}
      </div>
    );
  }
  handleClick(){
    const {deleteItem,index} = this.props;//也是通过结构赋值
    deleteItem(index)
  }
}

export default Todoitem;