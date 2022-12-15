export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export type ITodos = ITodo[];

export type ITodoUpdate = Omit<ITodo, 'id'>;
