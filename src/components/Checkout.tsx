"use client";
import getStripePromise from "@/lib/stripe";
import { Button } from "./ui/button";

const products = [
  {
    product: 1,
    name: "Brushed Raglan Sweatshirt",
    price: 400,
    quantity: 1,
  },
  {
    product: 2,
    name: "Cameryn Sash Tie Dress",
    price: 600,
    quantity: 1,
  },
  {
    product: 3,
    name: "Flex Push Button Bomber",
    price: 1000,
    quantity: 1,
  },
];

const StripeCheckoutButton = () => {
  const handleCheckout = async () => {
    const stripe = await getStripePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };
  return (
    <div>
      <Button
        onClick={handleCheckout}
        className="bg-green-600 hover:bg-green-600/90 text-white rounded-sm"
      >
        Checkout
      </Button>
    </div>
  );
};

export default StripeCheckoutButton;
