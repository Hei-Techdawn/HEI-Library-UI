import { FC } from 'react';
import './Style.css';

export const Menu: FC<{state: boolean, toggle: ()=> void}> = ({toggle}) => {
    return (
        <div className='menu-container d-flex align-items-center justify-content-between text-light'>
            <div className="d-flex align-items-center">
                <i onClick={toggle} className='c-pointer fa fa-bars m-3 fs-5'></i>
                <h1 className='fs-4'>Bibliothèque</h1>
            </div>
            <div>
                <i className='c-pointer fa-solid  m-3 fs-5 fa-arrow-right-from-bracket'></i>
            </div>
        </div>
    );
};
