import { FC, useContext, useEffect, useState } from 'react';
import { TBook } from '../../../Providers/Data/Types';
import { SimplePagination } from '../../../Components/SimplePagination/SimplePagination';
import { usePagination } from '../../../Components/SimplePagination/Utils';
import {provider} from "../../Manager/BookManagement/BookManagement";

export const ListByRank: FC = () => {
    const { page, setPage, setLastPage } = usePagination(1, 12);
    const [books, setBooks] = useState<TBook[] | null>(null);

    const update = (page: number) => {
        provider.getAll(page).then((res) => {
            setBooks(res.data);
            setLastPage(res.lastPage);
        });
    };

    const changePage = async (e: number) => {
        setPage(e);
        update(e);
    };

    useEffect(() => {
        update(1);
    }, []);

    return (
        <div className='bm-container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Rang</th>
                        <th>Titre</th>
                        <th>Autheur</th>
                        <th>Catégorie</th>
                        <th>Emprunt</th>
                        <th>Page</th>
                    </tr>
                </thead>
                <tbody>
                    {books !== null &&
                        books
                            .map((e, k) => {
                                return (
                                    <tr key={e + k.toString() + 'body'}>
                                        <td>{k+1}</td>
                                        <td>{e.title}</td>
                                        <td>{e.category?.name}</td>
                                        <td>{e.author?.pseudo}</td>
                                        <td>{e.loanNumber}</td>
                                        <td>{e.pageNumber}</td>
                                    </tr>
                                );
                            })}
                </tbody>
            </table>
            <SimplePagination {...page} changePage={changePage} />
        </div>
    );
};
