import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

export const loginWithDiscord = () => {
    window.location.href = 'http://localhost:5000/auth/discord';
};

export const getUser = async () => {
    const response = await API.get('/auth/user');
    return response.data;
};

export const logout = async () => {
    await API.get('/auth/logout');
};
