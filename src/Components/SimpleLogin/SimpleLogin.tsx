import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { TAuth, TSimpleLoginProps, TUP } from './Types';
import { en, fr, verifyPassword, verifyUsername } from './Utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

export const SimpleLogin: FC<TSimpleLoginProps> = (props) => {
    const { className, title, onSubmit, language } = props;
    const [state, setState] = useState<TAuth>({ username: '', password: '' });
    const [style, setStyle] = useState<TAuth>({ username: '', password: '' });
    const labels: string[] = language !== undefined ? (language === 'fr' ? fr : en) : en;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (verifyUsername(state.username) && verifyPassword(state.password)) {
            localStorage.setItem('username', state.username);
            localStorage.setItem('password', state.password);
            onSubmit(state.username, state.password);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target !== null) {
            setState((prevState) => ({ ...prevState, [event.target.name]: event.target.value }));
        }
    };

    const handleFocus = (e: TUP) => {
        setStyle((prevState) => ({ ...prevState, [e]: '' }));
    };

    const handleBlur = (e: TUP) => {
        if (state[e].trim().length > 0) {
            if (
                !(
                    (e === 'username' && verifyUsername(state[e])) ||
                    (e === 'password' && verifyPassword(state[e]))
                )
            ) {
                setStyle((prevState) => ({ ...prevState, [e]: 'login-input-error' }));
            } else {
                setStyle((prevState) => ({ ...prevState, [e]: 'login-input-success' }));
            }
        }
    };

    return (
        <div className={className}>
            <form className='loginForm' onSubmit={handleSubmit}>
                <h1 className='display-6'>{title}</h1>
                <div className='input-group mb-3'>
                    <label>
                        Identifiant :
                        <input
                            onBlur={() => handleBlur('username')}
                            onFocus={() => handleFocus('username')}
                            value={state.username}
                            name='username'
                            type='text'
                            className={'input form-control ' + style.username}
                            placeholder={labels[0]}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className='input-group mb-3'>
                    <label>
                        Mot de passe :
                        <input
                            onBlur={() => handleBlur('password')}
                            onFocus={() => handleFocus('password')}
                            className={'input form-control ' + style.password}
                            onChange={handleChange}
                            value={state.password}
                            name='password'
                            type='password'
                            placeholder={labels[1]}
                        />
                    </label>
                </div>
                <div className='input-group mb-3'>
                    <button type='submit' className='btn btn-outline-dark'>
                        {labels[2]}
                    </button>
                </div>
            </form>
        </div>
    );
};
