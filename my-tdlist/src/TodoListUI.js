import React from 'react'
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css'

//傻瓜组件，UI组件，内部没有逻辑
//无状态组件，性能比较高
function TodoListUI (props) {
    return (
      <div>
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          {/* <label htmlFor="insertArea">输入内容：</label> */}
          <Input
            id="insertArea"
            value={props.inputValue}
            onChange={props.handleInputChange}
            style={{ width: '300px' }}
          />
          <Button
            type="primary"
            onClick={props.handleSubmit}
            style={{ marginLeft: '10px' }}>提交
          </Button>
        </div>
        <List
          style={{ marginTop: '10px', marginLeft: '10px', width: '300px' }}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item >
              {item}
              <Button type="danger" onClick={()=>{props.handleItemdelete(index)}} style={{marginLeft:'50px'}}>delete</Button>
            </List.Item>
          )}
        />
      </div>
    )
}

export default TodoListUI