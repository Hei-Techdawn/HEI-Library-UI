import { FC, useContext, useEffect, useState } from 'react';
import { DataProvider } from '../../../Providers/Data/DataProvider';
import { TAuthor, TCategory } from '../../../Providers/Data/Types';
import { CreateBook, TAddState } from './Types';
import { Query } from '../../../Providers/Data/Utils';
import { AuthorAdd } from './AddAuthor';
import { AddCategory } from './AddCategory';
import { PrincipalContext } from '../../../Providers/Context/ContextProvider';
import { ESbType } from '../../../Components/Common/Snackbar/SnackbarInterface';

export const Add: FC = () => {
    const [data, setData] = useState<TAddState>({ author: [], category: [] });
    const authorProvider = new DataProvider<TAuthor>('/author');
    const categoryProvider = new DataProvider<TCategory>('/category');
    const context = useContext(PrincipalContext);
    const update = () => {
        authorProvider.getAll(-1).then((res) => {
            setData((e) => ({ ...e, author: res.data }));
        });
        categoryProvider.getAll(-1).then((res) => {
            setData((e) => ({ ...e, category: res.data }));
        });
    };
    useEffect(() => {
        update();
    }, []);

    const [book, setBook] = useState<CreateBook>({
        author: {id: 1},
        title: '',
        category: {id: 1},
        pageNumber: 0,
    });

    return (
        <div className='container justify-content-around row'>
            <AuthorAdd onFinish={update} />
            <AddCategory onFinish={update} />
            <div className='col-5 d-flex'>
                <div className='w-75'>
                    <p>Ajout de livre</p>
                    <div className='justify-content-between w-100 d-flex'>
                        <input
                            onChange={(event) =>
                                setBook((e) => ({ ...e, title: event.target.value }))
                            }
                            type='text'
                            className='form-control m-2'
                            placeholder='Titre'
                        />
                        <input
                            type='text'
                            className='form-control m-2'
                            placeholder='Nombre de page'
                            onChange={(event) =>
                                setBook((e) => ({ ...e, pageNumber: parseInt(event.target.value) }))
                            }
                        />
                    </div>
                    <div className='d-flex'>
                        {data.author !== undefined && (
                            <select
                                onChange={(event) =>
                                    setBook((e) => ({
                                        ...e,
                                        author: {id: parseInt(event.target.value),}
                                    }))
                                }
                                className='form-select m-2'
                            >
                                {data.author.map((e) => (
                                    <option value={e.id || 'none'}>{e.pseudo || 'none'}</option>
                                ))}
                            </select>
                        )}
                        {data.category !== undefined && (
                            <select
                                onChange={(event) =>
                                    setBook((e) => ({
                                        ...e,
                                        category: {id: parseInt(event.target.value)},
                                    }))
                                }
                                defaultValue='this'
                                className='form-select m-2'
                            >
                                {data.category.map((e) => (
                                    <option value={e.id}>{e.name}</option>
                                ))}
                            </select>
                        )}
                    </div>
                    <button
                        onClick={() => {
                            Query.post('/book', [book]).then(() => {
                            }).catch(()=> {
                                context.openSnackBar('Erreur', ESbType.ERROR);
                            });
                        }}
                        className='btn btn-primary m-2'
                    >
                        Enregistrer
                    </button>
                </div>
            </div>
        </div>
    );
};
