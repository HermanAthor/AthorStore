import { iCollections } from "@/data/collections";
import React from "react";

interface iCollectionsProps {
  collection: iCollections;
}

const Collections = ({ collection }: iCollectionsProps) => {
  const { image, name } = collection;
  return (
    <div className=" relative w-full h-full rounded-lg max-w-[400px] overflow-y-visible pb-5 hover:opacity-70">
      <img
        src={image}
        alt="fashion woman"
        className="md:h-[600px] rounded-2xl object-cover max-w-[400px] md:w-[400px] w-full "
      />
      <div className="flex flex-col justify-start items-start  absolute bottom-5 md:bottom-28 left-5  text-center">
        <h5 className="text-gray-200 text-lg md:text-xl font-semibold">
          Shop the collection
        </h5>
        <h3 className=" text-xl md:text-3xl text-white font-bold">{name}</h3>
      </div>
    </div>
  );
};

export default Collections;
