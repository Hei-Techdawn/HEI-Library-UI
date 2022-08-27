import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
import { TPaginationList } from './Types';

const url = 'https://4fe5-154-126-107-209.eu.ngrok.io';

export class Query {
    constructor() {}

    static get = <T>(endpoint: string, page: number): Promise<TPaginationList<T>> =>
        axios
            .get(url + endpoint, {
                params: { page: page, size: -1 },
            })
            .then((res) => {
                console.log(res.data);
                return res.data;
            })
            .catch((err) => {
                throw new Error(err.message);
            });

    static getOne = <T>(endpoint: string, config: AxiosRequestConfig): Promise<T> =>
        axios
            .get(url + endpoint, config)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err.message);
            });

    static post = async <T>(
        endpoint: string,
        data: T[],
        config?: AxiosRequestConfig
    ): Promise<string> =>
        axios
            .post(url + endpoint, data, config)
            .then((res) => 'finish')
            .catch((err) => {
                throw new Error(err.message);
            });

    static delete = async (
        endpoint: string,
        id: number,
        config: AxiosRequestConfig
    ): Promise<string> =>
        axios
            .delete(`${url + endpoint}/${id}`, config)
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
            .patch(`${url + endpoint}/${id}`, config)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err.message);
            });
}
