import { Button } from "@/components/Custom-ui/Button";
import Link from "next/link";
import React from "react";

const CancelPage = () => {
  return (
    <div className="flex flex-col justify-center items-center p-24 text-3xl dark:text-gray-300 text-gray-700">
      <p>Ooops! Something went wrong please try again</p>
      <p>Or</p>
      <Link href={"/"}>
        <Button
          className="cursor-pointer font-medium h-[60px] leading-[normal] mt-16 text-center text-lg w-[245px]"
          shape="square"
          color="gray_800"
          size="xl"
          variant="fill"
        >
          Go Shopping Again
        </Button>
      </Link>
    </div>
  );
};

export default CancelPage;
