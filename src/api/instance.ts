import { ITodo } from './../types/todo';
import { ITodos } from 'types/todo';
import axios, { AxiosInstance } from 'axios';
const instance: AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 4000,
});

export const getAllTodos = () => {
    return instance.get<ITodos>('todos');
};
export const addSingleTodoInstance = (todo: ITodo) => {
    return instance.post<ITodo>('todos', todo);
};
