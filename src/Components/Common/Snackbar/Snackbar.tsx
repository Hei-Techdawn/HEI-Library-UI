import React, { FC } from 'react';
import { ISnackbarProps } from './SnackbarInterface';
import './Snackbar.css';

export const Snackbar: FC<ISnackbarProps> = (props) => {
    const { label, open, type, className, close } = props;

    return (
        <div
            style={{ display: !open ? 'none' : 'inherit' }}
            className={'snackbar g-ai-center sb__' + type + ' ' + className + (open && ' sb-open')}
        >
            <div className="pr d-flex justify-content-between">
                <div className="col-10 sb-text p-1">
                    <p>{label}</p>
                </div>
                <div onClick={close} className="d-flex justify-content-center align-items-center sb--icon-container col-2">
                    <p className="sb--icon fs-2 bi bi-x"></p>
                </div>
            </div>
        </div>
    );
};
