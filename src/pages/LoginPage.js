/*import React, { useState } from 'react';
import { loginUser } from '../api/api';

const LoginPage = ({ setToken }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!username.trim() || !password.trim()) {
            alert('Username and password cannot be empty');
            return;
        }

        setIsLoading(true);
        try {
            const response = await loginUser({ username, password });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                setToken(response.data.token);
                alert('Login successful');
            } else {
                alert('Login failed: No token received');
            }
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            alert('Login failed: ' + (error.response?.data?.message || error.message));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
            </button>
        </form>
    );
};

export default LoginPage;*/






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api';
import '../styles/loginPage.css';

const LoginPage = ({ setToken }) => {
    
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!username.trim() || !password.trim()) {
            alert('Username and password cannot be empty');
            return;
        }

        setIsLoading(true);
        try {
            const response = await loginUser({ username, password });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                setToken(response.data.token);
                alert('Login successful');
                navigate('/dashboard')
            } else {
                alert('Login failed: No token received');
            }
        } catch (error) {
            console.error('Login failed:', error.response?.data || error.message);
            alert('Login failed: ' + (error.response?.data?.message || error.message));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h1 className="login-title">Login</h1>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input-field"
                        required
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                        required
                    />
                </div>
                <button type="submit" disabled={isLoading} className="login-button">
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;

