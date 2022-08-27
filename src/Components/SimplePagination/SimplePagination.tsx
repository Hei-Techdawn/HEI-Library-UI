import { FC } from 'react';
import { TSPProps } from './Types';
import { paginationNumber, rangeOf } from './Utils';
import './Style.css';
import { SPInputMini } from './SPInputMini';

export const SimplePagination: FC<TSPProps> = (props) => {
    const { changePage, lastPage, currentPage } = props;

    const first: boolean = currentPage === 1;
    const last: boolean = currentPage === lastPage;

    const next = () => (lastPage > currentPage ? changePage(currentPage + 1) : {});
    const prev = () => (currentPage !== 1 ? changePage(currentPage - 1) : {});

    return (
        <nav className='simplePagination'>
            <SPInputMini {...props} />
            <ul className='pagination'>
                <li onClick={prev} className={'page-item ' + (first && 'disabled')}>
                    <p className='page-link'>
                        <i className='bi bi-caret-left'></i>
                    </p>
                </li>
                {lastPage <= 3
                    ? rangeOf(lastPage).map((e) => (
                          <li
                              key={e + 'pages'}
                              onClick={() => changePage(e)}
                              className={'page-item ' + (e === currentPage && 'active')}
                          >
                              <p className='page-link'>{e}</p>
                          </li>
                      ))
                    : paginationNumber(currentPage, lastPage).map((e) => (
                          <li
                              key={e + 'pages'}
                              onClick={() => changePage(e)}
                              className={'page-item ' + (e === currentPage && 'active')}
                          >
                              <p className='page-link'>{e}</p>
                          </li>
                      ))}
                <li onClick={next} className={'page-item ' + (last && 'disabled')}>
                    <p className='page-link'>
                        <i className='bi bi-caret-right'></i>
                    </p>
                </li>
            </ul>
        </nav>
    );
};
