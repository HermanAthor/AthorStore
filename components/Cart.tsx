"use client";

import cartState from "@/context/recoilContext";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const Cart = () => {
  const [cartItems, setCartItems] = useRecoilState<any>(cartState);
  const [subTotal, setSubTotal] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  useEffect(() => {
    let totalAmount = 0;

    cartItems.forEach((item: any) => {
      const { quantity, price } = item;
      totalAmount += price * quantity;
    });

    setSubTotal(totalAmount);
  }, [cartItems]);
  const shippingAmount = 4.99;
  const grandTotal = subTotal + shippingAmount;

  return (
    <>
      <div className="h-screen bg-gray-100 dark:bg-gray-700 pt-20 overflow-scroll no-scrollbar">
        <h1 className="mb-10 text-center text-2xl font-bold">Your Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cartItems?.map((item: any) => {
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
                    className="w-full rounded-lg sm:w-40 h-36"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                        {title}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700 dark:text-gray-100">
                        36EU - 4US
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer  bg-gray-100 dark:bg-gray-700 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                          {" "}
                          -{" "}
                        </span>
                        <input
                          className="h-8 w-8 bg-white dark:bg-gray-700 text-center text-xs outline-none"
                          type="number"
                          value={quantity}
                          min="1"
                        />
                        <button className="cursor-pointer  bg-gray-100 dark:bg-gray-700 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                          {" "}
                          +{" "}
                        </button>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">{price}</p>
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
              <p className="text-gray-700 dark:text-gray-100">
                {shippingAmount}
              </p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  {grandTotal.toFixed(2)} USD
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-100">
                  including VAT
                </p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;