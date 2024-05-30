import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../useAuth/useAuth";
import useAxiosSequre from "../../../useAxiosSequre/useAxiosSequre";

const PaymentHistory = () => {
    const {user} = useAuth()
    const axiosSequre = useAxiosSequre()

    // tanstack query
    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async()=>{
            const res = await axiosSequre.get(`/payments/${user?.email}`)
            return res.data
        }
    })

    return (
        <div>
            <h2>Total payments : {payments.length}</h2>
            
        </div>
    );
};

export default PaymentHistory;