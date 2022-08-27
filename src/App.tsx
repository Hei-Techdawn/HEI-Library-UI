import { FC, useEffect, useState } from 'react';
import { useToggle } from './Utils/useToggle';
import { TMenu } from './type';
import './style.css';
import { BookManagement } from './Pages/Manager/BookManagement/BookManagement';
import { Snackbar } from './Components/Common/Snackbar/Snackbar';
import { useSnackBar } from './Components/Common/Snackbar/Utils';
import { SimpleModal } from './Components/Common/Modal/SimpleModal/SimpleModal';
import { useModal } from './Components/Common/Modal/SimpleModal/Utils';
import { PrincipalContext } from './Providers/Context/ContextProvider';
import { TContextPrincipal } from './Providers/Context/Types';
import { ListByRank } from './Pages/Common/ListByRank/ListByRank';
import { SimpleLogin } from './Components/SimpleLogin/SimpleLogin';
import { SideBar } from './Components/Common/SideBar/SideBar';
import { Menu } from './Components/Common/Menu/Menu';
import { Add } from './Pages/Manager/Add/Add';

export const App: FC = () => {
    const toggle = useToggle();
    const snackBar = useSnackBar();
    const modal = useModal();
    const [menu, setMenu] = useState<TMenu>(TMenu.LOGIN);

    const contextData: TContextPrincipal = {
        openModal: modal.open,
        openSnackBar: snackBar.open,
    };

    useEffect(() => {
        if (localStorage.getItem('password')) {
            setMenu(TMenu.RANK);
        }
    }, []);

    return (
        <PrincipalContext.Provider value={contextData}>
            <div className='app-container'>
                <SimpleModal {...modal.modal}>{modal.modal.children}</SimpleModal>
                <div
                    style={{ width: toggle.state ? '75vw' : '90vw' }}
                    className='principal-container mt-5'
                >
                    {menu === TMenu.BOOKS && <BookManagement />}
                    {menu === TMenu.RANK && <ListByRank />}
                    {menu === TMenu.ADD && <Add />}
                    {menu === TMenu.LOGIN && (
                        <SimpleLogin
                            title='Login'
                            onSubmit={() => {
                                setMenu(TMenu.RANK);
                            }}
                        />
                    )}
                </div>
                {menu !== TMenu.LOGIN && (
                    <>
                        <SideBar menu={menu} setMenu={setMenu} {...toggle} />
                        <Menu setMenu={setMenu} {...toggle} />
                    </>
                )}
                <Snackbar {...snackBar.snackState} close={snackBar.close} />
            </div>
        </PrincipalContext.Provider>
    );
};
