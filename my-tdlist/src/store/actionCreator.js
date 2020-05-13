import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from "./actionType";

export const getChangeInputAction=(value)=>({
  type: CHANGE_INPUT_VALUE,
  value: value
})

export const getAddItemAction=()=>({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction=(value)=>({
  type: DELETE_TODO_ITEM,
  value
})