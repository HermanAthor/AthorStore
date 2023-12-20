"use client";
import cartState from "@/context/recoilContext";
import { addToCart } from "@/helpers/cartInteractions";
import ProductInterface, { Product } from "@/helpers/fetchingData";
import React from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
type pageProps = {
  product: ProductInterface | Product;
  text: string;
};
const BuyButton = ({ product, text }: pageProps) => {
  const [cartItems, setCartItems] = useRecoilState<any>(cartState);
  const notify = () => toast("Item added to cart");
  return (
    <div className=" inline-block">
      <button
        onClick={() =>
          addToCart({
            product: product,
            cartItems: cartItems,
            setCartItems: setCartItems,
          })
        }
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 block md:px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {text}
      </button>
    </div>
  );
};

export default BuyButton;
