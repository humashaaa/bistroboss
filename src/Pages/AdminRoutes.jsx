import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../useAuth/useAuth";

const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    if(loading || isAdminLoading ) return <span className="loading loading-bars loading-lg"></span>

    if(user && isAdmin) return children
    return <Navigate to='/' state={location.pathname}></Navigate>
};

export default AdminRoutes;