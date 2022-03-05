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
        console.log(selectedTodo.id,selectedTodo.completed,selectedTodo.title)
        updateTodo(selectedTodo.id, selectedTodo.completed, selectedTodo.title)
        setSelectedTodo(null)
    }
    const handleChangeSelectedTodoCheckbox = (e) => {
        setSelectedTodo((prevState) => ({
            ...prevState, completed: e.target.checked
        }))
    }
    return (
        <div className="app-todos">
                {add && (
                    <div className="app-todo-add-form">
                        <input type="text" value={title} onChange={handleChangeTitle}/>
                        <button onClick={handleClickTitle}>Add Todo</button>
                    </div>
                )}
                {selectedTodo && (
                    <div className="app-todo-edit-form">
                        <input type="text" value={selectedTodo.title} onChange={handleChangeSelectedTodoTitle} className="app-edit-input"/>
                        <label htmlFor={selectedTodo.id}>
                            Completed:
                            <input id={selectedTodo.id} type='checkbox' checked={selectedTodo.completed}
                                                 onChange={handleChangeSelectedTodoCheckbox} className="app-todo-edit-checkbox"/>
                        </label>
                        <button onClick={handleClickEdit}>Edit Todo</button>
                    </div>
                )}
            <p>Filter todo's by UserId</p>
            <div className="app-todo-controls">
                <input type="text" value={userId} onChange={handleChangeId}/>
                <button onClick={handleClickId}>Enter UserID</button>
                <button onClick={() => {setAdd(true)
                    setSelectedTodo(null)}}>Add todo</button>
            </div>
            {todoList.map((todo) => (
                <div key={todo.id} className="app-todo-content">
                    <p>{todo.title}</p>
                    <div className="app-todo-content-controls">
                        <label htmlFor={todo.id}>
                            Completed:
                            <input id={todo.id} type='checkbox' checked={todo.completed}
                                   onChange={(e) => handleClickCheckbox(todo.id, e.target.checked)}/>
                        </label>
                        <button onClick={() => handleClickTodo(todo)}>Edit</button>
                        <button onClick={() => handleClickDelete(todo.id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ToDo;