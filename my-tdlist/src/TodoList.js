// Fragments 可以让你聚合一个子元素列表，并且不在DOM中增加额外节点。
import React, { Component, Fragment } from 'react';
import { Input, Button, List} from 'antd';
import 'antd/dist/antd.css'
import store from './store'
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'
class TodoList extends Component {
  //最优先执行的函数 
  constructor(props) {
    super(props);
    this.state=store.getState()
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    //this.handleItemdelete = this.handleItemdelete.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          {/* <label htmlFor="insertArea">输入内容：</label> */}
          <Input id="insertArea" value={this.state.inputValue} onChange={this.handleInputChange} style={{ width: '300px' }} />
          <Button type="primary" onClick={this.handleSubmit} style={{ marginLeft: '10px' }}>提交</Button>
        </div>
        <List
          style={{marginTop:'10px',marginLeft:'10px',width:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (
            <List.Item>  
              {item}  
              <Button type="danger" onClick={this.handleItemdelete.bind(this,index)}>delete</Button>
            </List.Item>
          )}
        />
      </Fragment>
    );
  }

  handleInputChange(e) {
    const value = e.target.value
    const action = getInputChangeAction(value)
    store.dispatch(action)
  }
  handleStoreChange(){
    this.setState(store.getState())
  }
  handleSubmit() {
    const action = getAddItemAction(this.state.inputValue)
    store.dispatch(action)
  }
  handleItemdelete(index) {
    const action=getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;