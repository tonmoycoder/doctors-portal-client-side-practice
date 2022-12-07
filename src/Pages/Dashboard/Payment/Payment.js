import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(
  'pk_test_51M9AC1JuwvDJx01sDEQdCoLfySe5Lpe3acYgjMHZMGWYCf0DJTyEv68kXM0YCD02gcdx8Z9hFUoxcT1yDjAUy8Ue00ofmsSvYq'
);

const Payment = () => {
  const bookingData = useLoaderData();
  // const navigation = useNavigation();
  /* if (navigation.state === 'loading') {
    return <Loader></Loader>;
  } */
  console.log('bookings data :', bookingData);
  const { treatment, price, appointmentDate, slot } = bookingData;
  return (
    <div>
      <h3 className="text-3xl">payment for {treatment}</h3>
      <p>
        Please pay ${price} for your application on {appointmentDate} at {slot}
      </p>
      <div className="my-5 ml-6">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm bookingData={bookingData} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
