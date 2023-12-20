"use client";
import cartState from "@/context/recoilContext";
import { addToCart, removeFromCart } from "@/helpers/cartInteractions";
import ProductInterface, { Product } from "@/helpers/fetchingData";
import React from "react";
import { useRecoilState } from "recoil";
import { ToastContainer, toast } from "react-toastify";
//import toast, { Toaster } from "react-hot-toast";

interface pageProps {
  item: ProductInterface | Product;
  text: string;
}

const AddButton = ({ item, text }: pageProps) => {
  const [cartItems, setCartItems] = useRecoilState<any>(cartState);
  const notify = () => toast("Item added to cart");
  return (
    <div>
      <button
        onClick={() =>
          addToCart({
            product: item,
            cartItems: cartItems,
            setCartItems: setCartItems,
          })
        }
        className="cursor-pointer  bg-gray-100 dark:bg-gray-700 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
      >
        {" "}
        {text}{" "}
      </button>
    </div>
  );
};

export default AddButton;
