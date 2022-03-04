import React, {useState} from "react";
import './ToDo.css'
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";

const ToDo = () => {
    const [selectedTodo, setSelectedTodo] = useState(null);
    const [add, setAdd] = useState(false);
    const {getTodoList, setUserId, addTodo, setTitle, updateTodo, deleteTodo} = useActions();
    const {userId, todoList, title} = useSelector(state => state.app)
    const handleClickId = () => {
        getTodoList(userId)
    }
    const handleClickTitle = () => {
        addTodo()
        setAdd(false)
    }
    const handleChangeId = (e) => {
        setUserId(e.target.value)
    }
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeSelectedTodoTitle = (e) => {
        setSelectedTodo((prevState) => ({
            ...prevState, title: e.target.value
        }))
    }
    const handleClickTodo = (todo) => {
        setSelectedTodo({...todo})
    }
    const handleClickCheckbox = (id, currentValue) => {
        updateTodo(id, currentValue)
    }
    const handleClickDelete = (id) => {
        deleteTodo(id);
    }
    const handleClickEdit = () => {
        updateTodo(selectedTodo.id, selectedTodo.completed, selectedTodo.title)
        setSelectedTodo(null)
    }
    const handleChangeSelectedTodoCheckbox = (e) => {
        setSelectedTodo((prevState) => ({
            ...prevState, completed: e.target.value
        }))
    }
    return (
        <div className="app-todos">
            <div className="app-todo-add-edit-form">
                {add && (
                    <div>
                        <input type="text" value={title} onChange={handleChangeTitle}/>
                        <button onClick={handleClickTitle}>Add Todo</button>
                    </div>
                )}
                {selectedTodo && (
                    <div>
                        <input type="text" value={selectedTodo.title} onChange={handleChangeSelectedTodoTitle}/>
                        <input type='checkbox' value={selectedTodo.completed}
                               onChange={handleChangeSelectedTodoCheckbox}/>
                        <button onClick={handleClickEdit}>Edit Todo</button>
                    </div>
                )}
            </div>
            <div className="app-todo-controls">
                <p>Filter todo's by UserId</p>
                <input type="text" value={userId} onChange={handleChangeId}/>
                <button onClick={handleClickId}>Enter UserID</button>
                <button onClick={() => setAdd(true)}>Add todo</button>
            </div>
            <div className="app-todo-content">
                {todoList.map((todo) => (
                    <div key={todo.id}>
                        <p>{todo.title}</p>
                        <label htmlFor={todo.id}>
                            Completed:
                            <input id={todo.id} type='checkbox' checked={todo.completed}
                                   onChange={(e) => handleClickCheckbox(todo.id, e.target.checked)}/>
                        </label>
                        <button onClick={() => handleClickTodo(todo)}>Edit</button>
                        <button onClick={() => handleClickDelete(todo.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ToDo;