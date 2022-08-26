import { FC, useEffect, useState } from 'react';
import { DataProvider } from '../../../Providers/Data/DataProvider';
import { TBook } from '../../../Providers/Data/Types';
import { SimpleTable } from '../../../Components/SimpleTable/SimpleTable';
import { Parser } from '../../../Utils/Parser';
import './Style.css';
import { SimplePagination } from '../../../Components/SimplePagination/SimplePagination';

export const ListByRank: FC = () => {
    const provider = new DataProvider<TBook>('/book', { username: '', password: '' });
    const [data, setData] = useState<TBook[] | null>(null);
    useEffect(() => {
        provider.getAll(1).then((res) => {
            setData(res);
        });
    }, []);

    return (
        <div className='row mt-2'>
            <div className='tab-container container'>

            </div>
        </div>
    );
};
