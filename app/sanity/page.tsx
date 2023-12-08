import { client } from "@/libs/sanity";
import React from "react";

const getData = async () => {
  const query = "*[_type == 'product']";
  const data = await client.fetch(query);
  return data;
};

const page = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <p>Hello there</p>
    </div>
  );
};

export default page;
