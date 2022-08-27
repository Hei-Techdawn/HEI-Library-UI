import { CSSProperties, FC } from 'react';
import { TSbLabel } from './Types';
import { TMenu } from '../../../type';

export const Label: FC<TSbLabel> = ({ state, label, icon, setMenu, menu }) => {
    const handleClick = () => {
        if (label === 'Classement') {
            setMenu(TMenu.RANK);
        } else if (label === 'Livres') {
            setMenu(TMenu.BOOKS);
        } else if (label === 'Historique') {
            setMenu(TMenu.HISTORY);
        } else {
            setMenu(TMenu.ADD);
        }
    };

    const style: CSSProperties = { background: menu === label ? 'rgba(0,0,0,0.2)' : 'transparent' };
    return (
        <div
            style={style}
            onClick={handleClick}
            className={'sb-icon-container ' + (menu === label && 'active')}
        >
            <p className={'fa fs-5 fa-' + icon}></p>
            {state && (
                <div className='w-75'>
                    <p className='fs-5'>{label}</p>
                </div>
            )}
        </div>
    );
};
