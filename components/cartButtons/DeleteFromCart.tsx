import cartState from "@/context/recoilContext";
import ProductInterface, { Product } from "@/helpers/fetchingData";
import React from "react";
import { useRecoilState } from "recoil";

interface removeFromCartProps {
  item: ProductInterface | Product;
}

const DeleteFromCart = ({ item }: removeFromCartProps) => {
  const [cartItems, setCartItems] = useRecoilState<any>(cartState);
  const deleteFromCart = () => {
    setCartItems(cartItems.filter((cartItem: any) => cartItem.id !== item.id));
  };

  return (
    <div>
      <button onClick={() => deleteFromCart()}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default DeleteFromCart;
