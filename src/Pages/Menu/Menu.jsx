import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import MenuCategory from "./MenuCategory";
import useMenu from "../../Hooks/useMenu";
import { Link } from "react-router-dom";

const Menu = ({title}) => {
    const [menu] = useMenu()
    const popularMenu = menu.filter(item=> item.category === "popular")
    // const [menu , setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMenu(data)
    //       console.log(data);
    //     })
    // },[])
  return (
    <div className="p-16">
      <Helmet>
        <title>BistroBoss-menu</title>
      </Helmet>
      <div>
        <h1 className="text-4xl font-extrabold text-center uppercase">Popular menu</h1>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {
            popularMenu.map(item=> <MenuCategory key={item._id}
            item={item}></MenuCategory>)
        }
         <Link
        //  to={`/orderFood/${title}`}
          className="bg-yellow-700 text-white rounded-xl p-3 mt-5"> View All</Link>
      </div>

      <div>
        <h1 className="text-4xl font-extrabold text-center uppercase">salad</h1>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {
            menu
            .filter(item=> item.category === "salad")
            .map(item=> <MenuCategory key={item._id}
            item={item}></MenuCategory>)
        }
         <Link className="bg-yellow-700 text-white rounded-xl p-3 mt-5"> View All</Link>
      </div>


      <div>
        <h1 className="text-4xl font-extrabold text-center uppercase">pizza</h1>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {
            menu
            .filter(item=> item.category === "pizza")
            .map(item=> <MenuCategory key={item._id}
            item={item}></MenuCategory>)
        }
         <Link className="bg-yellow-700 text-white rounded-xl p-3 mt-5"> View All</Link>
      </div>


    </div>
  );
};

export default Menu;
