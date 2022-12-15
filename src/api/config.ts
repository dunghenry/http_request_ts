import { ITodo } from './../types/todo';
import axios from 'axios';

export const getTodo = (id: number) => {
    return axios<ITodo>({
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/todos/${id}`,

        //method POST
        // data: {
        // }
    });
};
