import { combineReducers } from 'redux'
import auth from './reducers/auth'

const reducers = {
  auth
}

export default combineReducers(reducers)