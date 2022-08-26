import React, { FC } from 'react';
import { ISnackbarProps } from './SnackbarInterface';
import './Snackbar.css';

export const Snackbar: FC<ISnackbarProps> = (props) => {
    const { label, open, type, className, onClose } = props;

    return (
        <div
            style={{ display: !open ? 'none' : 'inherit' }}
            className={'snackbar g-ai-center sb__' + type + ' ' + className + (open && open && ' sb-open')}
        >
            <div className="g-w-100 g-ai-center g-jc-between">
                <div className="g-ml-1">
                    <p>{label}</p>
                </div>
                <div onClick={onClose} className="g-pr sb--icon-container g-col-2 g-ai-center g-jc-center">
                    <p className="g-center-absolute-real g-title bi bi-x"></p>
                </div>
            </div>
        </div>
    );
};
