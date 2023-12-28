"use client";
import { Product } from "@/helpers/fetchingData";
import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import { FaCartPlus } from "react-icons/fa";

function AddToCart({ item }: any) {
  const { addItem } = useCart();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const buttonText = windowWidth > 350 ? "Add" : "Add to cart";
  // const getButtonText = () => {
  //   let text = "";
  //   if (windowWidth < 350) {
  //     return (text = "Add");
  //   } else if (windowWidth < 357) {
  //     return (text = "Add to cart");
  //   }
  // };
  // const buttonText = getButtonText();
  return (
    <div>
      <button
        onClick={() => addItem(item)}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 block md:px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <p className="inline md:hidden">Add</p>
        <p className="hidden md:inline">Add to cart</p>
      </button>
    </div>
  );
}

export default AddToCart;
