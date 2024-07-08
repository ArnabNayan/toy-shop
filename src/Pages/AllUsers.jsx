import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure=useAxiosSecure()

    const {data: users=[],refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleMakeAdmin=user=>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name } is admin!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const handleDeleteUser=user=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            axiosSecure.delete(`users/${user._id}`)
              .then(res=>{
                if(res.data.deletedCount>0){
                    refetch()
                      Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                }
              })
            }
          });   
    }
    console.log(users);
    return (
        <div >
            <div className="flex justify-evenly">
                <h2 className="text-xl lg:text-3xl font-serif">All Users</h2>
                <h2 className="text-xl lg:text-3xl font-serif">Total Users:{users.length}</h2>
            </div>
            <div className="overflow-x-auto">
  <table className="table table-zebra mt-4">
    {/* head */}
    <thead className="bg-teal-600">
      <tr className="text-white">
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user,index)=><tr key={user._id}>
                <th>{index+1}</th>
                <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={user?.photoURL} alt="User avatar" />
                  </div>
                </div>
               
              </div>
            </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                {
                   user.role==='admin'?'Admin':<button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost btn-sm bg-cyan-600">
                    <FaUsers className="text-white"></FaUsers>
                  </button>
                }
                </td>
                <td>
              <button onClick={()=>handleDeleteUser(user)} className="btn btn-ghost btn-sm bg-teal-600">
                <FaTrashAlt className="text-white"></FaTrashAlt>
              </button>
            </td>
              </tr>
           )
        }
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;