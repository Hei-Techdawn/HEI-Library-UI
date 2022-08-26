import { FC, FormEvent, useEffect, useState } from 'react';
import { TSPProps } from './Types';
import './Style.css';

export const SPInputMini: FC<TSPProps> = (props) => {
    const { lastPage, changePage, currentPage } = props;
    const [state, setState] = useState<string>('1');
    useEffect(() => {
        setState(currentPage.toString());
    }, [currentPage]);
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const nextPage =
            parseInt(state) !== NaN && parseInt(state) <= lastPage ? parseInt(state) : currentPage;
        changePage(nextPage);
    };

    return (
        <form className='SPInputForm input-group' onSubmit={handleSubmit}>
            <input
                onChange={(e) => setState(e.target.value)}
                type='number'
                className='SPInput form-control'
            />
            <button className='btn btn-outline-primary'>/{lastPage}</button>
        </form>
    );
};
