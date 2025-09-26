import styles from './Header.module.css'
import logo from './../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function Header({theme, setTheme}){

    const navigate = useNavigate('');

    const [openNav, setOpenNav] = useState(false);

    return(
        <div className={styles['container']} data-theme={theme ? 'dark':'light'}>
            <header className={styles['header']}>
                <button className={styles['logo-btn']} onClick={() => navigate('/')}>
                    <img src={logo} alt="logo" className={styles['logo']}/>
                </button>
                <nav className={styles['nav']}>
                    <button className={styles['nav-btn']} onClick={() => navigate('/docs')}>
                        Documents
                    </button>
                    <button className={styles['nav-btn']} onClick={() => navigate('/about')}>
                        About
                    </button>
                </nav>
                <div className={styles['space']}></div>
                <div className={styles['tools']}>
                    <button className={styles['tool-btn']} onClick={() => setTheme(!theme)}>
                        <i className={`${styles['tool-icon']} bi ${theme ? 'bi-sun':'bi-moon'}`}></i>
                    </button>
                    <button className={styles['tool-btn']}>
                        <i className={`${styles['tool-icon']} bi bi-github`}></i>
                    </button>
                </div>
                <div className={styles['account']}>
                    <button className={styles['signup']} onClick={() => navigate('/signup')}>
                        Signup
                    </button>
                    <button className={styles['signin']} onClick={() => navigate('/login')}>
                        Login
                    </button>
                </div>
                <button className={styles['list-btn']} onClick={() => setOpenNav(!openNav)}>
                    <i className={`${styles['list-icon']} bi ${openNav ? 'bi-x':'bi-list'}`}></i>
                </button>
            </header>
            <nav className={openNav ? styles['mobile-nav-open']:styles['mobile-nav-close']}>
                <button className={styles['mobile-nav-btn']} onClick={() => navigate('/docs')}>
                    Documents
                </button>
                <button className={styles['mobile-nav-btn']} onClick={() => navigate('/about')}>
                    About
                </button>
                <div className={styles['mobile-account']}>
                    <button className={styles['mobile-signup']} onClick={() => navigate('/signup')}>
                        Signup
                    </button>
                    <button className={styles['mobile-signin']} onClick={() => navigate('/login')}>
                        Login
                    </button>
                </div>
            </nav>
        </div>
    );
}