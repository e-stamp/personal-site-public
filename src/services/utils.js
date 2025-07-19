import axios from 'axios';

const apiLink = import.meta.env.VITE_API_LINK

export const createApiClient = () => {
    const client = axios.create({
        baseURL: apiLink
    });

    client.interceptors.request.use(config => {
        config.headers = {
            ...config.headers,
        }
        return config;
    });
    
    return client;
}