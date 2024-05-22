import axios from "axios";

 const  axiosSequre = axios.create({
    baseURL : 'http://localhost:5000'


})
const useAxiosSequre = () => {
    return axiosSequre
};

export default useAxiosSequre;