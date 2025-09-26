import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import styles from './Doc.module.css'


export default function Docs({ theme, setTheme }){

    const navigate = useNavigate('');

    return(
        <>
        <Header theme={theme} setTheme={setTheme}></Header>
        <main className={styles['main']} data-theme={theme ? 'dark':'light'}>
        <div className={styles['container']}>
            <div className={styles['title']}>
                <h1>Documents</h1>
            </div>
            <div className={styles['doc-container']}>
                <button className={styles['doc']} onClick={() => navigate('/docs/network')}>
                    <div className={styles['doc-img-div']}>
                        <img src="#" alt="img" className={styles['img']}/>
                    </div>
                    <div className={styles['doc-details']}>
                        <div className={styles['doc-title']}>
                            <h1>Network</h1>
                        </div>
                        <div className={styles['doc-sub']}>

                        </div>
                    </div> 
                </button>
            </div>
        </div>
        </main>
        </>
    );
}

