import { useState } from 'react';
import Header from '../../../components/Header';
import styles from './Network.module.css';
import { Route, Routes } from 'react-router-dom';
import Protocols from './Protocols';

export default function Network({ theme, setTheme }){

    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    return(
        <>
        <Header theme={theme} setTheme={setTheme}></Header>
        <main className={styles['main']} data-theme={theme ? 'dark':'light'}>
        <div className={styles['container']}>
            <menu className={styles['mobile-menu']}>
                <div className={styles['mobile-menu-top']}>
                    <button className={styles['mobile-menu-arrow-btn']} onClick={() => setOpenMobileMenu(!openMobileMenu)}>
                        <i className={`${styles['arrow']} bi ${openMobileMenu ? 'bi-chevron-down':'bi-chevron-up'}`}></i>
                        <div className={styles['mobile-menu-title']}>
                            Network Articles
                        </div>
                    </button>
                </div>
                <div className={openMobileMenu ? styles['articles-list-open']: styles['articles-list-close']}>
                    
                </div>
            </menu>
            <menu className={styles['menu']}>
                <header className={styles['menu-top']}>
                    Network Articles
                </header>
                <aside>

                </aside>
            </menu>
            <Protocols theme={theme}></Protocols>
        </div>
        </main>
        </>
    );

}

