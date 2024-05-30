import { NavLink, Outlet } from "react-router-dom";
import useCart from "../useCart/useCart";
import useAdmin from "../Hooks/useAdmin";
import { FaBook, FaCalendar, FaEnvelope, FaList, FaUsers, FaUtensils } from "react-icons/fa6";

const Dashboard = () => {
   const [carts] = useCart()
   // TODO: get isAdmin value from the db
   // const isAdmin = true;
   const [isAdmin] = useAdmin()

   
    return (

      <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
          <ul className="menu p-4">
              {
                  isAdmin ? <>
                      <li>
                          <NavLink to="/dashboard/adminHome">
                              Admin Home</NavLink>
                      </li>
                      <li>
                          <NavLink to="/dashboard/addItems">
                              <FaUtensils></FaUtensils>
                              Add Items</NavLink>
                      </li>
                      <li>
                          <NavLink to="/dashboard/manageItems">
                              <FaList></FaList>
                              Manage Items</NavLink>
                      </li>
                      <li>
                          <NavLink to="/dashboard/bookings">
                              <FaBook></FaBook>
                              Manage Bookings</NavLink>
                      </li>
                      <li>
                          <NavLink to="/dashboard/users">
                              <FaUsers></FaUsers>
                              All Users</NavLink>
                      </li>
                  </>
                      :
                      <>
                          <li>
                              <NavLink to="/dashboard/userHome">
                                  User Home</NavLink>
                          </li>
                          <li>
                              <NavLink to="/dashboard/reservation">
                                  <FaCalendar></FaCalendar>
                                  Reservation</NavLink>
                          </li>
                          <li>
                              <NavLink to="/dashboard/cart">
                                  My Cart ({carts.length})</NavLink>
                          </li>
                          <li>
                              <NavLink to="/dashboard/paymentHistory">
                                  <FaList></FaList>
                                  Payment History</NavLink>
                          </li>
                      </>
              }
              {/* shared nav links */}
              <div className="divider"></div>
              <li>
                  <NavLink to="/">
                    
                      Home</NavLink>
              </li>
              <li>
                  <NavLink to="/order/salad">
                      
                      Menu</NavLink>
              </li>
              <li>
                  <NavLink to="/order/contact">
                      <FaEnvelope></FaEnvelope>
                      Contact</NavLink>
              </li>
          </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
          <Outlet></Outlet>
      </div>
  </div>



      //  <div className="flex">
      //   {/* dashboard side bar */}
      //    <div className="W-64 min-h-screen bg-orange-400">
      //      <ul className="menu">
      //       {
      //          isAdmin?<>
      //     <li><NavLink to='/dashboard/adminHome'>Admin Home</NavLink></li>
      //     <li><NavLink to='/dashboard/addItems'>Add Items</NavLink></li>
      //     <li><NavLink to='/dashboard/manageItems'>Manage Items</NavLink></li>
      //     <li><NavLink to='/dashboard/bookings'>My Bookings</NavLink></li>

      //     <li><NavLink to='/dashboard/users'>All Users</NavLink></li>
      //     <hr className="mt-8 mb-8" />

      //          </> :
      //          <>
      //          <li><NavLink to='/dashboard/cart'>My Cart</NavLink></li>
      //       <li><NavLink to='/dashboard/userHome'>User Home</NavLink></li>
      //       <li><NavLink to='/dashboard/reservation'>Reservation</NavLink></li>
      //       <li><NavLink to='/dashboard/myItem'>My Added Item</NavLink></li>
      //          </>
      //       }

           
            
      //      </ul>
      //      <div className="divider"></div>
      //      <div>
      //       <ul>
      //       <li><NavLink to='/'>Home</NavLink></li>
          
 
      //       </ul>
      //      </div>
            
      //   </div>
      //   {/* dashboard content */}
      //   <div className="flex-1">
      //   <Outlet></Outlet>
      //   </div>
      //  </div>
    );
};

export default Dashboard;