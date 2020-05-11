import {takeEvery,put} from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionType';
import { initListAction } from './actionCreator';
import axios from 'axios'
function* getDate(){
  try{
    const res=yield axios.get('/todolist.json')
    const action=initListAction(res.data)
    yield put(action)
  }catch(e){
    console.log("error")
  }
}
function* mySaga() {
  yield takeEvery(GET_INIT_LIST,getDate)
}

export default mySaga;