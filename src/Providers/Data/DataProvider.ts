import {TAuth, TBook} from "./Types";
import { Query } from "./Utils";

export class DataProvider<T> {
    private readonly endpoint: string;
    private readonly auth: TAuth;

    constructor(endpoint: string, auth: TAuth) {
        this.endpoint = endpoint;
        this.auth = auth;
    }

    edit(id:number, element: T): Promise<T> {
        return Query.edit<T>(this.endpoint, id, element, {auth: this.auth});
    }

    getAll(): Promise<T[]> {
        return Query.get<T[]>(this.endpoint, {auth: this.auth});
    }

    getOne(id: number): Promise<T> {
        return Query.get<T>(`${this.endpoint}/${id}`, {auth: this.auth})
    }

    remove(id: number): Promise<string> {
        return Query.delete(this.endpoint, id, {auth: this.auth})
    }
}