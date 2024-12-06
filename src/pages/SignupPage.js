/*import React, { useState } from 'react';
import { registerUser } from '../api/api';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            alert('Signup successful! Please login.');
        } catch (error) {
            console.error('Signup failed:', error.response?.data || error.message);
            alert('Signup failed');
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <h1>Signup</h1>
            <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="submit">Signup</button>
        </form>
    );
};

export default SignupPage;
*/













import React, { useState } from 'react';
import { registerUser } from '../api/api';
import '../styles/signupPage.css';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            alert('Signup successful! Please login.');
        } catch (error) {
            console.error('Signup failed:', error.response?.data || error.message);
            alert('Signup failed');
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSignup}>
                <h1 className="signup-title">Signup</h1>
                <div className="input-group">
                    <input
                        type="text"
                        name="username"
                        className="input-field"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-group">
                    <input
                        type="password"
                        name="password"
                        className="input-field"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="signup-button">Signup</button>
            </form>
        </div>
    );
};

export default SignupPage;
