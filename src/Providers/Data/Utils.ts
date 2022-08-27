import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import {TPaginationList} from "./Types";

export class Query {
    constructor() {}

    static get = <T>(endpoint: string, page: number): Promise<TPaginationList<T>> =>
        axios
            .get(`http://localhost:8080${endpoint}`, {
                params: { page: page, size: 10 },
            })
            .then((res) => {
                console.log(res.data)
                return res.data;
            })
            .catch((err) => {
                throw new Error(err.message);
            });

    static getOne = <T>(endpoint: string, config: AxiosRequestConfig): Promise<T> =>
        axios
            .get(`http://localhost:8080${endpoint}`, config)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err.message);
            });

    static post = async <T>(endpoint: string, data: T[], config: AxiosRequestConfig): Promise<T> =>
        axios
            .post(`http://localhost:8080${endpoint}`, data, config)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err.message);
            });

    static delete = async (
        endpoint: string,
        id: number,
        config: AxiosRequestConfig
    ): Promise<string> =>
        axios
            .delete(`http://localhost:8080${endpoint}/${id}`, config)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err.message);
            });

    static edit = async <T>(
        endpoint: string,
        id: number,
        data: T,
        config: AxiosRequestConfig
    ): Promise<T> =>
        axios
            .patch(`http://localhost:8080${endpoint}/${id}`, config)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err.message);
            });
}
