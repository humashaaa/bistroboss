
import { Link, NavLink } from "react-router-dom";
import useAuth from "../useAuth/useAuth";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../useCart/useCart";
import useAdmin from "../Hooks/useAdmin";

const Nav = () => {

  const { user, logOut}= useAuth()
  const [carts] = useCart()
  const [isAdmin]= useAdmin()



  const navbar = <>
  <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-500 text-xl font-bold" : "font-bold text-xl text-blue-500"
            }
          >
            Home
          </NavLink>
          <NavLink to="/orderFood"className={({ isActive }) =>
              isActive ? "text-red-500 text-xl font-bold" : "font-bold text-xl  text-blue-500"
            }>Oder Food</NavLink>
          <NavLink to="/menu"className={({ isActive }) =>
              isActive ? "text-red-500 text-xl font-bold" : "font-bold text-xl  text-blue-500"
            }>Menu</NavLink>
          <NavLink to="/register"className={({ isActive }) =>
              isActive ? "text-red-500 text-xl font-bold" : "font-bold text-xl  text-blue-500"
            }>Register</NavLink>
          <NavLink to="/dashboard/cart"className={({ isActive }) =>
              isActive ? "text-red-500 text-xl font-bold" : "font-bold text-xl  text-blue-500"
            }><button
             className="btn">
            <FaCartShopping />
            <div className="badge badge-secondary">{carts.length}</div>
          </button></NavLink>


           {
            // user? 'true' : 'false'
            // nested tarnary : 
            // user? arekta condition ? 'double true' : 'one true' : 'false'
           }
           {
            user && isAdmin && <li><NavLink to='/dashboard/adminHome'>Admin Home</NavLink></li>
           }
           {
            user && !isAdmin && <li><NavLink to='/dashboard/userHome'>User Home</NavLink></li>
           }
  </>



  return (
    <div className="navbar bg-black fixed z-10 p-4 bg-opacity-30 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl flex item-center gap-10"
          >
            {navbar}
            
          </ul>
        </div>
        <div className=" flex items-center justify-center gap-1 ml-6 ">
          <Link to="/" className=" font-extrabold md:font-bold text-xl md:text-3xl">
            Bistro Boss
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center gap-10">
          {navbar}
        </ul>
      </div>
      <div className="navbar-end">
      {/* <label className='cursor-pointer grid place-items-center'>
          <input
            type='checkbox'
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label> */}




      {
    user? <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-11 rounded-full">
                <img src={user?.photoURL } />
            </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[50] p-2 shadow bg-blue-200 rounded-box md:w-52 w-20">
            <li>
                <button className="btn btn-sm font-extrabold mb-1  btn-ghost">{user?.displayName||'user name not found'}</button>

            </li>
           <div className="space-y-1 mb-2 flex flex-col">
           {navbar}
           </div>
            
            <li>
                <button
                    onClick={logOut}
                    className="btn btn-sm hover:bg-blue-500  bg-blue-400 text-white">Log out</button>

            </li>
        </ul>
    </div>
        :

         <Link
          className="bg-blue-400 md:w-28 w-15 h-10 text-xl btn hover:bg-blue-500 rounded-2xl  text-white font-bold"
          to="/login"
        >
          Login
        </Link> 

}

       
      </div>
    </div>
  );
};

export default Nav;