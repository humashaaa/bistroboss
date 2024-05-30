// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosSequreCommon from "../AxiosSequreCommon/useAxiosSequreCommon";

const useMenu = () => {
    const axiosSequreCommon = useAxiosSequreCommon()
    // const [menu , setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMenu(data)
    //     //   console.log(data);
    //     })
    // },[])
    // return [menu]

    // tanstack query
    const {data:menu=[], isLoading, refetch} = useQuery({
        queryKey : ['menu'],
        queryFn: async()=>{
          const res =  await axiosSequreCommon.get('/menu')
          return res.data
        }
    })
    return [menu, isLoading, refetch]
};

export default useMenu;

