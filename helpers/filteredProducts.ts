import ProductInterface, { Product } from "./fetchingData";

type PropsType = {
  category: string;
  products: ProductInterface[];
};
//this is type for api return by https://dummyjson.com/products
type PropsType2 = {
  category: string;
  products: Product[];
};

export const filterProducts = ({ products, category }: PropsType) => {
  const filteredProduct: ProductInterface[] = products.filter((product) => {
    if (product.category === category) {
      return product;
    } else {
      return null;
    }
  });
  return filteredProduct;
};

//this is a filtering function for api return by https://dummyjson.com/products
// I'm doing it this way because these two APIs returns different data Schemas

export const filterProducts2 = ({ products, category }: PropsType2) => {
  const filteredProduct: Product[] = products.filter((product) => {
    if (product.category === category) {
      return product;
    } else {
      return null;
    }
  });
  return filteredProduct;
};
