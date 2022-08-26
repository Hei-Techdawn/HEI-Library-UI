import {FC, useContext, useEffect, useState} from 'react';
import './Style.css';
import { TBook } from '../../../Providers/Data/Types';
import { DataProvider } from '../../../Providers/Data/DataProvider';
import {PrincipalContext} from "../../../Providers/Context/ContextProvider";

export const BookManagement: FC = () => {
    const provider = new DataProvider<TBook>('/book', { username: '', password: '' });
    const [books, setBooks] = useState<TBook[] | null>(null);
    const context = useContext(PrincipalContext)
    useEffect(() => {
        console.log('hihi');
        provider.getAll(1).then((res) => {
            setBooks(res.slice(0, 10));
        });
    }, []);

    return (
        <div className='bm-container'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titre</th>
                        <th>Autheur</th>
                        <th>Page</th>
                        <th>Status</th>
                        <th>Actions</th>
                        <th></th>
                        <th></th>
                        <th></th>
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
                                    <td>{e.author?.name}</td>
                                    <td>{e.pageNumber}</td>
                                    <td>{e.status}</td>
                                    <td className="button-container">
                                        <button className='btn btn-danger'>Rendre</button>
                                        <button className='btn btn-secondary'>Rendre</button>
                                    </td>
                                    <td>
                                        <i className='fa fa-trash-can'></i>
                                    </td>
                                    <td>
                                        <i onClick={()=> context.openModal(<p>{e.title}</p>)} className='fa fa-pencil'></i>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};
