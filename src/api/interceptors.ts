import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
type IConfig = AxiosRequestConfig;
const requestConfig: IConfig = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
};
export const customRequest = (): AxiosInstance => {
    const instance = axios.create(requestConfig);
    instance.interceptors.request.use(
        function (config: IConfig) {
            return config;
        },
        function (err) {
            return Promise.reject(err);
        },
    );
    return instance;
};

export const getTodoCustom = () => {
    return customRequest().get('todos');
};
