import {todoApi} from "../api/todo-api";

const TODO_LIST = 'TODOLIST';
const USER_ID = 'USERID';
const TODO_TITLE = 'TODOTITLE'

let initialState = {
    userId: 1,
    todoList: [],
    title: ''
}

const todoListReducer = (state = initialState, action) => {
    switch(action.type) {
        case TODO_LIST:
            return{
                ...state,
                todoList: action.data
            }
        case USER_ID:
            return{
                ...state,
                userId: action.data
            }
        case TODO_TITLE:
            return{
                ...state,
                title: action.data
            }
        default:
            return state;
    }}

export const actions = {
    setTitle: (data) => ({type: TODO_TITLE, data}),
    setTodoList: (data) => ({type: TODO_LIST, data}),
    setUserId: (data) => ({type: USER_ID, data}),
    getTodoList: (id) => async(dispatch)=>{
        if(id){
            let data = await todoApi.getTodo(id);
            dispatch(actions.setTodoList(data));
        }
    },
    addTodo: () => async(dispatch, getState)=>{
        const {userId, title, todoList} = getState().app
        if(title) {
            let data = await todoApi.postTodo(userId, title);
            dispatch(actions.setTodoList([data, ...todoList]));
        }
    },
    updateTodo: (id, completed, title) => async(dispatch, getState)=>{
        const {todoList} = getState().app
        await todoApi.putTodo(id, completed, title);
        dispatch(actions.setTodoList(todoList.map((todo)=>{
            if(todo.id === id)
                return {...todo, completed, title: title || todo.title}
            return todo;
        })));
    },
    deleteTodo: (id) => async(dispatch, getState)=>{
        const {todoList} = getState().app
        await todoApi.deleteTodo(id);
        dispatch(actions.setTodoList(todoList.filter(todo=>todo.id !== id)));
    },
}

export default todoListReducer;