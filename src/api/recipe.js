import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'

let url = 'http://0e14bcaa1b1e.ngrok.io'; //ngrok server

const instance = axios.create({
    baseURL: url
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;