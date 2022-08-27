import { CSSProperties, ReactNode, useState } from 'react';
import { ModalProps, TUseModal } from './Type';

export const closeModalStyle: CSSProperties = {
    top: '-100%',
};

export const openModalStyle: CSSProperties = {
    top: '10%',
};

export const closeBGStyle = {
    top: '100%',
    opacity: 0,
};

export const openBGStyle = {
    top: 0,
    opacity: 1,
};

export const modalInitialState: TUseModal = {
    children: undefined,
    state: false,
};

export const useModal = () => {
    const [modal, setModal] = useState<TUseModal>(modalInitialState);
    const close = () => {
        setModal((e) => ({ ...e, children: undefined, state: false }));
    };
    const open = (children: ReactNode) => {
        setModal((e) => ({ ...e, children, state: true, onClose: close }));
    };
    return { modal: { ...modal, close }, open };
};
