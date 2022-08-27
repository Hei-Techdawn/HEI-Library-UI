import { FC, useContext, useState } from 'react';
import { Query } from '../../../Providers/Data/Utils';
import { PrincipalContext } from '../../../Providers/Context/ContextProvider';
import { ESbType } from '../../../Components/Common/Snackbar/SnackbarInterface';

export const AddCategory: FC<{ onFinish: () => void }> = ({ onFinish }) => {
    const [category, setCategory] = useState<string>('');
    const context = useContext(PrincipalContext);

    return (
        <div className='col-5 d-flex justify-content-center'>
            <div className='w-75'>
                <p>Ajout de catégorie</p>
                <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    type='text'
                    className='form-control m-2'
                    placeholder='nom'
                />
                <button
                    onClick={() => {
                        category.length > 0 &&
                            Query.post('/category', [{ name: category }]).then(() => {
                                context.openSnackBar('Category ajouter', ESbType.SUCCESS);
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