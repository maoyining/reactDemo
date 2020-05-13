import React from 'react';
import { connect } from 'react-redux'
import { getChangeInputAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator';

//UI组件、无状态组件
function TodoList(props) {
  //解构赋值
  const { inputValue, handleInputChange, handleClick,handleDelete,list } = props
  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange}></input>
        <button onClick={handleClick}>提交</button>
      </div>
      <div>
        <ul>
          {
            list.map((item, index) => {
              return (<li key={index} onClick={() => { handleDelete(index) }}>{item}</li>)
            })  
          }
        </ul>
      </div>

    </div>
  )
}

//规则，store里面的数据映射给组件里的props
//这个state指的是store里的state
//在组件里要使用这个值的话就要使用this.props.inputValue
const mapStateToProps = (state) => {
  console.log(state.inputValue)
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

//store.dispatch方法挂载到props上
const mapDispatchToProps = (dispatch) => ({
  handleInputChange(e) {
    //console.log(e.target.value)
    const action = getChangeInputAction(e.target.value)
    dispatch(action)
  },
  handleClick() {
    const action = getAddItemAction()
    dispatch(action)
  },
  handleDelete(index) {
    console.log(index)
    const action = getDeleteItemAction(index)
    dispatch(action)
  }
})
//让组件todoList和store做连接
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
