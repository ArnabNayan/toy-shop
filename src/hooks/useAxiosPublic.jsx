import axios from "axios";

const axiosPublic = axios.create({
    // baseURL:'https://toy-shop-server-1bae.onrender.com'
    baseURL:'http://localhost:5000/'
})
const useAxiosPublic = () => {
   return axiosPublic
};

export default useAxiosPublic;