import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './Signup.module.css';

export default function Login({ theme, setTheme }) {

    const navigate = useNavigate('');
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(e){
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            console.log('Signup data:', formData);
            setIsLoading(false);
            // Navigate to login or dashboard after successful signup
            navigate('/login');
        }, 1500);
    };

    return (
        <>
        <main className={styles['main']} data-theme={theme ? 'dark':'light'}>
            <header className={styles['header']}>
                <div className={styles['tools']}>
                    <button className={styles['tool']} onClick={() => navigate(-1)}>
                        <i className={`${styles['icon']} bi bi-arrow-left`}></i>
                    </button>
                    <button className={styles['tool']} onClick={() => setTheme(!theme)}>
                        <i className={`${styles['icon']} bi ${theme ? 'bi-sun':'bi-moon'}`}></i>
                    </button>
                    <button className={styles['tool']}>
                        <i className={`${styles['icon']} bi bi-github`}></i>
                    </button>
                </div>
            </header>
                <div className={styles['container']}>
                    <div className={styles['signup-container']}>
                        <div className={styles['signup-header']}>
                            <h1>LOGIN</h1>
                        </div>
                        <div className={styles['form-container']}>
                            <form onSubmit={handleSubmit} className={styles['form']}>
                                <div className={styles['input-group']}>
                                    <div className={styles['input-icon']}>
                                        <i className="bi bi-person"></i>
                                    </div>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles['input-group']}>
                                    <div className={styles['input-icon']}>
                                        <i className="bi bi-shield-lock"></i>
                                    </div>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button 
                                    type="submit" 
                                    className={styles['submit-btn']}
                                    disabled={isLoading}>
                                    {isLoading ? (
                                        <>
                                        <i className="bi bi-arrow-repeat"></i> SENDING...
                                        </>
                                    ) : (
                                        <>
                                        <i className="bi bi-shield-check"></i> SIGNUP
                                        </>
                                    )}
                                </button>
                                <div className={styles['divider']}>
                                    <span>OR</span>
                                </div>
                                <div className={styles['social-login']}>
                                    <button type="button" className={styles['social-btn']}>
                                        <i className="bi bi-github"></i> GITHUB
                                    </button>
                                    <button type="button" className={styles['social-btn']}>
                                        <i className="bi bi-google"></i> GOOGLE
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className={styles['signup-footer']}>
                            <p>Already have an account? <span onClick={() => navigate('/signup')}>Signup</span></p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}