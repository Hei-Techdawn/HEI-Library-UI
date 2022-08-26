import { CSSProperties, FC, useEffect, useState } from 'react';
import './style.css';
import {Label} from "./SbLabel";
import {TSideBar} from "./Types";



export const SideBar: FC<TSideBar> = (props) => {
    const { state } = props;
    const style: CSSProperties = { width: state ? '15rem' : '4rem' };

    return (
        <div className='sb-container text-light'>
            <div
                style={style}
                className='align-content-around d-flex align-items-start flex-column pt-5 sb-container-2'
            >
                <Label {...props} label='Classement' icon='ranking-star' />
                <Label {...props} label='Livres' icon='book' />
                <Label {...props} label='Historique' icon='clock-rotate-left' />
            </div>
        </div>
    );
};
