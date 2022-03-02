import {instance} from "./api";

export const todoApi = {
    getTodo () {
        return instance.get('/todos').then(res=>res.data)
    }
}