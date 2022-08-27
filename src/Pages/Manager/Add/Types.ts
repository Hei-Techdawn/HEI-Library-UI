import {TAuthor, TCategory} from "../../../Providers/Data/Types";

export type TAddState = {
    author: TAuthor[];
    category: TCategory[];
}

export type CreateBook = {
    author: {id: number},
    title: string,
    category: {id: number},
    pageNumber: number,
}