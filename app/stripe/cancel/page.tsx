import { Button } from "@/components/Custom-ui/Button";
import Link from "next/link";
import React from "react";

const CancelPage = () => {
  return (
    <div className="flex flex-col justify-center items-center p-24 text-3xl dark:text-gray-300 text-gray-700">
      <p className="text-2xl md:text-5xl text-red-500">
        Ooops! Something went wrong please try again
      </p>
      <p className="mt-32">Or</p>
      <Link href={"/"}>
        <button className="cursor-pointer font-medium h-[60px] leading-[normal] mt-16 text-center text-lg w-[245px] bg-slate-700 rounded-xl text-gray-400">
          Go Shopping Again
        </button>
      </Link>
    </div>
  );
};

export default CancelPage;
