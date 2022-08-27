import { CSSProperties } from 'react';

export type TSimpleLoginProps = {
    className?: string;
    title: string;
    onSubmit: (name: string, pass: string) => void;
    language?: 'fr' | 'en';
};

export type TAuth = {
    username: string;
    password: string;
};

export type TUP = 'username' | 'password';
