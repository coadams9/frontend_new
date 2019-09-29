import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import carReducer from './reducers/carReducer'
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
   cars: carReducer
})

const middlewares = [thunkMiddleware]
const middleWareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middleWareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)


export default createStore(rootReducer, composedEnhancers)  