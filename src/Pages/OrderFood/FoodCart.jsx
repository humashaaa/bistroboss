import { useNavigate } from "react-router-dom";
import useAuth from "../../useAuth/useAuth";
import toast from "react-hot-toast";
import useAxiosSequre from "../../useAxiosSequre/useAxiosSequre";
import useCart from "../../useCart/useCart";

const FoodCart = ({item}) => {
  const {user} = useAuth()
  const navigate = useNavigate()
  const axiosSequre = useAxiosSequre()
  const [, refetch] = useCart()
      const {name, image, recipe, price, _id} = item
    const handleAddItem =() =>{
      if(user && user.email){
        // food item database e pathabo
        const cartItem = {
          menuId : _id,
          email : user.email,
          name,
          image,
          price
        }

        axiosSequre.post('/carts', cartItem)
        .then(res =>{
          console.log(res.data);
          if(res.data.insertedId){
            toast.success(`${name} added to your cart`)
          }
          // refetch the cart item to update cart count
          refetch()
        })

      }
      else{
        navigate('/login')
        toast.error('you have to login first')
      }

    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="w-96 h-80" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <p> price: {price}</p>
    <div className="card-actions justify-center">
      <button onClick={handleAddItem} className=" text-black  hover:bg-yellow-300  border-b-2 rounded-xl p-2 border-yellow-600">Add to Card</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default FoodCart;