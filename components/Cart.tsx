"use client";

//import cartState from "@/context/recoilContext";
import { useEffect, useState } from "react";
// import { useRecoilState } from "recoil";
// import AddButton from "./cartButtons/AddButton";
// import RemoveItem from "./cartButtons/RemoveItem";
// import axios from "axios";
import getStripe from "../libs/getStripe";
import { useCart } from "react-use-cart";
import Link from "next/link";

const Cart = () => {
  // const [cartItems, setCartItems] = useRecoilState<any>(cartState);
  const [subTotal, setSubTotal] = useState<number>(0);
  //code related to react-use-cart library
  const { isEmpty, items, updateItemQuantity, removeItem } = useCart();

  useEffect(() => {
    let totalAmount = 0;

    items.forEach((item: any) => {
      const { quantity, price } = item;
      totalAmount += price * quantity;
    });

    setSubTotal(totalAmount);
  }, [items]);
  const shippingAmount = 4.99;
  const grandTotal = subTotal + shippingAmount;
  //Stripe checkout
  const checkOut = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(items),
    });

    if (!response.ok) {
      console.error(
        "Failed to fetch data:",
        response.status,
        response.statusText
      );
      return;
    }

    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  if (isEmpty)
    return (
      <div className="flex justify-center items-center flex-col py-40">
        <p className="text-2xl md:text-4xl">Your cart is empty</p>
        <p className="text-xl md:text-2xl py-10">
          But you can fill it up by clicking{" "}
          <span className="text-blue-400 hover:underline">
            <Link href={"/shop"}>shop here</Link>
          </span>
        </p>
      </div>
    );
  return (
    <>
      <div className="h-screen bg-gray-100 dark:bg-gray-700 pt-20 overflow-scroll no-scrollbar">
        <h1 className="mb-10 text-center text-2xl font-bold">Your Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {items?.map((item: any) => {
              const { id, title, quantity, image, price } = item;

              let photo = "";
              if (image) {
                photo = image;
              } else {
                photo = item.thumbnail;
              }
              return (
                <div
                  key={id}
                  className="justify-between mb-6 rounded-lg bg-white dark:bg-gray-600 p-6 shadow-md sm:flex sm:justify-start"
                >
                  <img
                    src={photo}
                    alt={title}
                    className="w-full object-contain rounded-lg sm:w-40 h-36"
                  />

                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {title}
                      </h2>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                          className="cursor-pointer  bg-gray-100 dark:bg-gray-700 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {"-"}
                        </button>
                        <input
                          className="h-8 w-8 bg-white dark:bg-gray-700 text-center text-xs outline-none"
                          type="number"
                          readOnly
                          value={quantity}
                          min="1"
                          id="I do not this id for now"
                        />
                        <button
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                          className="cursor-pointer  bg-gray-100 dark:bg-gray-700 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                        >
                          {"+"}
                        </button>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">{price}</p>
                        <button onClick={() => removeItem(item.id)}>
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
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white dark:bg-gray-700 p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700 dark:text-gray-100">Subtotal</p>
              <p className="text-gray-700 dark:text-gray-100">
                {subTotal.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700 dark:text-gray-100">Shipping</p>
              <p className="text-gray-700 dark:text-gray-100 line-through">
                {shippingAmount}
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  {subTotal.toFixed(2)} USD
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-100 line-through">
                  {grandTotal.toFixed(2)}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-100">
                  including VAT
                </p>
              </div>
            </div>
            <button
              disabled={isEmpty}
              onClick={checkOut}
              className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600 disabled:bg-blue-200"
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
