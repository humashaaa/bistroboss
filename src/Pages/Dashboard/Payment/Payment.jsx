import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
    return (
        <div>
           <h1>takaaa</h1> 

           <Elements stripe={stripePromise} >
    <CheckoutForm />
  </Elements>
        </div>
    );
};

export default Payment;