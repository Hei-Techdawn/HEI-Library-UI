import { FC, useContext, useEffect, useState } from 'react';
import { TBook } from '../../../Providers/Data/Types';
import { DataProvider } from '../../../Providers/Data/DataProvider';
import { PrincipalContext } from '../../../Providers/Context/ContextProvider';
import { ESbType } from '../../../Components/Common/Snackbar/SnackbarInterface';
import { SimplePagination } from '../../../Components/SimplePagination/SimplePagination';
import { usePagination } from '../../../Components/SimplePagination/Utils';
import {provider} from "../../Manager/BookManagement/BookManagement";

export const ListByRank: FC = () => {
    const { page, setPage, setLastPage } = usePagination(1, 12);
    const [books, setBooks] = useState<TBook[] | null>(null);
    const context = useContext(PrincipalContext);

    const update = (page: number) => {
        provider.getAll(page).then((res) => {
            setBooks(res.data.slice(0, 10));
            setLastPage(res.lastPage);
        });
    };

    const remove = async (e: TBook) => {
        await provider.remove(e.id || 0);
        context.openSnackBar(`${e.title} bien effacer`, ESbType.SUCCESS);
        update(page.currentPage);
    };

    const changePage = async (e: number) => {
        await setPage(e);
        update(page.currentPage);
    };

    useEffect(() => {
        update(2);
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
                        <th>Page</th>
                    </tr>
                </thead>
                <tbody>
                    {books !== null &&
                        books
                            .sort((a, b) => (a.loanNumber || 0) - (b.loanNumber || 0))
                            .map((e, k) => {
                                return (
                                    <tr key={e + k.toString() + 'body'}>
                                        <td>{k}</td>
                                        <td>{e.title}</td>
                                        <td>{e.category?.name}</td>
                                        <td>{e.author?.name}</td>
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
