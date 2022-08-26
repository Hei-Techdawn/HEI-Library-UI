import { FC } from 'react';
import { SimpleObject, TableTools } from './Types';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Style.css';

export const SimpleTable: FC<TableTools> = (props) => {
    const { className, data, headerOnClick, elementOnClick } = props;
    const headers = Object.keys(data[0]);
    const thClick = headerOnClick ? headerOnClick : (e: string) => {};
    const trClick = elementOnClick ? elementOnClick : (data: SimpleObject) => {};
    return (
        <div className={"simpleTable-table-container " + className}>
            <table className='simpleTable-table'>
                <thead>
                    <tr>
                        {headers.map((e, k) => (
                            <th
                                onClick={() => {
                                    thClick(e);
                                }}
                                key={k + e + 'header'}
                            >
                                {e}
                            </th>
                        ))}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((inData, dataIndex) => (
                        <tr key={dataIndex + 'trBody'}>
                            {headers.map((inHeader, headIndex) => (
                                <td
                                    key={inHeader + dataIndex + headIndex + 'tdBody'}
                                >
                                    {inData[inHeader]}
                                </td>
                            ))}
                            <td>
                                <i
                                    onClick={() => trClick(inData)}
                                    className='bi bi-box-arrow-up-right'
                                ></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
