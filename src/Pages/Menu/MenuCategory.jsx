import { Link } from "react-router-dom";

const MenuCategory = ({item}) => {
    const{name, recipe, price, image}=item
    return (
        <div>
            <div className="flex justify-around">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-20 h-20" src={image}alt="" />
            <div>
                <h1>{name}</h1>
                <p>{recipe}</p>
            </div>
            <p> ${price}</p>
            
        </div>
       
        </div>
    );
};

export default MenuCategory;