import ProductInterface from "./fetchingData";

// const womensClothing = products.filter((product) => {
//   if (product.category === "women's clothing") {
//     return product;
//   } else {
//     return null;
//   }
// });
type PropsType = {
  category: string;
  products: ProductInterface[];
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
