import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST} from './actionType'
import axios from 'axios'
export const getChangeInputAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction=(value)=>({
    type:ADD_TODO_ITEM,
    value
})

export const getDeleteItemAction=(value)=>({
    type:DELETE_TODO_ITEM,
    value
})

export const initListAction=(data)=>({
  type:INIT_LIST_ACTION,
  data
})

//利用redux-thunk
export const getToDoList=()=>{
  return (dispatch)=>{
    axios.get('/todolist.json').then((res)=>{
      const data=res.data
      const action=initListAction(data)
      dispatch(action)
    })
  }
}

export const getInitList=()=>({
  type:GET_INIT_LIST
})