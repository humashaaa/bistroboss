import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from '../useAuth/useAuth'

const axiosSequre = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSequre = () => {
    const navigate = useNavigate()
    const {logOut} = useAuth()
    // request interceptors to add authorization header for every sequre call to the api
  axiosSequre.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token')
    // console.log('request stopped by interceptor', token);
    config.headers.authorization = `Bearer ${token}`
    return config;
  },
  function(error){
    return Promise.reject(error)
  }
);

// interceptors 401 and 403 status

axiosSequre.interceptors.response.use(function (response) {
    return response;
  },  async(error)=> {
    const status = error.response.status
    // console.log('status error in the interceptor', status);
    // for 401 and 403 log out the user 
    if(status === 401 || status === 403){
        await logOut()

        navigate('/login')

    }
    return Promise.reject(error);
  });



  return axiosSequre;
};

export default useAxiosSequre;
