import { ChangeEvent, FC, useContext, useState } from 'react';
import { TAuthor } from '../../../Providers/Data/Types';
import { Query } from '../../../Providers/Data/Utils';
import { PrincipalContext } from '../../../Providers/Context/ContextProvider';
import { ESbType } from '../../../Components/Common/Snackbar/SnackbarInterface';

export const AuthorAdd: FC<{ onFinish: () => void }> = ({ onFinish }) => {
    const [authorState, setAuthor] = useState<TAuthor>({ firstName: '', lastName: '', pseudo: '' });
    const context = useContext(PrincipalContext);

    const handleChangeAuthor = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthor((a) => ({ ...a, [e.target.name]: e.target.value }));
    };
    return (
        <div className='col-5 d-flex justify-content-center'>
            <div className='w-75'>
                <p>Ajout d'autheur</p>
                <input
                    name='lastName'
                    value={authorState.lastName}
                    onChange={handleChangeAuthor}
                    type='text'
                    className='form-control m-2'
                    placeholder='Nom'
                />
                <input
                    name='firstName'
                    value={authorState.firstName}
                    onChange={handleChangeAuthor}
                    type='text'
                    className='form-control m-2'
                    placeholder='Prénom'
                />
                <input
                    name='pseudo'
                    value={authorState.pseudo}
                    onChange={handleChangeAuthor}
                    type='text'
                    className='form-control m-2'
                    placeholder='Pseudo'
                />
                <button
                    onClick={() => {
                        Query.post<TAuthor>('/author', [authorState]).then(() => {
                            context.openSnackBar('Auteur ajouter', ESbType.SUCCESS);
                            onFinish();
                        });
                    }}
                    className='btn btn-primary m-2'
                >
                    Enregistrer
                </button>
            </div>
        </div>
    );
};