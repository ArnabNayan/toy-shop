import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import {  FaJediOrder, FaMoneyBill, FaMotorcycle } from "react-icons/fa";



const UserHome = () => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure()

  const {data:stats=[]}=useQuery({
      queryKey:['user-stats',user?.email],
      queryFn:async ()=>{
        const res=await axiosSecure.get(`/user-stats/${user.email}`)
        return res.data
      }
  })

    return (
        <div>
         
             
             {
              user?.displayName?<h3 className="text-lg lg:text-3xl font-serif font-semibold">Hi, Welcome  <span className="text-lg lg:text-3xl font-serif font-semibold text-teal-600"> {user.displayName}</span></h3> :'Back'
             }

             <div className="stats bg-transparent flex flex-col lg:flex-row  mt-10 gap-5">
  
             <div className="stat bg-green-600 rounded-2xl w-full lg:w-48">
             <div className="stat-figure text-white">
                   <FaMotorcycle className="text-3xl"></FaMotorcycle>
                 </div>
               <div className="stat-title text-white">Total Toys</div>
               <div className="stat-value text-white">{stats.toyItems}</div>
      
             </div>
             
             <div className="stat bg-indigo-600 rounded-2xl w-full lg:w-48">
             <div className="stat-figure text-white">
                   <FaMoneyBill className="text-3xl"></FaMoneyBill>
                 </div>
               <div className="stat-title text-white">Your Total Cost</div>
               <div className="stat-value text-white">{stats.revenue}</div>
           
             </div>
             
             <div className="stat bg-amber-600 rounded-2xl w-full lg:w-48">
             <div className="stat-figure text-white">
                   <FaJediOrder className="text-3xl"></FaJediOrder>
                 </div>
               <div className="stat-title text-white">New Order</div>
               <div className="stat-value text-white">{stats.totalOrders}</div>
             
             </div>
             
           </div>
        <div className="flex flex-col lg:flex-row mt-10 gap-2 ">
          <div className="w-full lg:w-1/2">
          <div className="bg-teal-100 p-5 h-80">
          
          <img className="border border-teal-400 rounded-full w-60 h-60 mx-auto" src={user?.photoURL} alt="" />
          <h2 className="font-serif font-semibold mt-4 text-center text-lg lg:text-3xl">{user?.displayName}</h2>
          </div>
           
          </div>
          <div className="w-full lg:w-1/2 ">
          <div className="bg-green-100 p-5 h-80">
             <h2 className="text-lg lg:text-3xl font-serif font-semibold">Your Activities</h2>
             <div className="flex gap-3 mt-3 font-serif">
             <div className=" text-green-600">
                   <FaMotorcycle className="text-xl"></FaMotorcycle>
                 </div>
               <div className="text-xl text-green-600">Total Toys :</div>
               <div className="text-xl text-green-600">{stats.toyItems}</div>
             </div>
             <div className="flex gap-3 mt-1 font-serif">
             <div className=" text-indigo-600">
                   <FaMoneyBill className="text-xl"></FaMoneyBill>
                 </div>
               <div className="text-xl text-indigo-600">Total Payment :</div>
               <div className="text-xl text-indigo-600">{stats.revenue}</div>
             </div>
             <div className="flex gap-3 mt-1 font-serif">
             <div className=" text-amber-600">
                   <FaJediOrder className="text-xl"></FaJediOrder>
                 </div>
               <div className="text-xl text-amber-600">Orders :</div>
               <div className="text-xl text-amber-600">{stats.totalOrders}</div>
             </div>
           </div>
          </div>

        </div>
        </div>
    );
};

export default UserHome;