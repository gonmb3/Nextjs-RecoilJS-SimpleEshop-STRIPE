import Image from "next/image";
import React from "react";

const CartList = ({ item }) => {
  const { name, image, quantity, price } = item;

  return (
    <div>
      <div className="bg-white max-w-[900px] mx-auto mt-4 py-2 px-6 flex gap-6 items-center justify-between">
        <Image
          src={image}
          alt="product"
          width={200}
          height={180}
          className=""
        />

        <div className="">
          <div className="font-bold text-2xl">{name}</div>
          <div className="">Qty: {quantity}</div>
        </div>

        <div className="text-3xl font-bold">${price * quantity}</div>

      </div>
    </div>
  );
};

export default CartList;
