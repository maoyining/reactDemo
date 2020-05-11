// Fragments 可以让你聚合一个子元素列表，并且不在DOM中增加额外节点。
import React, { Component } from 'react';
import store from "./store";
import { getChangeInputAction, getAddItemAction, getDeleteItemAction, initListAction, getToDoList, getInitList } from './store/actionCreator'
import TodoListUI from './TodoListUI';

//容器组件，聪明组件
class TodoList extends Component {
  //最优先执行的函数 
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleItemdelete = this.handleItemdelete.bind(this)
  }

  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
        list={this.state.list}
        handleItemdelete={this.handleItemdelete}>
      </TodoListUI>
    );
  }
  componentDidMount(){
     //const action=getToDoList()
     //store.dispatch(action)
     const action = getInitList()
     console.log(action)
     store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleInputChange(e) {
    const value = e.target.value
    const action = getChangeInputAction(value)
    store.dispatch(action)
  }

  handleSubmit() {
    const action = getAddItemAction(this.state.inputValue)
    store.dispatch(action)
  }
  handleItemdelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;