import { ITodo, ITodoUpdate } from './../types/todo';
import { ITodos } from '../types/todo';
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos';
export const getTodos = () => {
    return axios.get<ITodos>(url);
};

export const updateTodoById = (id: number, todo: ITodoUpdate) => {
    return axios.put<ITodo>(`${url}/${id}`, todo);
};

export const deleteTodoById = (id: number) => {
    return axios.delete<number>(`${url}/${id}`);
};

export const addSingleTodo = (todo: ITodo) => {
    return axios.post<ITodo>(url, { ...todo });
};
