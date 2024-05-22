import axios from "axios";

export const axiosSequreCommon = axios.create({
  baseURL : 'http://localhost:5000' 
})
const useAxiosSequreCommon = () => {
    return axiosSequreCommon;
};

export default useAxiosSequreCommon;