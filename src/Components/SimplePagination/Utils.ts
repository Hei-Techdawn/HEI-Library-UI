import { useState } from 'react';

export function rangeOf(count: number): number[] {
    const result: number[] = [];
    for (let a = 1; a <= count; a++) {
        result.push(a);
    }
    return result;
}

export function paginationNumber(currentPage: number, lastPage: number): number[] {
    if (currentPage < 4) {
        return rangeOf(3);
    } else if (currentPage >= lastPage - 1) {
        return [lastPage - 2, lastPage - 1, lastPage];
    }
    return [currentPage - 1, currentPage, currentPage + 1];
}

export const usePagination = (currentPage: number, lastPage: number) => {
    const [state, setState] = useState({ currentPage, lastPage });

    const setPage = (newPage: number) => {
        setState({ lastPage, currentPage: newPage });
    };

    return {
        page: state,
        setPage,
        setLastPage: (a: number) => setState((e) => ({ ...e, lastPage: a })),
    };
};
