import { TMenu } from '../../../type';

export type TSbLabel = {
    state: boolean;
    label: string;
    icon: string;
    setMenu: (e: TMenu) => void;
    menu: TMenu;
};

export type TSideBar = {
    state: boolean;
    toggle: () => void;
    menu: TMenu;
    setMenu: (e: TMenu) => void;
};
