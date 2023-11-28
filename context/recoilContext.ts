"use client";

import { atom } from "recoil";

const cartState = atom<any>({
  key: "cartState",
  default: [],
});

export default cartState;
