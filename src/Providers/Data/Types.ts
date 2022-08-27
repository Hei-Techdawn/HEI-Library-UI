export type TAuthor = {
    id?: number;
    name?: string;
    pseudo?: string;
};

export type TCategory = {
    id?: number;
    name?: string;
};

export type TBook = {
    id?: number;
    title?: string;
    author?: TAuthor;
    category?: TCategory;
    pageNumber?: number;
    status?: 'borrowed' | 'available';
    loanNumber?: number;
};

export type OneDateBorrowed = {
    date?: string;
    book?: TBook[];
};

export type TBorrowingHistory = OneDateBorrowed[];

export type TAuth = {
    username: string;
    password: string;
}

export type TPaginationList<T> = {
    currentPage: number;
    lastPage: number;
    data: T;
}