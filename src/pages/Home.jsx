
import Header from '../components/Header';
import styles from './Home.module.css';

export default function Home({ theme, setTheme }) {
    return (
        <>
        <Header theme={theme} setTheme={setTheme}></Header>
        <main className={styles['main']} data-theme={theme ? 'dark':'light'}>
        <div className={styles['container']}>
            <div className={styles['top']}>
                <div className={styles['top-content']}>
                    <h1 className={styles['title']}>
                        A website for <span>CYBERSECURITY</span> lovers
                    </h1>
                    <p className={styles['subtitle']}>
                        Learn, practice, and master cybersecurity skills with our comprehensive resources
                    </p>
                </div>
            </div>
        </div>
        </main>
        </>
    );
}