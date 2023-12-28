import Cart from "@/components/Cart";
import dynamic from "next/dynamic";
import React from "react";

const NoSSR = dynamic(() => import("@/components/Cart"), { ssr: false });
const CartPage = () => {
  return (
    <div>
      <NoSSR />
    </div>
  );
};

export default CartPage;
