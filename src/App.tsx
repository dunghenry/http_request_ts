import { getTodo } from 'api/config';
import { getAllTodos, addSingleTodoInstance } from 'api/instance';
import { getTodoCustom } from 'api/interceptors';
import { getTodos, updateTodoById, deleteTodoById, addSingleTodo } from 'api/todos';
import React from 'react';
import { ITodos, ITodoUpdate } from 'types/todo';

const App = () => {
    const [todos, setTodos] = React.useState<ITodos>([]);
    React.useEffect(() => {
        (async () => {
            //getTodos
            //getAllTodos

            //interceptors axios
            const { data } = await getTodoCustom();
            setTodos(data);
            console.log(data);
        })();
    }, []);
    const updateTodo = async (id: number) => {
        console.log(id);
        const todo: ITodoUpdate = {
            userId: 1,
            title: 'delectus aut autem update',
            completed: false,
        };
        const { data } = await updateTodoById(id, todo);
        console.log(data);
    };

    const deleteTodo = async (id: number) => {
        const { status } = await deleteTodoById(id);
        console.log(status);
    };
    const addTodo = async () => {
        //addSingleTodo
        const { data } = await addSingleTodoInstance({
            userId: 1,
            id: 201,
            title: 'Xin chao',
            completed: false,
        });
        console.log(data);
    };
    const getSingleTodo = async (id: number) => {
        const { data } = await getTodo(id);
        console.log(data);
    };
    return (
        <div>
            <h1>Axios + TypeScript</h1>
            <button onClick={addTodo}>Add todo</button>
            <button onClick={() => updateTodo(1)}>Update todo</button>
            <button onClick={() => deleteTodo(1)}>Delete todo</button>
            <button onClick={() => getSingleTodo(1)}>Get todo</button>
        </div>
    );
};

export default App;
