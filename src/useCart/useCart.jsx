import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../useAxiosSequre/useAxiosSequre";
import useAuth from "../useAuth/useAuth";

const useCart = () => {
    const {user} = useAuth()
    const axiosSequre = useAxiosSequre()
  const {data: carts=[], refetch } = useQuery({
    queryKey: ['carts' ,user?.email],
    queryFn: async()=>{
        const res = await axiosSequre.get(`/carts?email=${user?.email}`)
        return res.data

    }


  })
  return [carts, refetch]
};

export default useCart;