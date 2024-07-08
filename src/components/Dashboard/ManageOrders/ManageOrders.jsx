import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const ManageOrders = () => {
    const axiosSecure=useAxiosSecure()
    const queryClient = useQueryClient()
   
    const {data:payments=[]}=useQuery({
        queryKey:['payments'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/payments')
            return res.data;
        }
    })
       // Mutation to update payment status
       const mutation = useMutation({
        mutationFn: async (paymentId) => {
            return axiosSecure.patch(`/payments/${paymentId}`, { status: 'Completed' });
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['payments']);
           
        },
        
          
        
    });
    const handleStatusUpdate = (paymentId) => {
        
        mutation.mutate(paymentId);
    };
    return (
        <div>
         <h1 className="text-center text-xl lg:text-4xl text-teal-700 mt-8 font-semibold ">.......Order Management.......</h1>
         <div className="overflow-x-auto mt-8">
                <table className="table table-zebra">
                    <thead className="bg-teal-600">
                        <tr className="text-white">
                            <th></th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => (
                            <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{payment.email}</td>
                                <td>{payment.price}</td>
                                <td>{payment.transactionId}</td>
                                <td>{payment.date}</td>
                                <td>{payment.status}</td>
                                <td>
                                    <button 
                                        className={`btn ${payment.status === 'Pending' ? 'btn-warning' : 'btn-success'}`}
                                        onClick={() => handleStatusUpdate(payment._id)}
                                        
                                    >
                                        {payment.status === 'Pending' ? 'Pending' : 'Done'}
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

export default ManageOrders;

