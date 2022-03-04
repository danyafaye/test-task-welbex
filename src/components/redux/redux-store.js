import {combineReducers, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import todoListReducer from "./todoListReducer";

let reducers = combineReducers(
    {
        app: todoListReducer
    }
)

const store = createStore(reducers, applyMiddleware(thunk))
export default store;