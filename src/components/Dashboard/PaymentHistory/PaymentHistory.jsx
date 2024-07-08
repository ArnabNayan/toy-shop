import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
    const {user}=useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:payments=[]}=useQuery({
        queryKey:['payments',user.email],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
           <h2 className="text-lg lg:text-3xl font-serif font-semibold">Total Payments:{payments.length}</h2> 
           <div className="overflow-x-auto">
  <table className="table table-zebra mt-4">
    {/* head */}
    <thead className="bg-teal-600">
      <tr className="text-white">
        <th></th>
        <th>price</th>
        <th>Transaction Id</th>
        <td>Date</td>
        <th>Status</th>
       
      </tr>
    </thead>
    <tbody>
        {
            payments.map((payment,index)=><tr key={payment._id}>
                <th>{index+1}</th>
                <td>{payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.date}</td>
                 <td> {payment.status}</td>
              </tr>
           )
        }
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;