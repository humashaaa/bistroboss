import { useQuery } from "@tanstack/react-query";
import useAuth from "../../useAuth/useAuth";
import useAxiosSequre from "../../useAxiosSequre/useAxiosSequre";

const AdminHome = () => {
    const {user} = useAuth()
    const axiosSequre = useAxiosSequre()

    // tanstack query
    const {data : stats ={}, isPending} = useQuery({
        queryKey: ['admin-stats'],
        queryFn : async()=>{
            const res = await axiosSequre.get('/admin-stats')
            console.log(res.data);

            return res.data
        }
    })
    return (
        <div>
            <h1>Hi, welcome</h1>
            {
                user.displayName ? user.displayName : 'back' 
            }
            <h1>total users {stats.users}</h1>
            <h1>total orders {stats.orders}</h1>
            <h1> total food item (product) {stats.menuItems}</h1>
            <h1> total revenue ${stats.revenue}</h1>
            
        </div>
    );
};

export default AdminHome;