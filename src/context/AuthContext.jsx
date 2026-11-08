import { createContext, useState, useContext, useEffect } from 'react';
import api from '../utils/api';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const res = await api.get('/api/auth/me', {
                        headers: { Authorization: `Bearer ${token}` }
                    });
                    setUser(res.data.user);
                } catch (err) {
                    console.error('Auth check failed', err);
                    localStorage.removeItem('token');
                    toast.error('Session expired. Please login again.');
                }
            }
            setLoading(false);
        };
        checkAuth();
    }, []);

    const login = async (username, password) => {
        try {
            const res = await api.post('/api/auth/login', { username, password });
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
            toast.success(`Welcome back, ${res.data.user.username}!`);
            return { success: true };
        } catch (err) {
            const errorMsg = err.response?.data?.error || 'Login failed';
            toast.error(errorMsg);
            return { success: false, error: errorMsg };
        }
    };

    const register = async (username, password) => {
        try {
            const res = await api.post('/api/auth/register', { username, password });
            localStorage.setItem('token', res.data.token);
            setUser(res.data.user);
            toast.success('Registration successful! Welcome to the store.');
            return { success: true };
        } catch (err) {
            const errorMsg = err.response?.data?.error || 'Registration failed';
            toast.error(errorMsg);
            return { success: false, error: errorMsg };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        toast.info('You have been logged out.');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
