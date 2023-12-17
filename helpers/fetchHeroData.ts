import { client } from "@/libs/sanity";

// function that query data from sanity studio
export const fetchHeroData = async () => {
  const query = "*[_type == 'heroData']";
  const data = await client.fetch(query);
  return data;
};
