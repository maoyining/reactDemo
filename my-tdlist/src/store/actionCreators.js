import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionType'
export const getInputChangeAction=(value)=>({
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