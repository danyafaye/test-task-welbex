import {instance} from "./api";

export const todoApi = {
    getTodo (id) {
        return instance.get(`/todos?userId=${id}`).then(res=>res.data)
    },
    postTodo(userId, title) {
        return instance.post('/todos', {userId, title, completed: false}).then(res=>res.data)
    },
    putTodo(id, completed, title){
        return instance.put(`/todos/${id}`, {completed, title}).then(res=>res.data)
    },
    deleteTodo(id){
        return instance.delete(`/todos/${id}`)
    }
}