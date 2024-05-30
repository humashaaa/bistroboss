import Swal from "sweetalert2";
import useCart from "../../useCart/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSequre from "../../useAxiosSequre/useAxiosSequre";
import { Link } from "react-router-dom";

const Cart = () => {
  const axiosSequre = useAxiosSequre();
  const [carts, refetch] = useCart();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);
  const myTotal = parseFloat(totalPrice).toFixed(2);

  // delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSequre.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-6xl">My cart</h2>
      <div>
        <h1>total item you added in your cart : {carts.length}</h1>
        <p>total price : {myTotal}</p>
        { carts.length ? <Link to="/dashboard/payment" className="btn btn-primary">
          Pay
        </Link> :
        <button disabled className="btn btn-ghost">pay</button>
        }
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3"></div>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <button className="flex items-center gap-x-2">
                        <span>Price</span>
                      </button>
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Action</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {carts.map((item, index) => (
                    <tr key={item._id}>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {index + 1}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {item.name}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {item.price}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        <button onClick={() => handleDelete(item._id)}>
                          <RiDeleteBin6Line />
                        </button>
                      </td>

                      {/* <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      <Link
                      //  to={`/job/${_id}`}
                        className="btn bg-blue-500 hover:bg-blue-700 text-white">View Details</Link>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
