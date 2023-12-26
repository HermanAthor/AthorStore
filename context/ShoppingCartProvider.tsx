"use client";
import React from "react";
import { CartProvider } from "react-use-cart";

function ShoppingCartProvider({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

export default ShoppingCartProvider;
