import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ChekoutForm from "./ChekoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    return (
        <div>
            <h1 className="text-center text-4xl text-teal-700 mt-8 font-semibold ">.......Make Your Payment.......</h1> 
      <div className="mt-10">
        <Elements stripe={stripePromise}>
           <ChekoutForm></ChekoutForm>
        </Elements>
      </div>
        
        </div>
    );
};

export default Payment;