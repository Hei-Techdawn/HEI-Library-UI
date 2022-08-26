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
        <div className='container'>
            <div className='container'>
                <h1 className='display-6'>Historique d'emprunt</h1>
            </div>
            <div className='tab-container container pr d-flex justify-content-center flex-column align-items-center'>
                {data !== null && (
                    <SimpleTable className='lbr-simpleTable' data={Parser.listByRank(data)} />
                )}
                <div className='container pr w-100'>
                    <SimplePagination currentPage={2} lastPage={5} changePage={(e) => {}} />
                </div>
            </div>
        </div>
    );
};
