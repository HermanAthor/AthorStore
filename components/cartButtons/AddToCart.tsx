"use client";
import { Product } from "@/helpers/fetchingData";
import React from "react";
import { useCart } from "react-use-cart";

function AddToCart({ item }: any) {
  const { addItem } = useCart();
  return (
    <div>
      <button
        onClick={() => addItem(item)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 block md:px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddToCart;
