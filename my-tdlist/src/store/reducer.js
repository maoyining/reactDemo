import { CHANGE_INPUT_VALUE } from "./actionType"
import { ADD_TODO_ITEM } from "./actionType"
import { DELETE_TODO_ITEM } from "./actionType"

const defaultState={
  inputValue:'',
  list:[1,2]
}
export default (state=defaultState,action)=>{
  if(action.type===CHANGE_INPUT_VALUE){
    const newState=JSON.parse(JSON.stringify(state))
    newState.inputValue=action.value
    return newState
  }
  if(action.type===ADD_TODO_ITEM){
    const newState=JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue=''
    return newState
  }
  if(action.type===DELETE_TODO_ITEM){
    const newState=JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value,1)
    return newState
  }
  return state
}