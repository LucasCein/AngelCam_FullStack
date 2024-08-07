// src/components/Login.js
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { getCSRFToken } from '../utils/csrf.js';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';

const Login = () => {
    const [localToken, setLocalToken] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { setToken } = useContext(TokenContext);

    useEffect(() => {
        axios.get('/api/csrf/')
            .then(() => {
                console.log('CSRF token set');
            })
            .catch(error => {
                console.error('Error setting CSRF token:', error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const csrfToken = getCSRFToken();
        const formData = new FormData();
        formData.append('token', localToken);

        axios.post('/api/login/', formData, {
            headers: {
                'X-CSRFToken': csrfToken,
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        })
            .then(response => {
                if (response.data.status === 'success') {
                    setMessage('Login successful!');
                    setToken(localToken);  
                    navigate('/cameras', { state: { cameras: response.data.cameras.results } });
                } else {
                    setMessage('Login failed: ' + response.data.message);
                }
            })
            .catch(error => {
                setMessage('An error occurred: ' + error.message);
            });
    };

    return (
        <div className='flex flex-col items-center my-10'>
            <h1 className='text-3xl font-bold mb-5'>Login</h1>
            <form onSubmit={handleSubmit} className='w-full max-w-sm'>
                <div className='mb-4'>
                    <label htmlFor="token" className='block text-gray-700 text-sm font-bold mb-2'>Personal Access Token:</label>
                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" id="token" value={localToken} onChange={(e) => setLocalToken(e.target.value)} required />
                </div>
                <div className='flex items-center justify-between'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit">Login</button>
                </div>
            </form>
            {message && <p className='text-red-500 text-xs italic mt-4'>{message}</p>}
        </div>
    );
};

export default Login;
