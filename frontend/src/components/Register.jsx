import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');
    const history = useHistory();

    const { username, password, confirmPassword } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
            const body = JSON.stringify({ username, password });
            const res = await axios.post('/api/register/', body, config);
            console.log(res.data);
            // Redirect to login page after successful registration
            history.push('/login');
        } catch (err) {
            console.error(err.response.data);
            setError(err.response.data.detail);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" placeholder="Username" name="username" value={username} onChange={onChange} required />
                </div>
                <div>
                    <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} required />
                </div>
                <div>
                    <input type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={onChange} required />
                </div>
                {error && <div>{error}</div>}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
