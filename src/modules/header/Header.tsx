import { useState } from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const Header = () => {

    const [isListCollapsed, setIsListCollapsed] = useState(true);
    const handleClick = () => setIsListCollapsed(!isListCollapsed);

    return (
        <header>
            <div className='shadow-sm bg-white rounded'>
                <nav className={clsx('navbar navbar-expand-sm navbar-light gb-light position-sticky', styles.header)}>
                   <div className={clsx(styles.header__mobileMenu)}>
                        <Link className={clsx('navbar-brand', styles.logo)} to="/">
                            <img src={'images/logo_3.png'} alt='logo_natanaelum'/>
                        </Link>
                        <button className={`${isListCollapsed === false ? 'collapsed' : ''} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#mobile-menu" 
                            aria-controls="mobile-menu" aria-expanded={isListCollapsed} aria-label="Toggle navigation" onClick={handleClick}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className={`${isListCollapsed === false ? '' : 'show'} collapse navbar-collapse`} id='mobile-menu'>
                        <ul className='nav-list navbar nav w-100'>
                            <li className='nav-item'>
                                <Link to="#" onClick={handleClick}>
                                    <div>
                                        Strona główna
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="https://ipip.info.pl" target="_blank" rel='noreferrer' onClick={handleClick}>
                                    <div>
                                        IPIP
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="#" onClick={handleClick}>
                                    <div>
                                        O nas
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='#' onClick={handleClick}>
                                    <div>
                                        Projekty
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="#" onClick={handleClick}>
                                    <div>
                                        Szkolenia
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </Link>
                            </li>
                            <li className='m-0 nav-item'>
                                <Link to="#" onClick={handleClick}>
                                    <div>
                                        Poradnia
                                    </div>
                                    <p className={clsx(styles.dot, 'rounded-circle')}></p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
};

export default Header;