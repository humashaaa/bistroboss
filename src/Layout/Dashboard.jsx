import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
       <div className="flex">
        {/* dashboard side bar */}
         <div className="W-64 min-h-screen bg-orange-400">
           <ul className="menu">
            <li><NavLink to='/dashboard/cart'>My Cart</NavLink></li>
            <li><NavLink to='/dashboard/userHome'>User Home</NavLink></li>
            <li><NavLink to='/dashboard/reservation'>Reservation</NavLink></li>
            <li><NavLink to='/dashboard/myItem'>My Added Item</NavLink></li>
           </ul>
           <div className="divider"></div>
           <div>
            <ul>
            <li><NavLink to='/'>Home</NavLink></li>
 
            </ul>
           </div>
            
        </div>
        {/* dashboard content */}
        <div className="flex-1">
        <Outlet></Outlet>
        </div>
       </div>
    );
};

export default Dashboard;