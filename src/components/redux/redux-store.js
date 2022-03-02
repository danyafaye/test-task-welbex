import {combineReducers, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"

let reducers = combineReducers(
    {
    }
)

const store = createStore(reducers, applyMiddleware(thunk))
export default store;