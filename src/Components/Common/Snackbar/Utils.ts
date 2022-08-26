import { ESbType, ISnackbarProps } from './SnackbarInterface';
import { useState } from 'react';

export const sbInitialState: ISnackbarProps = {
    type: ESbType.MESSAGE,
    close: () => {},
    open: false,
    label: '',
};

export const useSnackBar = () => {
    const [snackState, setState] = useState<ISnackbarProps>(sbInitialState);
    const close = () => setState((e) => ({ ...e, open: false }));
    const open = (label: string, type: ESbType) =>
        setState((e) => ({ ...e, label, type, open: true }));
    return { snackState, close, open };
};
