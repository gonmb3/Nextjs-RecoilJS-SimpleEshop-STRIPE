import React from "react";
import Layout from "../components/Layout";
import { useRecoilState } from "recoil";
import { cartState } from "../atoms-recoil/cartState";
import CartList from "@/components/CartList";

import axios from "axios";

const Cart = () => {
  const [cartItem, setCartItem] = useRecoilState(cartState);

  const totalPrice = () => {
    let total = 0;
    cartItem.forEach((item) => (total += item.price * item.quantity));

    return total;
  };

  const handleCheckout = async () => {
   await axios.post("/api/checkout_sessions", { cartItem })
    .then((res) => {
      console.log(res);
      window.location = res.data.sessionURL;
    })
    .catch(err => console.log(err))
    
  }

  return (
    <Layout>
      <div className="container mx-auto">
        {cartItem.length <= 0 ? (
          <h1 className="text-center flex justify-center items-center text-5xl mt-5">
            Empty Cart
          </h1>
        ) : (
          cartItem.map((item) => <CartList key={item.id} item={item} />)
        )}

        {cartItem.length > 0 && (
          <div className="max-w-[800px] mx-auto mt-4">
            <h2 className="text-right text-3xl font-bold">
              Total: $ {totalPrice()}
            </h2>

            <button
              onClick={handleCheckout}
              className="text-right bg-red-500 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-600"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
