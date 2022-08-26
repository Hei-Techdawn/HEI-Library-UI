import { ReactNode, CSSProperties } from 'react';

export type ModalProps = {
    className?: string;
    close: () => void;
    children: ReactNode;
    state: boolean;
};

export type TStyle = {
    background: CSSProperties;
    modal: CSSProperties;
};


export type TUseModal = {
    children?: ReactNode;
    state: boolean;
}