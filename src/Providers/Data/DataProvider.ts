import {TAuth, TBook, TPaginationList} from './Types';
import { Query } from './Utils';



export class DataProvider<T> {
    private readonly endpoint: string;
    private readonly auth: TAuth;

    constructor(endpoint: string, auth: TAuth) {
        this.endpoint = endpoint;
        this.auth = auth;
    }

    async edit(id: number, element: T): Promise<T> {
        return await Query.edit<T>(this.endpoint, id, element, { auth: this.auth });
    }

    async getAll(page: number): Promise<TPaginationList<T[]>> {
        return await Query.get<T[]>(this.endpoint, page);
    }

    async getOne(id: number): Promise<T> {
        return await Query.getOne<T>(`${this.endpoint}/${id}`, { auth: this.auth });
    }

    async remove(id: number): Promise<string> {
        return await Query.delete(this.endpoint, id, { auth: this.auth });
    }
}
