import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    // for request 
    axiosSecure.interceptors.request.use(config => {
        const token = localStorage.getItem('token');
        config.headers.authorization = `Berarer ${token}`;
        return config;
    }, error => {
        return Promise.reject(error);
    });

    // for responce 
    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        console.log(status);
        return Promise.reject(error);
    });
    return axiosSecure;
};

export default useAxiosSecure;