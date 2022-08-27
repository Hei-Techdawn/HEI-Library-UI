import { FC, useContext, useEffect, useState } from 'react';
import './Style.css';
import { TBook } from '../../../Providers/Data/Types';
import { DataProvider } from '../../../Providers/Data/DataProvider';
import { PrincipalContext } from '../../../Providers/Context/ContextProvider';
import { ESbType } from '../../../Components/Common/Snackbar/SnackbarInterface';
import { SimplePagination } from '../../../Components/SimplePagination/SimplePagination';
import { usePagination } from '../../../Components/SimplePagination/Utils';

export const provider = new DataProvider<TBook>('/book', { username: '', password: '' });

export const BookManagement: FC = () => {
    const { page, setPage, setLastPage } = usePagination(1, 10);
    const [books, setBooks] = useState<TBook[] | null>(null);
    const context = useContext(PrincipalContext);

    const update = (page: number) => {
        provider.getAll(page).then((res) => {
            setBooks(res.data);
            setLastPage(res.lastPage);
        });
    };

    const remove = async (e: TBook) => {
        await provider.remove(e.id || 0);
        context.openSnackBar(
            `${e.title} bien effacer`,
            ESbType.SUCCESS
        );
        update(page.currentPage);
    }

    const changePage = async (e: number) => {
        await setPage(e)
        update(e);
    }

    useEffect(() => {
        update(1);
    }, []);

    return (
        <div className='bm-container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titre</th>
                        <th>Autheur</th>
                        <th>Catégorie</th>
                        <th>Page</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books !== null &&
                        books.map((e, k) => {
                            return (
                                <tr key={e + k.toString() + 'body'}>
                                    <td>{e.id}</td>
                                    <td>{e.title}</td>
                                    <td>{e.category?.name}</td>
                                    <td>{e.author?.pseudo}</td>
                                    <td>{e.pageNumber}</td>
                                    <td>{e.status}</td>
                                    <td className='button-container'>
                                        <button className='btn btn-danger'>Rendre</button>
                                        <button className='btn btn-success'>Emprunter</button>
                                        <i
                                            onClick={()=> remove(e)}
                                            className='bi bi-trash-fill'
                                        ></i>
                                        <i
                                            onClick={() => context.openModal(<p>{e.title}</p>)}
                                            className='bi bi-pencil-fill'
                                        ></i>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <SimplePagination {...page} changePage={changePage}  />
        </div>
    );
};
