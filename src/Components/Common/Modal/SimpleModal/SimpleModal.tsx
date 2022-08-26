import { CSSProperties, FC, useEffect, useState } from 'react';
import { ModalProps, TStyle } from './Type';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { closeBGStyle, closeModalStyle, openBGStyle, openModalStyle } from './Utils';

export const SimpleModal: FC<ModalProps> = (props) => {
    const { close, className, children, state } = props;
    const [style, setStyle] = useState<TStyle>({
        modal: closeModalStyle,
        background: closeBGStyle,
    });
    const modalClassName: string = 'simpleModal '.concat(className || '');

    useEffect(() => {
        if (state) {
            setStyle({ modal: openModalStyle, background: openBGStyle });
        } else {
            setStyle({ modal: closeModalStyle, background: closeBGStyle });
        }
    }, [state]);

    return (
        <div className='simpleModal-container'>
            {state && (
                <div style={style.background} onClick={close} className='simpleModal-bg'></div>
            )}
            <div style={style.modal} className={modalClassName}>
                <i className='simpleModal--quit-button bi bi-x-circle' onClick={close}></i>
                <div className='container'>{children}</div>
            </div>
        </div>
    );
};
