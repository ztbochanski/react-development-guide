import React from "react";
import StripeCheckout from "react-stripe-checkout";

import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HI2adIBhP38RLDgjNXQqnzw0te8C0C9Vgb5fPQ1y4KAnlBTAn28q2vlT9HEbIB6c6cHh5ovKENGlndq2i54sA3R00TzIJJSiq";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="TAGGART BURBERRY"
      billingAddress
      shippingAddress
      image="../../assets/paw-print.png"
      description={`your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
