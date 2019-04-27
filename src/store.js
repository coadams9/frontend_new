import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import carReducer from './reducers/carReducer'
// import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
   cars: carReducer
})


export default createStore(rootReducer, applyMiddleware(thunk))  