import { ReactNode, CSSProperties } from 'react';

export type ModalProps = {
    className?: string;
    onClose: () => void;
    children: ReactNode;
    status: boolean;
};

export type TStyle = {
    background: CSSProperties;
    modal: CSSProperties;
};
