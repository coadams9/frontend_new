import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


const rootReducer = null //add combine reducers


export default createStore(rootReducer, applyMiddleware(thunk))