import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart,refetch]=useCart()
    const totalPrice=cart.reduce((total,item)=>total+parseInt(item.price),0)
    const axiosSecure=useAxiosSecure()
   
    const handleDelete=id=>{
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
            
            axiosSecure.delete(`carts/${id}`)
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
    return (
        <div>
            <div className="flex justify-evenly">
            <h2 className="text-4xl font-serif ">Total Toy: {cart.length}</h2> 
           <h2 className="text-4xl font-serif ">Total Price: {totalPrice}</h2> 
           {
            cart.length?<Link to='/dashboard/payment'>
            <button className="btn bg-teal-700 text-white">Pay</button>
            </Link>: <button disabled className="btn bg-teal-700 text-white">Pay</button>
           }
            </div>
          
            <div className="overflow-x-auto">
  <table className="table mt-5">
    {/* head */}
    <thead  className="bg-teal-600 ">
      <tr className="text-white">
        <th>
          #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className="bg-slate-100 ">
      {/* row 1 */}
      {
        cart.map((item,index)=><tr key={item._id}>
            <th>
              {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image_url} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
               
              </div>
            </td>
            <td>{item.title}</td>
            <td>
             {item.price}
             
            </td>
            
            <th>
              <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-sm">
                <FaTrashAlt className="text-teal-600"></FaTrashAlt>
              </button>
            </th>
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Cart;