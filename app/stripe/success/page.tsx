import React from "react";

import { Button } from "@/components/Custom-ui/Button";

const SuccessPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins gap-[35px] items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="flex flex-row gap-4 items-start justify-start ml-36 md:ml-[0] md:px-5 w-[19%] md:w-full">
            <h2 className="text-gray-500 text-lg">Home</h2>
            <p className="text-bluegray-100 text-lg">
              <>&gt;</>
            </p>
            <h2 className="text-gray-500 text-lg">Shopping Cart</h2>
            <p className="text-bluegray-100 text-lg">
              <>&gt;</>
            </p>
            <h2 className="text-gray-800 text-lg">Checkout</h2>
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1604px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-row gap-6 items-center justify-start w-[16%] md:w-full">
              <h1 className="border-2 border-gray-800 border-solid flex h-14 items-center justify-center sm:px-5 rounded-[50%] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-14">
                1
              </h1>
              <h2 className="text-2xl md:text-[22px] text-gray-800 sm:text-xl">
                Shopping Cart
              </h2>
            </div>
            <div className="bg-gray-800 h-0.5 md:ml-[0] ml-[21px] md:mt-0 my-[27px] w-[24%]"></div>
            <div className="flex md:flex-1 flex-row gap-6 items-center justify-center md:ml-[0] ml-[57px] w-[13%] md:w-full">
              <p className="border-2 border-gray-800 border-solid flex h-14 items-center justify-center sm:px-5 rounded-[50%] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-14">
                2
              </p>
              <h2 className="text-2xl md:text-[22px] text-gray-800 sm:text-xl">
                Checkout
              </h2>
            </div>
            <div className="bg-gray-800 h-0.5 ml-14 md:ml-[0] md:mt-0 my-[27px] w-[24%]"></div>
            <div className="flex md:flex-1 flex-row gap-6 items-center justify-start ml-8 md:ml-[0] w-[14%] md:w-full">
              <p className="border-2 border-gray-800 border-solid flex h-14 items-center justify-center rounded-[50%] text-2xl md:text-[22px] text-center text-gray-800 sm:text-xl w-14">
                3
              </p>
              <h1 className="text-2xl md:text-[22px] text-gray-800 sm:text-xl">
                Completed
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[614px] mt-[222px] md:px-5 w-[37%] md:w-full">
            <h2 className="md:text-5xl text-[64px] text-gray-800">
              Checkout Complete!
            </h2>
            <h3 className="leading-[32.00px] mt-4 text-center text-gray-800 text-lg w-[98%] sm:w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </h3>
            <Button
              className="cursor-pointer font-medium h-[60px] leading-[normal] mt-16 text-center text-lg w-[245px]"
              shape="square"
              color="gray_800"
              size="xl"
              variant="fill"
            >
              Go Shopping Again
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;
