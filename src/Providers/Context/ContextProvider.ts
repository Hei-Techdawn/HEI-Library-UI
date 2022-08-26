import {createContext, ReactNode} from 'react';
import { TContextPrincipal } from './Types';
import { ESbType } from '../../Components/Common/Snackbar/SnackbarInterface';

export const initialContext: TContextPrincipal = {
    openModal(children: ReactNode): void {},
    openSnackBar(label: string, type: ESbType): void {},
};

export const PrincipalContext = createContext<TContextPrincipal>(initialContext);