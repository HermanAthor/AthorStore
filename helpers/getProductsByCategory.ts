import axios, { AxiosResponse } from "axios";
import ProductInterface from "./fetchingData";

const apiURL = "https://dummyjson.com/products";
async function getProductsByCategory(
  category: string
): Promise<ProductInterface[]> {
  try {
    const response: AxiosResponse<ProductInterface[]> = await axios.get(
      apiURL,
      {
        params: { category },
      }
    );
    if (response.status === 200) {
      const categoryProducts: ProductInterface[] = response.data.filter(
        (product) => product.category === category
      );

      return categoryProducts;
    } else {
      console.error(`Error: ${response.status}`);
      return [];
    }
  } catch (error: any) {
    console.error("An error occurred:", error.message);
    return [];
  }
}

export default getProductsByCategory;
