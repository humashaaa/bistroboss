import { useQuery } from "@tanstack/react-query";
import useAxiosSequre from "../../useAxiosSequre/useAxiosSequre";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa6";
import toast from "react-hot-toast";

const AllUsers = () => {
  const axiosSequre = useAxiosSequre();
  //    tanstack query to fetch data
  const {
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSequre.get("/users");
      return res.data;
    },
  });

//   make admin
const handleMakeAdmin =  user=>{
    axiosSequre.patch(`users/admin/${user._id}`)
    .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount >0){
            refetch()
            toast.success('admin added successfully')
        }
    })
}

  // delete user
  const handleDeleteUser = (user) => {
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

        axiosSequre.delete(`/users/${user._id}`).then((res) => {
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
      <div className="flex justify-evenly items-center font-bold text-3xl">
        <h1>All users</h1>
        <h1>Total user {users.length}</h1>
      </div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td> { user.role === 'admin' ? 'Admin': <button onClick={() => handleMakeAdmin(user)}>
                    <FaUser className="bg-yellow-500 text-2xl text-white" />
                  </button>}
                  </td>
                <td>
                  <button onClick={() => handleDeleteUser(user)}>
                    <RiDeleteBin6Line className="bg-red-500 text-3xl text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
