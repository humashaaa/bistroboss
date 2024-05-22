import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Root = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
    return (
        <div>
           {noHeaderFooter || <Nav></Nav>}
            <div className='min-h-[calc(100vh-136px)]'>

            <Outlet></Outlet>
            </div>
            {noHeaderFooter ||  <Footer></Footer>}
           
            
        </div>
    );
};

export default Root;